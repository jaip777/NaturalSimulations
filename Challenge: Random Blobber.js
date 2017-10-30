var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    noStroke();
    fill(11, 172, 184);
   ellipse(this.x, this.y, -52, 10);
   
};

// Randomly move right, left, down, or up
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x+=5;
    } else if (choice === 1) {
        //move left
        this.x-=5;
    } else if (choice === 2) {
        //move down
        this.y+=5;
    } else {
        //move up
        this.y-=5;
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
