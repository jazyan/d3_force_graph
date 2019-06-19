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
    for candidate in graph_candidates:
        # if we've seen this candidate before, then don't process
        if candidate in seen:
            continue
        # otherwise, process this graph with permutation function
        no_iso_list.append(candidate)
        for p in perm:
            new_candidate = []
            # we sort everything because the edges are undirected
            # so we don't want to distinguish between [0, 1] and [1, 0]
            # also, use tuples because we want to put them in a set,
            # and tuples, not lists, are hashable types
            for elt in candidate:
                new_elt = tuple(sorted([p[e] for e in elt]))
                new_candidate.append(new_elt)
            new_candidate = tuple(sorted(new_candidate))
            seen.add(new_candidate)
    return sorted(no_iso_list, key=len)

def check_subgraphs(graph, subgraph_candidates_list, graph_ind):
    lines = []
    for p in perm:
        new_graph = []
        for elt in graph:
            new_elt = tuple(sorted([p[e] for e in elt]))
            new_graph.append(new_elt)
        new_graph = tuple(sorted(new_graph))
        for i in range(len(subgraph_candidates_list)):
            if new_graph == subgraph_candidates_list[i]:
                line = [(len(new_graph) + 1) * 100, 100 + i * 100, (len(new_graph) + 2) * 100, 100 + graph_ind * 100]
                lines.append(line)
    return lines 

num_nodes = 5
nodes = [i for i in range(num_nodes)]
edges = generate_edges(nodes)
perm = list(permutations(nodes))
graph_candidates = powerset(edges)
no_iso_list = get_no_isomorphisms_list()
d_edges_list = defaultdict(list)
for graph in no_iso_list:
    d_edges_list[len(graph)].append(graph)

# will contain [[x11, y11, x12, y12], ..., [xn1, yn1, xn2, yn2]]
lines_to_draw = []
for num_edges, graph_list in d_edges_list.items():
    # for graphs with 0 - 2 edges, we know how to draw the lines
    if num_edges == 0:
        continue
    if num_edges == 1:
        lines_to_draw.append([100, 100, 200, 100])
        continue
    if num_edges == 2:
        for i in range(len(graph_list)):
            lines_to_draw.append([200, 100, 300, 100 + i * 100])
        continue
    # for graphs with E edges where E > 2, it's not obvious...
    # so let's remove an edge, then check if permuting the
    # remaining edges results in a graph with E - 1 edges
    for i in range(len(graph_list)):
        for j in range(len(graph_list[i])):
            graph_to_check = graph_list[i][:j] + graph_list[i][j+1:]
            lines_to_draw += check_subgraphs(graph_to_check, d_edges_list[num_edges - 1], i)

# below generates the graph data for d3 visualization
with open('js/generated_graph_data.js', 'w') as f:
    f.write('var ndata = [\n')
    for i in range(num_nodes):
        f.write('    {"id": ' + str(i) + '},\n')
    f.write(']\n\n')
    for num, graphs in d_edges_list.items():
        f.write('var ldata' + str(num) + ' = [\n')
        for graph in graphs:
            g = [{"source": e1, "target": e2} for e1, e2 in graph] 
            f.write('    ' + str(g) + ',\n')
        f.write(']\n\n')
    f.write('var lines = [\n')
    for x1, y1, x2, y2 in lines_to_draw:
        f.write('   [' + str(x1) + ',' + str(y1) + ',' + str(x2) + ',' + str(y2) + '],\n')
    f.write(']\n')

# below generates the d3 simulation variables for each graph
with open('js/generated_graph_viz.js', 'w') as f:
    # var sim0 = createSimulation(ndata, ldata[0], 100, 500);
    # var node0 = createNode(ndata);
    # var link0 = createLink(ldata[0]);
    # sim0.on("tick", function() {tickActions(node0, link0)});
    for num, graphs in d_edges_list.items():
        for i in range(len(graphs)):
            var_num = str(num * 100 + i)
            f.write('var sim' + var_num + ' = createSimulation(ndata, ldata' + str(num) + '[' + str(i) + '], ' 
                    + str((num + 1) * 100) + ', ' + str(100 + i * 100) + ');\n')
            f.write('var node' + var_num + ' = createNode(ndata);\n')
            f.write('var link' + var_num + ' = createLink(ldata' + str(num) + '[' + str(i) + ']);\n')
            f.write('sim' + var_num + '.on("tick", function() {tickActions(node' + var_num + ', link' + var_num + ')});\n')
            f.write('\n')