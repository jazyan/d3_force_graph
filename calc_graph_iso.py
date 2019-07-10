from itertools import permutations
from collections import defaultdict

# generate edges given a list of nodes
# assume that the edges are undirected, so [0, 1] = [1, 0]
# the convention is to list the smaller node first
def generate_edges(nodes):
    N = len(nodes)
    edges = []
    for i in range(N-1):
        for j in range(i+1, N):
            edges.append((nodes[i], nodes[j]))
    return edges

# given a list L, generate the powerset
# see https://stackoverflow.com/a/1482320
def powerset(li):
    L = len(li)
    A = []
    for i in range(1 << L):
        subset = tuple(li[j] for j in range(L) if (i & (1 << j)))
        A.append(subset)
    return A

# returns a list of all the graphs with N nodes
# represented as edge lists where no two are isomorphisms of each other
def get_no_isomorphisms_list(graph_candidates, perm):
    no_iso_list = []
    seen = set()
    for graph in graph_candidates:
        # if we've seen this candidate before, then don't process
        if graph in seen:
            continue
        # otherwise, process this graph with permutation function
        no_iso_list.append(graph)
        seen |= generate_graph_perms(graph, perm)
    return sorted(no_iso_list, key=len)

# given a graph, generate a set of node permutations
# for example, the graph [[0, 1], [1, 2]] permuted is [[0, 2], [2, 1]]
def generate_graph_perms(graph, perm):
    graph_perm = set()
    for p in perm:
        # we sort everything because the edges are undirected
        # we don't want to distinguish between [0, 1] and [1, 0]
        # use tuples because we want to put them in a set and tuples are hashable
        new_graph = [tuple(sorted([p[e] for e in elt])) for elt in graph]
        new_graph = tuple(sorted(new_graph))
        graph_perm.add(new_graph)
    return graph_perm

# generate the graph permutations where, additionally,
# edges that contain either n1 or n2 are removed
def generate_graph_perms_remove_nodes(graph, rn1, rn2, perm):
    graph = [edge for edge in graph if rn1 not in edge and rn2 not in edge]
    return generate_graph_perms(graph, perm)

# find all the subgraphs of a graph centered at (x2, y2)
# return the lines defined by (x1, y1) -> (x2, y2)
# where (x1, y1) is the center of the subgraph
def generate_lines_to_subgraphs(graph, subgraph_candidates_list, graph_ind, perm):
    lines = []
    graph_perms = generate_graph_perms(graph, perm)
    for gp in graph_perms:
        for i in range(len(subgraph_candidates_list)):
            if gp == subgraph_candidates_list[i]:
                x1, y1, _ = d_edges_centers_and_labels[len(gp)][i]
                x2, y2, _ = d_edges_centers_and_labels[len(gp) + 1][graph_ind]
                lines.append([x1, y1, x2, y2])
    return lines 

# do the following three procedures
# (1) t(G) <= t(G\{u,v}) * pN
# (2) t(G) <= max(t(G\e)) * p
# (3) t(G) <= min(t(G\e))
# take the answer with the smallest power of N, then the largest power of p
# to make this easier, represent pN as a tuple (N, -p)
# so we can sort and get the smallest tuple
def generate_labels(num_nodes):
    if num_nodes == 2:
        return {0: [(2, 0)], 1: [(1, -1)]}
    if num_nodes == 3:
        return {0: [(3, 0)], 1: [(2, -1)], 2: [(2, -2)], 3: [(2, -3)]}
    # d_small contains the answers for graphs with 2 nodes and 3 nodes
    # we have to include the number of nodes in the key because the
    # empty graph on 2 vertices is different from the empty graph on 3
    d_small = {
        (2, ()): (2, 0), 
        (2, ((0, 1),)): (1, -1), 
        (3, ()): (3, 0), 
        (3, ((0, 1),)): (2, -1), 
        (3, ((0, 1), (0, 2))): (2, -2),
        (3, ((0, 1), (0, 2), (1, 2))): (2, -3),
    }
    # we need cases up to num_nodes - 2, and 2 and 3 are included above
    for n in range(4, num_nodes - 1):
        d_ans = generate_labels_n(d_small, n)
        for graph, value in d_ans.items():
            d_small[(n, graph)] = value
    return generate_labels_n(d_small, num_nodes)


def generate_labels_n(d_small, num_nodes):
    d_ans = {}
    perm = generate_permutation(num_nodes)
    no_iso_list = generate_no_iso_list(num_nodes, perm)
    # no_iso_list is a list of graphs represented as an edge list
    # sorted by ascending number of edges
    for graph in no_iso_list:
        if len(graph) == 0:
            d_ans[graph] = (num_nodes, 0)
            continue
        # candidates_small contains candidates for (1), candidates_equal for (2) and (3)
        candidates_small = []
        candidates_equal = []
        for i in range(len(graph)):
            # first, generate all permutations of graphs without edge i
            # then check if it's already in d_ans, and add it as a candidate for (2) and (3)
            graph_without_edge_i = graph[:i] + graph[i+1:]
            graph_perms = generate_graph_perms(graph_without_edge_i, perm)
            for gp in graph_perms:
                if gp in d_ans:
                    candidates_equal.append(d_ans[gp])
            # second, generate all permutations without the nodes in edge i
            # this is for procedure (1); check if the resulting graphs are in d_small
            graph_perms_small = generate_graph_perms_remove_nodes(graph, graph[i][0], graph[i][1], perm)
            for gps in graph_perms_small:
                key_candidate = (num_nodes - 2, gps)
                if key_candidate in d_small:
                    candidates_small.append(d_small[key_candidate])
        # procedure (1)
        candidates = [(n + 1, p - 1) for (n, p) in candidates_small]
        # procedure (2)
        n1, p1 = max(candidates_equal)
        candidates.append((n1, p1 - 1))
        # procedure (3)
        n2, p2 = min(candidates_equal)
        candidates.append((n2, p2))
        # the actual answer should be the min tuple across candidates
        d_ans[graph] = min(candidates)
    return d_ans 


