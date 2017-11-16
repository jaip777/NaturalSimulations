//In this project, the animals are swimming in the sea, and chases the food (which is the brown circles)

var maxDirection = PVector.sub(new PVector(0, 0), new PVector (width - 21, height - 12));
var maxMagnitude = maxDirection.mag ();

var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(14, 15);
    this.acceleration = new PVector(35, 43);
};

Mover.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    var dir = PVector.sub(mouse, this.position);
    var space= (maxMagnitude-dir.mag())/maxMagnitude;
    dir.normalize();
    dir.mult(space);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(7);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(127);
   image(getImage("avatars/purple-pi"),this.position.x, this.position.y, 45, 45);
   image(getImage("avatars/aqualine-seedling"),this.position.x+28, this.position.y+5, 57, 56);
      image(getImage("avatars/purple-pi-pink"),this.position.x+26, this.position.y+-26, 37, 28);
      fill(247, 247, 247);
      //little bubbles that follow them
      noStroke();
       ellipse(this.position.x+26, this.position.y+71, 8, 8);
      ellipse(this.position.x+43, this.position.y+66, 7, 7);
      ellipse(this.position.x+59, this.position.y+64, 8, 8);
      ellipse(this.position.x+27, this.position.y+82, 8, 7);
      ellipse(this.position.x+77, this.position.y+39, 7, 7);
      ellipse(this.position.x+85, this.position.y+17, 8, 8);
      ellipse(this.position.x+72, this.position.y+2, 8, 7);
       
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 5;
  } else if (this.position.x < 5) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 5;
  } else if (this.position.y < 5) {
    this.position.y = height;
  }
};

var mover = new Mover();

draw = function() {
    background(94, 176, 217);
    fill(128, 102, 102);
    ellipse(mouseX, mouseY, 10,10);
    ellipse(mouseX+3, mouseY+5, 10,10);
    ellipse(mouseX+5, mouseY+5, 10,10);
    fill(40, 212, 94);
    noStroke();
    //sea grass at bottom of ocean
    ellipse(44,375,129,31);
    ellipse(127,375,150,31);
    ellipse(218,375,133,31);
    ellipse(288,375,104,31);
    ellipse(371,375,85,31);
     ellipse(44,320,20,134);
    ellipse(127,320,20,134);
    ellipse(218,320,20,134);
    ellipse(288,320,20,134);
    ellipse(371,320,20,134);
    ellipse(252,320,20,134);
    ellipse(158,320,20,134);
    ellipse(392,320,20,134);
    
    mover.update();
    mover.checkEdges();
    mover.display(); 
};

