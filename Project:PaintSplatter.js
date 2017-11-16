
var PaintSplat = function() { //function for width and height
this.x = width/2;
this.y = height/2;
};


PaintSplat.prototype.display = function() {
noStroke(); //random numbers below that change the color of each circle
var xColor = floor(random(200));
var yColor = floor(random(200));
var dColor = floor(random(200));
var zColor = floor(random(200));

fill(xColor+dColor, yColor+xColor, yColor+zColor);//changes color each time
var Size = floor(random(40));//change the size of the circle each time

ellipse(this.x, this.y, Size, Size);
};

PaintSplat.prototype.splat = function() {
var splatter = floor(random(20));//choose a random number between 1 and 20
if (splatter < 4) {//20% chance of moving right 15
this.x+=15;
} else if (splatter < 8) {//20% chance of moving left 15
this.x-=15;
} else if (splatter < 12) {//20% chance of moving up 15
this.y+=15;
} else if (splatter < 16) {//20% chance of moving down 15
this.y-=15;
} else if (splatter < 17) {//5% chance of doing a random splatter to the side (up)
    this.y+= 40;
} else if (splatter < 18) {//5% chance of doing a random splatter to the side(down)
    this.y-= 40;
} else if (splatter < 19) {//5% chance of doing a random splatter to the side(right)
    this.x+= 40;
} else {//5% chance of doing a random splatter to the sideo (left)
    this.x-= 40;
}// the random splatters make it more like a paint slab, being flung onto a canvas with occasional random splats to the sides

if ((this.x > 400)||(this.x<0)){ //parameters to bring paint dots back to the middle
    this.x = 200;
}
if ((this.y > 400)||(this.y<0)){//parameters to bring paint dots back to the middle
    this.y = 200;
}
};

var p = new PaintSplat();

draw = function() {
p.splat();
p.display();
};
