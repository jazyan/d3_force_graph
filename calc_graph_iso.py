from itertools import permutations

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

def get_no_isomorphisms_list(num_nodes):
    nodes = [i for i in range(num_nodes)]
    edges = generate_edges(nodes)
    graph_candidates = powerset(edges)
    perm = list(permutations(nodes))
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
            for elt in candidate:
                new_elt = tuple(sorted([p[e] for e in elt]))
                new_candidate.append(new_elt)
            new_candidate = tuple(sorted(new_candidate))
            seen.add(new_candidate)
    return no_iso_list

no_iso_list = get_no_isomorphisms_list(3)
print(no_iso_list)