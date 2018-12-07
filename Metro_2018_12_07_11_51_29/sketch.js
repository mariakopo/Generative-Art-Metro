var distance = 12;
var starty;
var startx;
var endy;
var endx;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255, 255, 153);
  starty = windowWidth/2;
  startx = windowHeight/2;
}

function draw() {
  endy = starty;
  endx = startx;
  
  var direction = random();
  if (direction < 1/8) {
 	endy -= distance;
  } else if (direction < 2/8) {
 	endy -= distance;
    endx += distance;
  } else if (direction < 3/8) {
    endx += distance;
  } else if (direction < 4/8) {
    endx += distance;
    endy += distance;
  } else if (direction < 5/8) {
    endy += distance;
  } else if (direction < 6/8) {
    endx -= distance;
    endy += distance;
  } else if (direction < 7/8) {
    endx -= distance;
  } else {
    endx -= distance;
    endy -= distance;
  }
  
  // Call check function written below
  endy = check(endy, windowWidth);
  endx = check(endx, windowHeight);
  
  // Draw the line
  line(starty, startx, endy, endx);
  
  // Make start same with end, so next frame it continues
  starty = endy;
  startx = endx;
}

function check(val, max) {
  // Function to check if "val" given is between 0 and max given
  if (val > max) {
    val -= distance;
  }
  if (val < 0) {
    val += distance;
  }
  return val;
}