function setup(){
    createCanvas(windowWidth, windowHeight);
}
let shapes = [circle(), rect(), ]
function mouseDragged() {
    let one = random(10, 250);
    let second = random(10, 250);
    let three = random(10, 250);
    fill(one, second, three);
    var number = random(10, 100);
    var SndNumber = random(10, 100);
    ellipse(mouseX, mouseY, number, SndNumber);
}
function draw(){
    mouseDragged();
}
