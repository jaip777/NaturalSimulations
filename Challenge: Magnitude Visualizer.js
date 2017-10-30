mouseMoved = function() {
    background(255, 255, 255);
    
    var mouse = new PVector(mouseX, mouseY);
    var m = mouse.mag();
    
    var distance = dist(0, 0, width, height);
    
    var color = map(m, 0 ,distance, 0, 255);
    background(color, color, color);
    
    fill(214, 15, 15);
    text (mouse.mag(), mouse.x, mouse.y);
    
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
};
