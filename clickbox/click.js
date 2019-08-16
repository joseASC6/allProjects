let red;
let blue;
function setup(){
    createCanvas(600, 600);
    blue = color(31, 141, 142);
    red = color(188, 65, 43)
    fill(blue);
}

//this function draw() is called 60 times per sec
function draw(){

    rect(0, 0, width/2, height);
    rect(300, 0, width/2, height);
}
function mouseClicked(){    
    let check = get(110, 110);
    if(check[0] == 31 && check[1] == 141 && check[2] == 142){
      fill(red);
    }else{
        fill(blue);
    }
   
}