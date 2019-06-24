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

def check_subgraphs(graph, subgraph_candidates_list, graph_ind):
    lines = []
    graph_perms = generate_graph_perms(graph)
    for gp in graph_perms:
        for i in range(len(subgraph_candidates_list)):
            if gp == subgraph_candidates_list[i]:
                x1, y1 = d_edges_centers[len(gp)][i]
                x2, y2 = d_edges_centers[len(gp) + 1][graph_ind]
                lines.append([x1, y1, x2, y2])
    return lines 

num_nodes = 5
nodes = [i for i in range(num_nodes)]
edges = generate_edges(nodes)
perm = list(permutations(nodes))
graph_candidates = powerset(edges)
no_iso_list = get_no_isomorphisms_list()
WIDTH = 1000
HEIGHT = 1700

# key is number of edges E, value is a list of graphs with E edges 
d_edges_list = defaultdict(list)
# key is number of edges E, value is list of center positions for graph
for graph in no_iso_list:
    d_edges_list[len(graph)].append(graph)

d_edges_centers = defaultdict(list)
for num_edges, graph_list in d_edges_list.items():
    L = len(graph_list)
    dist, y = 100, num_edges * 150 + 100
    d_edges_centers[num_edges] = [(WIDTH//2 - (L-1)*dist//2 + i*dist, y) for i in range(L)]

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
    for num_edges, center_list in d_edges_centers.items():
        for x, y in center_list:
            f.write(f'    [{x}, {y}],\n')
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
            x, y = d_edges_centers[num][i]
            f.write(f'var sim{var_num} = createSimulation(ndata, ldata{num}[{i}], {x}, {y});\n')
            f.write(f'var node{var_num} = createNode(ndata);\n')
            f.write(f'var link{var_num} = createLink(ldata{num}[{i}]);\n')
            f.write(f'sim{var_num}.on("tick", function() {{tickActions(node{var_num}, link{var_num})}});\n')
            f.write('\n')