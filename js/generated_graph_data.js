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
   [500, 100, 500, 200],
   [500, 200, 450, 300],
   [500, 200, 450, 300],
   [500, 200, 550, 300],
   [500, 200, 550, 300],
   [450, 300, 350, 400],
   [450, 300, 350, 400],
   [450, 300, 350, 400],
   [450, 300, 450, 400],
   [450, 300, 450, 400],
   [450, 300, 450, 400],
   [550, 300, 550, 400],
   [450, 300, 550, 400],
   [450, 300, 550, 400],
   [550, 300, 650, 400],
   [550, 300, 650, 400],
   [450, 300, 650, 400],
   [350, 400, 250, 500],
   [350, 400, 250, 500],
   [350, 400, 250, 500],
   [350, 400, 250, 500],
   [550, 400, 350, 500],
   [550, 400, 350, 500],
   [450, 400, 350, 500],
   [350, 400, 350, 500],
   [650, 400, 450, 500],
   [550, 400, 450, 500],
   [550, 400, 450, 500],
   [350, 400, 450, 500],
   [550, 400, 550, 500],
   [550, 400, 550, 500],
   [550, 400, 550, 500],
   [550, 400, 550, 500],
   [650, 400, 650, 500],
   [550, 400, 650, 500],
   [650, 400, 650, 500],
   [550, 400, 650, 500],
   [450, 400, 750, 500],
   [650, 400, 750, 500],
   [650, 400, 750, 500],
   [650, 400, 750, 500],
   [450, 500, 250, 600],
   [450, 500, 250, 600],
   [350, 500, 250, 600],
   [350, 500, 250, 600],
   [250, 500, 250, 600],
   [550, 500, 350, 600],
   [350, 500, 350, 600],
   [350, 500, 350, 600],
   [350, 500, 350, 600],
   [350, 500, 350, 600],
   [650, 500, 450, 600],
   [450, 500, 450, 600],
   [350, 500, 450, 600],
   [450, 500, 450, 600],
   [350, 500, 450, 600],
   [650, 500, 550, 600],
   [650, 500, 550, 600],
   [550, 500, 550, 600],
   [450, 500, 550, 600],
   [450, 500, 550, 600],
   [750, 500, 650, 600],
   [350, 500, 650, 600],
   [650, 500, 650, 600],
   [650, 500, 650, 600],
   [450, 500, 650, 600],
   [650, 500, 750, 600],
   [650, 500, 750, 600],
   [650, 500, 750, 600],
   [650, 500, 750, 600],
   [650, 500, 750, 600],
   [550, 600, 250, 700],
   [450, 600, 250, 700],
   [450, 600, 250, 700],
   [350, 600, 250, 700],
   [250, 600, 250, 700],
   [250, 600, 250, 700],
   [550, 600, 350, 700],
   [550, 600, 350, 700],
   [550, 600, 350, 700],
   [550, 600, 350, 700],
   [550, 600, 350, 700],
   [550, 600, 350, 700],
   [350, 600, 450, 700],
   [350, 600, 450, 700],
   [350, 600, 450, 700],
   [350, 600, 450, 700],
   [350, 600, 450, 700],
   [350, 600, 450, 700],
   [650, 600, 550, 700],
   [650, 600, 550, 700],
   [350, 600, 550, 700],
   [550, 600, 550, 700],
   [450, 600, 550, 700],
   [450, 600, 550, 700],
   [650, 600, 650, 700],
   [650, 600, 650, 700],
   [650, 600, 650, 700],
   [650, 600, 650, 700],
   [250, 600, 650, 700],
   [250, 600, 650, 700],
   [750, 600, 750, 700],
   [650, 600, 750, 700],
   [550, 600, 750, 700],
   [650, 600, 750, 700],
   [550, 600, 750, 700],
   [450, 600, 750, 700],
   [350, 700, 350, 800],
   [250, 700, 350, 800],
   [250, 700, 350, 800],
   [250, 700, 350, 800],
   [250, 700, 350, 800],
   [250, 700, 350, 800],
   [250, 700, 350, 800],
   [550, 700, 450, 800],
   [550, 700, 450, 800],
   [550, 700, 450, 800],
   [450, 700, 450, 800],
   [250, 700, 450, 800],
   [250, 700, 450, 800],
   [250, 700, 450, 800],
   [750, 700, 550, 800],
   [750, 700, 550, 800],
   [550, 700, 550, 800],
   [550, 700, 550, 800],
   [650, 700, 550, 800],
   [250, 700, 550, 800],
   [250, 700, 550, 800],
   [750, 700, 650, 800],
   [750, 700, 650, 800],
   [550, 700, 650, 800],
   [750, 700, 650, 800],
   [750, 700, 650, 800],
   [550, 700, 650, 800],
   [350, 700, 650, 800],
   [650, 800, 450, 900],
   [550, 800, 450, 900],
   [550, 800, 450, 900],
   [450, 800, 450, 900],
   [550, 800, 450, 900],
   [550, 800, 450, 900],
   [450, 800, 450, 900],
   [350, 800, 450, 900],
   [650, 800, 550, 900],
   [650, 800, 550, 900],
   [650, 800, 550, 900],
   [650, 800, 550, 900],
   [550, 800, 550, 900],
   [550, 800, 550, 900],
   [550, 800, 550, 900],
   [550, 800, 550, 900],
   [550, 900, 500, 1000],
   [550, 900, 500, 1000],
   [450, 900, 500, 1000],
   [450, 900, 500, 1000],
   [550, 900, 500, 1000],
   [450, 900, 500, 1000],
   [450, 900, 500, 1000],
   [450, 900, 500, 1000],
   [450, 900, 500, 1000],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
   [500, 1000, 500, 1100],
]
