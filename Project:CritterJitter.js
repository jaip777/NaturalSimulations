//In this code, I have purple octopi swimming around the ocean. Except, these octopi are not fans of each other, so when they get too close, they speed up to move away from each other

var G = 1;
//the function that gets them to move
var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
 //function thaht applies force onto the octopi
Mover.prototype.applyForce = function(force) {
    //divides force by mass
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    //applies acceleration and velocity
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0.1);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255, 127);
    image(getImage("avatars/purple-pi"),this.position.x, this.position.y, this.mass*35, this.mass*35);
};

Mover.prototype.calculateAttraction = function(m) {
    //subtracts the  two positions
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();//distance is equal to magnitude of force
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();
    //strength of force (increases the closer 
    var strength = (-G * this.mass * m.mass) / (distance * distance);
    force.mult(-1*strength);
    return force;
};


var movers = [];
for (var i = 0; i < 5; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
}

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

draw = function() {
    background(40, 171, 237);

    for (var i = 0; i < movers.length; i++) {
        for (var j = 0; j < movers.length; j++) {
            if (i !== j) {
                var force = movers[j].calculateAttraction(movers[i]);
                movers[i].applyForce(force);
            }
        }

        movers[i].update();
        movers[i].display();
    }
    noStroke();
    fill(50, 219, 24);
        ellipse(44,395,134,40);
    ellipse(127,393,136,31);
    ellipse(218,392,133,31);
    ellipse(288,392,104,31);
    ellipse(371,388,125,31);
    ellipse(44,320,20,134);
    ellipse(127,320,20,134);
    ellipse(218,320,20,134);
    ellipse(288,320,20,134);
    ellipse(371,320,20,134);
    ellipse(252,320,20,134);
    ellipse(158,320,20,134);
    ellipse(392,320,20,134);
    
    
};

