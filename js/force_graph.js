// d3 code below
// http://www.puzzlr.org/force-graphs-with-d3/
var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");

var nodes_data = [
    {"name": "pikachu", "type": "electric"},
    {"name": "bulbasaur", "type": "grass"},
    {"name": "charmander", "type": "fire"},
    {"name": "squirtle", "type": "water"},
    {"name": "onyx", "type": "rock"},
    {"name": "ashe", "type": "trainer"},
    {"name": "misty", "type": "trainer"},
    {"name": "brock", "type": "trainer"},
    {"name": "nurse joy", "type": "trainer"}
]

var links_data = [
    {"source": "pikachu", "target": "ashe", "type": "pokemon"},
    {"source": "squirtle", "target": "misty", "type": "pokemon"},
    {"source": "onyx", "target": "brock", "type": "pokemon"},
    {"source": "charmander", "target": "nurse joy", "type": "pokemon"},
    {"source": "bulbasaur", "target": "ashe", "type": "pokemon"},
    {"source": "misty", "target": "brock", "type": "crush"},
    {"source": "misty", "target": "nurse joy", "type": "crush"},
    {"source": "misty", "target": "ashe", "type": "crush"},
    {"source": "ashe", "target": "brock", "type": "crush"},
    {"source": "ashe", "target": "nurse joy", "type": "crush"},
    {"source": "brock", "target": "nurse joy", "type": "crush"}
]

var simulation = d3.forceSimulation().nodes(nodes_data);

// link.id() has accessor function which specifies what to use to ID the link
// defaults to the index, so our links_data could have been indices instead
// of names
var link_force = d3.forceLink(links_data)
                    .id(function(d) {return d.name;})

// .force(): first arg = desired name, second arg = desired force function
simulation
    // each node is a charged particle, so each repel each other when close
    .force("charge_force", d3.forceManyBody())
    // centering force to drive all nodes to center of SVG element
    .force("center_force", d3.forceCenter(width / 2, height / 2))
    // add link force to simulation
    .force("links", link_force);

function circleColor(d) {
    if (d.type == "electric") {
        return "yellow";
    } else if (d.type == "grass") {
        return "green";
    } else if (d.type == "fire") {
        return "orange";
    } else if (d.type == "water") {
        return "blue";
    } else if (d.type == "rock") {
        return "gray";
    } else { // trainer
        return "red";
    }
}

// draw circles for nodes inside SVG element
var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes_data)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", circleColor);


function linkColor(d){
    if (d.type == "pokemon") {
        return "black";
    } else {
        return "pink";
    }
}

// draw lines for links inside SVG element
var link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter()
    .append("line")
    .attr("stroke-width", 2)
    .style("stroke", linkColor);

function tickActions() {
    // update circle pos to reflect node updates on tick of simulation node 
    node
        .attr("cx", function(d) {return d.x;})
        .attr("cy", function(d) {return d.y;})
    // update link positions
    // one endpoint follows source, and other endpoint follows target
    link
        .attr("x1", function(d) {return d.source.x})
        .attr("y1", function(d) {return d.source.y})
        .attr("x2", function(d) {return d.target.x})
        .attr("y2", function(d) {return d.target.y});
}

// apply tickActions on every tick
simulation.on("tick", tickActions);