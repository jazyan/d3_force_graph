var svg = d3.select("svg");
var width = svg.attr("width");
var height = svg.attr("height");
var inner_color = "black"
var outer_color = "grey"

function createSimulation(ndata, ldata, width, height) {
    var simulation = d3.forceSimulation().nodes(ndata);
    simulation.force("charge_force", d3.forceManyBody())
          .force("center_force", d3.forceCenter(width, height))
          .force("links", d3.forceLink(ldata))
          .force("radial", d3.forceRadial(1, width, height));
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
              .attr("fill", inner_color);
}

function createLink(link_data) {
    return svg.append("g")
              .attr("class", "links")
              .selectAll("line")
              .data(link_data)
              .enter()
              .append("line")
              .attr("stroke-width", 2)
              .style("stroke", inner_color);
}

function tickActions(node, link) {
    node.attr("cx", function(d) {return d.x;})
        .attr("cy", function(d) {return d.y;})
    link.attr("x1", function(d) {return d.source.x})
        .attr("y1", function(d) {return d.source.y})
        .attr("x2", function(d) {return d.target.x})
        .attr("y2", function(d) {return d.target.y});
}

// draw lines between graph nodes below
var vgap = 50
// var hgap = 20
for (var i = 0; i < lines.length; i++) {
    svg.append("line")
       .attr("x1", lines[i][0])
       .attr("y1", lines[i][1] + 30)
       .attr("x2", lines[i][2])
       .attr("y2", lines[i][3] - 60)
       .attr("stroke-width", 1.5)
       .attr("stroke", outer_color)
       //.attr("marker-end", "url(#arrow)")
}

// taken from https://bl.ocks.org/mbostock/6738109
var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹",
    formatPower = function(d) { 
        console.log(d);
        return (d + "").split("").map(
            function(c) { return superscript[c]; }).join(""
        ); 
    };

// draw circles around graphs to make graph nodes
// also, draw accompanying text labels
for (var i = 0; i < centers.length; i++) {
    svg.append("circle")
       .attr("cx", centers[i][0] + 2)
       .attr("cy", centers[i][1])
       .attr("r", 31)
       .attr("stroke", outer_color)
       .attr("stroke-width", 2)
       .attr("fill", "none");
    
    var label = "p" + formatPower(centers[i][2]); 
    label += "N" + formatPower(centers[i][3]);
    
    svg.append("text")
       .attr("x", centers[i][0] - 20)
       .attr("y", centers[i][1] - 40)
       .text(label)
       .style("font-size", "25px")
       .style("font-family", "monospace")
}
