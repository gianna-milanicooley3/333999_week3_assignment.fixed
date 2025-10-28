//global variables
let posX,posY,d;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(400, 400);
  background('pink');



 posX = width/2;
 posY = height/2;
  d = 100;
} 
function draw() {
 background('pink');
 rectMode(CENTER);
 stroke('red');
 strokeWeight(3);
 fill('white');
circle(posX,posY,d);
stroke('green');
strokeWeight(5);
fill('purple');
circle(posX,posY,d/2);
noFill();
rect(posX,posY,d/4);
posX += 1;
//posY+=0.2;
}
