let x = 0;
let y = 110;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 250, 250);
    fill(129, 34, 56);
}

function draw() {
    x += 15;
    y += 15;
  ellipse(x, 50, 80, 80);
  circle(50, y, 80, 80);
  rect(400, 400, 100, 100);
}