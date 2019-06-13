var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");

function createSimulation(ndata, ldata, width, height) {
    var simulation = d3.forceSimulation().nodes(ndata);
    simulation.force("charge_force", d3.forceManyBody())
          .force("center_force", d3.forceCenter(width, height))
          .force("links", d3.forceLink(ldata));
    return simulation;
}

function createNode(node_data) {
    return svg.append("g")
              .attr("class", "nodes")
              .selectAll("circle")
              .data(node_data)
              .enter()
              .append("circle")
              .attr("r", 10)
              .attr("fill", 'black');
}

function createLink(link_data) {
    return svg.append("g")
              .attr("class", "links")
              .selectAll("line")
              .data(link_data)
              .enter()
              .append("line")
              .attr("stroke-width", 2)
              .style("stroke", 'black');
}

function tickActions(node, link) {
    node.attr("cx", function(d) {return d.x;})
        .attr("cy", function(d) {return d.y;})
    link.attr("x1", function(d) {return d.source.x})
        .attr("y1", function(d) {return d.source.y})
        .attr("x2", function(d) {return d.target.x})
        .attr("y2", function(d) {return d.target.y});
}

var sim = createSimulation(ndata, ldata, 100, 500);
var node = createNode(ndata);
var link = createLink(ldata);
sim.on("tick", function() {tickActions(node, link)});

var sim2 = createSimulation(ndata, ldata2, 200, 500);
var node2 = createNode(ndata);
var link2 = createLink(ldata2);
sim2.on("tick", function() {tickActions(node2, link2)});

svg.append("line")
   .attr("x1", 135)
   .attr("y1", 500)
   .attr("x2", 170)
   .attr("y2", 500)
   .attr("stroke-width", 2)
   .attr("stroke", "red")