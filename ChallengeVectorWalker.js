var Walker = function() {
this.position = new PVector(width/2, height/2);
this.velocity = new PVector(random(-5, 5), random(-5, 5));

};

Walker.prototype.display = function() {
strokeWeight(3);
stroke(0, 0, 0);
point(this.position.x, this.position.y);
};

Walker.prototype.walk = function() {

this.velocity.x = random(-5, 5);
this.velocity.y = random(-5, 5);

this.position.add(this.velocity);

var StepSize = new PVector(random(-5, 5), random(-5, 5));
this.position.add(StepSize);
};

var w = new Walker();

var draw = function() {
w.walk();
w.display();
};
