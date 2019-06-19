var ndata = [
    {"id": 0},
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
]

var ldata0 = [
    [],
]

var ldata1 = [
    [{'source': 0, 'target': 1}],
]

var ldata2 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}],
    [{'source': 0, 'target': 3}, {'source': 1, 'target': 2}],
]

var ldata3 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 1, 'target': 2}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 3}, {'source': 1, 'target': 2}],
    [{'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}],
]

var ldata4 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 1, 'target': 2}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}],
    [{'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 2}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 2, 'target': 3}],
]

var ldata5 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
]

var ldata6 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}],
    [{'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
]

var ldata7 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
]

var ldata8 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}],
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}, {'source': 2, 'target': 4}],
]

var ldata9 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}, {'source': 2, 'target': 4}],
]

var ldata10 = [
    [{'source': 0, 'target': 1}, {'source': 0, 'target': 2}, {'source': 0, 'target': 3}, {'source': 0, 'target': 4}, {'source': 1, 'target': 2}, {'source': 1, 'target': 3}, {'source': 1, 'target': 4}, {'source': 2, 'target': 3}, {'source': 2, 'target': 4}, {'source': 3, 'target': 4}],
]

var lines = [
   [100, 100, 100, 200],
   [100, 200, 100, 300],
   [100, 200, 100, 300],
   [100, 200, 200, 300],
   [100, 200, 200, 300],
   [100, 300, 100, 400],
   [100, 300, 100, 400],
   [100, 300, 100, 400],
   [100, 300, 200, 400],
   [100, 300, 200, 400],
   [100, 300, 200, 400],
   [200, 300, 300, 400],
   [100, 300, 300, 400],
   [100, 300, 300, 400],
   [200, 300, 400, 400],
   [200, 300, 400, 400],
   [100, 300, 400, 400],
   [100, 400, 100, 500],
   [100, 400, 100, 500],
   [100, 400, 100, 500],
   [100, 400, 100, 500],
   [300, 400, 200, 500],
   [300, 400, 200, 500],
   [200, 400, 200, 500],
   [100, 400, 200, 500],
   [400, 400, 300, 500],
   [300, 400, 300, 500],
   [300, 400, 300, 500],
   [100, 400, 300, 500],
   [300, 400, 400, 500],
   [300, 400, 400, 500],
   [300, 400, 400, 500],
   [300, 400, 400, 500],
   [400, 400, 500, 500],
   [300, 400, 500, 500],
   [400, 400, 500, 500],
   [300, 400, 500, 500],
   [200, 400, 600, 500],
   [400, 400, 600, 500],
   [400, 400, 600, 500],
   [400, 400, 600, 500],
   [300, 500, 100, 600],
   [300, 500, 100, 600],
   [200, 500, 100, 600],
   [200, 500, 100, 600],
   [100, 500, 100, 600],
   [400, 500, 200, 600],
   [200, 500, 200, 600],
   [200, 500, 200, 600],
   [200, 500, 200, 600],
   [200, 500, 200, 600],
   [500, 500, 300, 600],
   [300, 500, 300, 600],
   [200, 500, 300, 600],
   [300, 500, 300, 600],
   [200, 500, 300, 600],
   [500, 500, 400, 600],
   [500, 500, 400, 600],
   [400, 500, 400, 600],
   [300, 500, 400, 600],
   [300, 500, 400, 600],
   [600, 500, 500, 600],
   [200, 500, 500, 600],
   [500, 500, 500, 600],
   [500, 500, 500, 600],
   [300, 500, 500, 600],
   [500, 500, 600, 600],
   [500, 500, 600, 600],
   [500, 500, 600, 600],
   [500, 500, 600, 600],
   [500, 500, 600, 600],
   [400, 600, 100, 700],
   [300, 600, 100, 700],
   [300, 600, 100, 700],
   [200, 600, 100, 700],
   [100, 600, 100, 700],
   [100, 600, 100, 700],
   [400, 600, 200, 700],
   [400, 600, 200, 700],
   [400, 600, 200, 700],
   [400, 600, 200, 700],
   [400, 600, 200, 700],
   [400, 600, 200, 700],
   [200, 600, 300, 700],
   [200, 600, 300, 700],
   [200, 600, 300, 700],
   [200, 600, 300, 700],
   [200, 600, 300, 700],
   [200, 600, 300, 700],
   [500, 600, 400, 700],
   [500, 600, 400, 700],
   [200, 600, 400, 700],
   [400, 600, 400, 700],
   [300, 600, 400, 700],
   [300, 600, 400, 700],
   [500, 600, 500, 700],
   [500, 600, 500, 700],
   [500, 600, 500, 700],
   [500, 600, 500, 700],
   [100, 600, 500, 700],
   [100, 600, 500, 700],
   [600, 600, 600, 700],
   [500, 600, 600, 700],
   [400, 600, 600, 700],
   [500, 600, 600, 700],
   [400, 600, 600, 700],
   [300, 600, 600, 700],
   [200, 700, 100, 800],
   [100, 700, 100, 800],
   [100, 700, 100, 800],
   [100, 700, 100, 800],
   [100, 700, 100, 800],
   [100, 700, 100, 800],
   [100, 700, 100, 800],
   [400, 700, 200, 800],
   [400, 700, 200, 800],
   [400, 700, 200, 800],
   [300, 700, 200, 800],
   [100, 700, 200, 800],
   [100, 700, 200, 800],
   [100, 700, 200, 800],
   [600, 700, 300, 800],
   [600, 700, 300, 800],
   [400, 700, 300, 800],
   [400, 700, 300, 800],
   [500, 700, 300, 800],
   [100, 700, 300, 800],
   [100, 700, 300, 800],
   [600, 700, 400, 800],
   [600, 700, 400, 800],
   [400, 700, 400, 800],
   [600, 700, 400, 800],
   [600, 700, 400, 800],
   [400, 700, 400, 800],
   [200, 700, 400, 800],
   [400, 800, 100, 900],
   [300, 800, 100, 900],
   [300, 800, 100, 900],
   [200, 800, 100, 900],
   [300, 800, 100, 900],
   [300, 800, 100, 900],
   [200, 800, 100, 900],
   [100, 800, 100, 900],
   [400, 800, 200, 900],
   [400, 800, 200, 900],
   [400, 800, 200, 900],
   [400, 800, 200, 900],
   [300, 800, 200, 900],
   [300, 800, 200, 900],
   [300, 800, 200, 900],
   [300, 800, 200, 900],
   [200, 900, 100, 1000],
   [200, 900, 100, 1000],
   [100, 900, 100, 1000],
   [100, 900, 100, 1000],
   [200, 900, 100, 1000],
   [100, 900, 100, 1000],
   [100, 900, 100, 1000],
   [100, 900, 100, 1000],
   [100, 900, 100, 1000],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
   [100, 1000, 100, 1100],
]
