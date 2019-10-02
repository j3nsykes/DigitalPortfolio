let c;
function setup() {
  c=createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);
  rect(200,200,100,100);
}

function mousePressed(){
saveCanvas(c, 'myCanvas', 'jpg');
}