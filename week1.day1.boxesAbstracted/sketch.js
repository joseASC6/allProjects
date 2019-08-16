const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;

function setup(){
    createCanvas(600,600);
    box_height = height/number_of_boxes_in_column;
    box_width = width/number_of_boxes_in_row;
    // TASK #1 - set the box_width as the width of the canvas
    // divided by the number of boxes in a row.
}

function draw(){
    // TASK #2 - loop through each box in the row by
    // replacing the blank with the correct number/variable
    for(let i = 0; i < number_of_boxes_in_column ; i++){
        //const y = 0;
        // TASK #3 - replace the blank with the y-coordinate for 
        // current box
        // HINT: it will always be the same

        const x = i * box_width;
        // TASK #4 - replace the blank with the x-coordinate for 
        // current box
        // HINT: this changes with each box in the row
        // depending on it's place. Think about how the box_width
        // plays a role in this.
        
        // TASK #8 - Create another for loop under this task that
        // loops through each box in the column, using "j" as the 
        // iterator.
        // HINT: the code will look very similar to the first "for"
        // loop. 
        // NOTE: this is a nested "for" loop, a loop within
        // a loop! Loop-ception?
        for(j = 0; j < number_of_boxes_in_column ; j++){
            let vertialY = j * box_height;
            customFill(i, vertialY);
            rect(x, vertialY, box_width, box_height);
        }

        // create 2nd loop here!

        // TASK #9 - comment out the "const y" from earlier
        
        // TASK #10 - In the setup function, change the value of 
        // "box_height" to the height of the canvas divided by the
        // number of boxes in a column.

        // TASK #11 - Within the second "for" loop, create a
        // "const y" as the y-coordinate for the current box
        // HINT: this changes with each box in the column depending
        // on it's place. Think about how the box_height plays a
        // role with this.

        // TASK #12 - cut and paste the code for drawing the box into the 2nd "for" loop

        // Drawing box
        //customFill(i,y);
        //rect(x,y,box_width,box_height);
 
        // something different, check over what you've done!

        // EXTRA CREDIT - Replace the code for drawing boxes with your
        // own code that allows a mouse click on the box to change
        // the color of that specific box
    }
}

/**
 * Create color fill according to position of box and
 * total number of boxes.
 * @param {Number} i position of box in row
 * @param {Number} y y-coordinate for box in column
 */
const customFill = function(i,y){
    const j = y/box_height;
    fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}
