var step = 55;
var c;

function setup() {
  c=createCanvas(400, 400);
  background(220);
}

function draw() {

  noStroke();
  fill(255, 0, 0);
  for (var x = 0; x < width; x += step) {
for (var y = 0; y < height; y += step) {
    rect(x, y, 50, 50);
  }
  }
}

function mousePressed(){
saveCanvas(c, 'myCanvas', 'jpg');
}