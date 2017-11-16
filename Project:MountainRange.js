background(0, 242, 255);

var drawClouds = function () {
  noStroke();
  fill(255, 255, 255);
  var x = random(1, 359);
  ellipse(x,26,61,25);
  ellipse(x+50,26,61,25);
  ellipse(x+20,14,61,25);
  
  var x2 = random(1, 400);
  ellipse(x2,70,61,25);
  ellipse(x2+50,72,61,25);
  ellipse(x2+20,59,61,25);
  
  var x3 = random(1, 150);
  ellipse(x3,26,61,25);
  ellipse(x3+50,26,61,25);
  ellipse(x3+20,14,61,25);
  
};
var drawRange = function() {
    var incAmount = 0.01;
    stroke (36, 28, 20);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*100, height-y, 1, y);
    }
};
var drawTrees = function () {
 
    fill (55, 255, 0);
    for (var i = 0; i<=12; i++){
    var xTree = random(1, 400);
    var yTree = random (128,305);
    image(getImage("cute/TreeShort"), xTree, yTree, 15, 21);
    }
};
var drawRange2 = function() {
    var incAmount = 0.01;
     stroke (117, 66, 4);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, -0.3, 0.5, 0.5, height/2);
        rect(t*103, height-y, 1, y);
    }
};
var drawRange3 = function() {
    var incAmount = 0.01;
     stroke (217, 187, 154);
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 1.2, 0.7, 1.2, height/2);
        rect(t*103, height-y, 1, y);
    }
};

drawClouds();
drawRange3();
drawRange2();
drawRange();
drawTrees();
