let x = 200;
let y = 200;
var speed = 6
var ySpeed = 3
function setup(){
    createCanvas(400, 400);
}
function draw(){
    background(0,0,0);
    stroke(255);
    ellipse(x, y, 10, 10);
    ellipseMode(CENTER);
    x = x + speed;
    y = y + ySpeed;
    if (x > 400){
        speed = -6;
    }
    if(x < 0){
        speed = 6;
    }
    if (y > 400){
        ySpeed = -3;
    }
    if(y < 0){
        ySpeed = 3;
    }
}