# given d_edges_list, a dict of number of edges E to list of graphs with E edges
# and d_labels, a dict of graphs to labels
# return a dict with number of edges to list of centers and labels
def generate_centers_and_labels(d_edges_list, d_labels):
    d_edges_centers_and_labels = defaultdict(list)
    for num_edges, graph_list in d_edges_list.items():
        L = len(graph_list)
        dist = 100
        y = num_edges * 250 + 50
        # key is number of edges E, value is list of center positions for graph
        for i in range(L):
            x = WIDTH//2 - (L-1)*dist//2 + i*dist
            label = d_labels[graph_list[i]]
            d_edges_centers_and_labels[num_edges].append((x, y, label))
    return d_edges_centers_and_labels

# given no_iso_list, a list of graphs with N nodes and no pair that's isomorphic
# return a dictionary of number of edges E to list of graphs with E edges
def generate_edges_list_dict(no_iso_list):
    # key is number of edges E, value is a list of graphs with E edges 
    d_edges_list = defaultdict(list)
    for graph in no_iso_list:
        d_edges_list[len(graph)].append(graph)
    return d_edges_list

# given a dictionary of edges E to a list of graphs with E edges
# return the list of lines between all the graph and their respective subgraphs
def generate_lines(d_edges_list, perm):
    # will contain [[x11, y11, x12, y12], ..., [xn1, yn1, xn2, yn2]]
    lines_to_draw = []
    for num_edges, graph_list in d_edges_list.items():
        # there is no subgraph for the empty graph
        if num_edges == 0:
            continue
        # remove an edge, then check if permuting the remaining edges 
        # results in a graph with E - 1 edges
        for i in range(len(graph_list)):
            for j in range(len(graph_list[i])):
                graph_to_check = graph_list[i][:j] + graph_list[i][j+1:]
                lines_to_draw += generate_lines_to_subgraphs(graph_to_check, d_edges_list[num_edges - 1], i, perm)
    return lines_to_draw

def generate_no_iso_list(num_nodes, perm):
    nodes = [i for i in range(num_nodes)]
    edges = generate_edges(nodes)
    graph_candidates = powerset(edges)
    return get_no_isomorphisms_list(graph_candidates, perm)

def generate_permutation(num_nodes):
    nodes = [i for i in range(num_nodes)]
    return list(permutations(nodes))

WIDTH = 3000
HEIGHT = 1700
# TODO: clean up below
num_nodes = 6
perm = generate_permutation(num_nodes)
no_iso_list = generate_no_iso_list(num_nodes, perm)

d_edges_list = generate_edges_list_dict(no_iso_list)
d_labels = generate_labels(num_nodes)
d_edges_centers_and_labels = generate_centers_and_labels(d_edges_list, d_labels)
lines_to_draw = generate_lines(d_edges_list, perm)

# below generates the graph data for d3 visualization
with open('js/generated_graph_data.js', 'w') as f:
    # create node data
    f.write('var ndata = [\n')
    for i in range(num_nodes):
        f.write(f'    {{"id": {i}}},\n')
    f.write(']\n\n')
    # create link data
    for num, graphs in d_edges_list.items():
        f.write(f'var ldata{num} = [\n')
        for graph in graphs:
            g = [{"source": e1, "target": e2} for e1, e2 in graph] 
            f.write(f'    {g},\n')
        f.write(']\n\n')
    # create graph edge data
    f.write('var lines = [\n')
    for x1, y1, x2, y2 in lines_to_draw:
        f.write(f'   [{x1}, {y1}, {x2}, {y2}],\n')
    f.write(']\n\n')
    # create graph node center data
    f.write('var centers = [\n')
    for num_edges, center_list in d_edges_centers_and_labels.items():
        for x, y, l in center_list:
            f.write(f'    [{x}, {y}, {-l[1]}, {l[0]}],\n')
    f.write(']\n\n')
    

# below generates the d3 simulation variables for each graph
with open('js/generated_graph_viz.js', 'w') as f:
    # var sim0 = createSimulation(ndata, ldata[0], 100, 500);
    # var node0 = createNode(ndata);
    # var link0 = createLink(ldata[0]);
    # sim0.on("tick", function() {tickActions(node0, link0)});
    for num, graphs in d_edges_list.items():
        for i in range(len(graphs)):
            var_num = str(num * 100 + i)
            x, y, l = d_edges_centers_and_labels[num][i]
            f.write(f'var sim{var_num} = createSimulation(ndata, ldata{num}[{i}], {x}, {y});\n')
            f.write(f'var node{var_num} = createNode(ndata);\n')
            f.write(f'var link{var_num} = createLink(ldata{num}[{i}]);\n')
            f.write(f'sim{var_num}.on("tick", function() {{tickActions(node{var_num}, link{var_num})}});\n')
            f.write('\n')