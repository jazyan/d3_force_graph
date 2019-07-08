var sim0 = createSimulation(ndata, ldata0[0], 300, 50);
var node0 = createNode(ndata);
var link0 = createLink(ldata0[0]);
sim0.on("tick", function() {tickActions(node0, link0)});

var sim100 = createSimulation(ndata, ldata1[0], 300, 200);
var node100 = createNode(ndata);
var link100 = createLink(ldata1[0]);
sim100.on("tick", function() {tickActions(node100, link100)});

var sim200 = createSimulation(ndata, ldata2[0], 250, 350);
var node200 = createNode(ndata);
var link200 = createLink(ldata2[0]);
sim200.on("tick", function() {tickActions(node200, link200)});

var sim201 = createSimulation(ndata, ldata2[1], 350, 350);
var node201 = createNode(ndata);
var link201 = createLink(ldata2[1]);
sim201.on("tick", function() {tickActions(node201, link201)});

var sim300 = createSimulation(ndata, ldata3[0], 200, 500);
var node300 = createNode(ndata);
var link300 = createLink(ldata3[0]);
sim300.on("tick", function() {tickActions(node300, link300)});

var sim301 = createSimulation(ndata, ldata3[1], 300, 500);
var node301 = createNode(ndata);
var link301 = createLink(ldata3[1]);
sim301.on("tick", function() {tickActions(node301, link301)});

var sim302 = createSimulation(ndata, ldata3[2], 400, 500);
var node302 = createNode(ndata);
var link302 = createLink(ldata3[2]);
sim302.on("tick", function() {tickActions(node302, link302)});

var sim400 = createSimulation(ndata, ldata4[0], 250, 650);
var node400 = createNode(ndata);
var link400 = createLink(ldata4[0]);
sim400.on("tick", function() {tickActions(node400, link400)});

var sim401 = createSimulation(ndata, ldata4[1], 350, 650);
var node401 = createNode(ndata);
var link401 = createLink(ldata4[1]);
sim401.on("tick", function() {tickActions(node401, link401)});

var sim500 = createSimulation(ndata, ldata5[0], 300, 800);
var node500 = createNode(ndata);
var link500 = createLink(ldata5[0]);
sim500.on("tick", function() {tickActions(node500, link500)});

var sim600 = createSimulation(ndata, ldata6[0], 300, 950);
var node600 = createNode(ndata);
var link600 = createLink(ldata6[0]);
sim600.on("tick", function() {tickActions(node600, link600)});

