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
              .attr("r", 5)
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

var vgap = 30
// var hgap = 20
for (var i = 0; i < lines.length; i++) {
    svg.append("line")
       .attr("x1", lines[i][0])
       .attr("y1", lines[i][1] + vgap)
       .attr("x2", lines[i][2])
       .attr("y2", lines[i][3] - vgap)
       .attr("stroke-width", 1)
       .attr("stroke", "red")
       //.attr("marker-end", "url(#arrow)")
}