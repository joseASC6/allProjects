//var boxColumn = 100;
//var boxRow = 100;
//let boxColumn, boxRow;
function setup(){
    createCanvas(1000, 1000);
    background(130,233,34);
}
/*function draw(){
    column = height/boxColumn;
    row = width/boxRow;
    line(row);
    line(column);
} */
let start = 0;
let end = 1000;
let fir = 100;

function draw(){
    fill(255, 255, 255);
    for(let i = 0; i < 10; i++){
        line(fir, start, fir, end);
        line(start, fir, end, fir);
        fir = fir + 100;
    }
}
let array = [   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
let boxClick;
function mouseClicked(){
    let xPos = mouseX;
    let yPos = mouseY;
    let clickX = xPos/100;
    clickX = Math.floor(clickX);
    let clickY = yPos/100;
    clickY = Math.floor(clickY);
    if( array[clickX][clickY] == 1){
        fill(0, 0, 0);
        rect(clickX, clickY, 100, 100);
        console.log("You hit a ship");

    }else{
        console.log("You missed")
    }
}