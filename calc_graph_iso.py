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

# given the number of nodes, return a list of all the graphs
# represented as edge lists where no two graphs are isomorphisms
# of each other
def get_no_isomorphisms_list():
    no_iso_list = []
    seen = set()
    for graph in graph_candidates:
        # if we've seen this candidate before, then don't process
        if graph in seen:
            continue
        # otherwise, process this graph with permutation function
        no_iso_list.append(graph)
        seen |= generate_graph_perms(graph)
    return sorted(no_iso_list, key=len)

# given a graph, generate a set of node permutations
# for example, the graph [[0, 1], [1, 2]] permuted is [[0, 2], [2, 1]]
def generate_graph_perms(graph):
    graph_perm = set()
    for p in perm:
        # we sort everything because the edges are undirected
        # we don't want to distinguish between [0, 1] and [1, 0]
        # use tuples because we want to put them in a set and tuples are hashable
        new_graph = [tuple(sorted([p[e] for e in elt])) for elt in graph]
        new_graph = tuple(sorted(new_graph))
        graph_perm.add(new_graph)
    return graph_perm

# generate the graph perms where you additionally remove the edges that contain
# either n1 or n2
def generate_graph_perms_remove_nodes(graph, rn1, rn2):
    graph = [edge for edge in graph if rn1 not in edge and rn2 not in edge]
    return generate_graph_perms(graph)

def check_subgraphs(graph, subgraph_candidates_list, graph_ind):
    lines = []
    graph_perms = generate_graph_perms(graph)
    for gp in graph_perms:
        for i in range(len(subgraph_candidates_list)):
            if gp == subgraph_candidates_list[i]:
                x1, y1, l1 = d_edges_centers_and_labels[len(gp)][i]
                x2, y2, l1 = d_edges_centers_and_labels[len(gp) + 1][graph_ind]
                lines.append([x1, y1, x2, y2])
    return lines 

# TODO
def generate_labels(num_nodes, no_iso_list):
    # do the following three procedures
    # (1) t(G) <= t(G\{u,v}) * pN
    # (2) t(G) <= max(t(G\e)) * p
    # (3) t(G) <= min(t(G\e))
    # take the answer with the smallest power of N, then the largest power of p
    # let's represent pN as a tuple (N, -p), so we can sort and get the smallest tuple

    # have a dictionary of graphs to answers: 
    # note that (1) requires calculating graphs that have fewer nodes that num_nodes
    # maybe we first do procedures (2) and (3), which can be solved using 1dim DP...

    # question: how will we represent the graphs?
    # if we use an edge list, we'll have to include the number of nodes in the graph
    # otherwise, the empty graph on 2 vertices appears the same as the empty one on 4
    # CHECK THE BELOW
    # for 2: 
    #   (()) -> (2, 0)
    #   ((0, 1)) -> (1, -1)
    # for 3: 
    #   (()) -> (3, 0)
    #   ((0, 1)) -> (2, -1)
    #   ((0, 1), (0, 2)) -> (2, -2)
    #   ((0, 1), (0, 2), (1, 2)) -> (2, -3)
    if num_nodes == 2:
        return {0: [(2, 0)], 1: [(1, -1)]}
    if num_nodes == 3:
        return {0: [(3, 0)], 1: [(2, -1)], 2: [(2, -2)], 3: [(2, -3)]}
    if num_nodes > 5:
        raise Exception('unimplemented')
    # cases 4 and 5
    d_small = {
        (2, ()): (2, 0), 
        (2, ((0, 1),)): (1, -1), 
        (3, ()): (3, 0), 
        (3, ((0, 1),)): (2, -1), 
        (3, ((0, 1), (0, 2))): (2, -2),
        (3, ((0, 1), (0, 2), (1, 2))): (2, -3),
    }
    d_ans = {}
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
            graph_without_edge_i = graph[:i] + graph[i+1:]
            graph_perms = generate_graph_perms(graph_without_edge_i)
            for gp in graph_perms:
                if gp in d_ans:
                    candidates_equal.append(d_ans[gp])
            graph_perms_small = generate_graph_perms_remove_nodes(graph, graph[i][0], graph[i][1])
            for gps in graph_perms_small:
                key_candidate = (num_nodes - 2, gps)
                if key_candidate in d_small:
                    candidates_small.append(d_small[key_candidate])
        candidates = [(n + 1, p - 1) for (n, p) in candidates_small]
        n1, p1 = max(candidates_equal)
        candidates.append((n1, p1 - 1))
        n2, p2 = min(candidates_equal)
        candidates.append((n2, p2))
        d_ans[graph] = min(candidates)
    return d_ans 


num_nodes = 5
nodes = [i for i in range(num_nodes)]
edges = generate_edges(nodes)
perm = list(permutations(nodes))
graph_candidates = powerset(edges)
no_iso_list = get_no_isomorphisms_list()
WIDTH = 1000
HEIGHT = 1700

d_labels = generate_labels(num_nodes, no_iso_list)

# key is number of edges E, value is a list of graphs with E edges 
d_edges_list = defaultdict(list)
# key is number of edges E, value is list of center positions for graph
for graph in no_iso_list:
    d_edges_list[len(graph)].append(graph)

d_edges_centers_and_labels = defaultdict(list)
for num_edges, graph_list in d_edges_list.items():
    L = len(graph_list)
    dist = 100
    y = num_edges * 150 + 100
    for i in range(L):
        x = WIDTH//2 - (L-1)*dist//2 + i*dist
        label = d_labels[graph_list[i]]
        d_edges_centers_and_labels[num_edges].append((x, y, label))

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
            lines_to_draw += check_subgraphs(graph_to_check, d_edges_list[num_edges - 1], i)

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