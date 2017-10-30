
var standardDeviation = 2;
var mean = 0;
 var generator= new Random(1);
 

var Walker = function() {
    this.x = width/2;
    this.y = height/3;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
    
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
var num = generator.nextGaussian();
  var num1 = generator.nextGaussian();
    var x =standardDeviation*num+mean;
    var y =standardDeviation*num1+mean;
    var xStepSize = x;
    var yStepSize = y;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
