var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");

// complete graph on 6 vertices
var nodes_data = [
    {"id": 0},
    {"id": 1},
    {"id": 2},
    {"id": 3},
    {"id": 4},
    {"id": 5}
]

var links_data = [
    {"source": 0, "target": 1},
    {"source": 0, "target": 2},
    {"source": 0, "target": 3},
    {"source": 0, "target": 4},
    {"source": 0, "target": 5},
    {"source": 1, "target": 2},
    {"source": 1, "target": 3},
    {"source": 1, "target": 4},
    {"source": 1, "target": 5},
    {"source": 2, "target": 3},
    {"source": 2, "target": 4},
    {"source": 2, "target": 5},
    {"source": 3, "target": 4},
    {"source": 3, "target": 5},
    {"source": 4, "target": 5},
]

var simulation = d3.forceSimulation().nodes(nodes_data);
var link_force = d3.forceLink(links_data);


simulation.force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("link", link_force)
        .force("radial", d3.forceRadial(0.1, width / 2, height / 2));

var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes_data)
            .enter()
            .append("circle")
            .attr("r", 20)
            .attr("fill", "pink");

var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links_data)
            .enter()
            .append("line")
            .attr("stroke-width", 2)
            .attr("stroke", "black")
            .attr("stroke-opacity", 0.6);

simulation.on("tick", tickActions);

function tickActions() {
    node.attr("cx", function(d) {return d.x;})
        .attr("cy", function(d) {return d.y;});

    link.attr("x1", function(d) {return d.source.x;})
        .attr("y1", function(d) {return d.source.y;})
        .attr("x2", function(d) {return d.target.x;})
        .attr("y2", function(d) {return d.target.y;});
}

// drag handler
var drag_handler = d3.drag()
    .on("start", drag_start)
    .on("drag", drag_drag)
    .on("end", drag_end);

drag_handler(node);


// d is the node
function drag_start(d) {
    if (!d3.event.active) {
        // alphaTarget controls how quickly returns to equilibrium
        // 0.01 is minimum, graph would get stuck
        simulation.alphaTarget(0.5).restart();
    }
    // fx and fy are "fixed" x and y position
    // vx and vy are x and y velocities
    // if defined, will override node.x and node.y and set vx and vy to 0
    d.fx = d.x;
    d.fy = d.y;
}

function drag_drag(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function drag_end(d) {
    if (!d3.event.active) {
        simulation.alphaTarget(0);
    }
    // the node will "spring back" since we've cleared fx and fy
    // can play around with d.fx and d.fy for trippy results! 
    d.fx = null;
    d.fy = null;
}