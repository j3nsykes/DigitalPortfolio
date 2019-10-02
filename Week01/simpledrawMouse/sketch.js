let c;
function setup() {
  c=createCanvas(400, 400);
   background(220);
}

function draw() {
 
  fill(255);
  rect(mouseX,mouseY,100,100);
}

function mousePressed(){
saveCanvas(c, 'myCanvas', 'jpg');
}