var step = 55;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

  noStroke();
  fill(255, 0, 0);
  for (var i = 0; i < width-25; i += step) {

    rect(10+i, 150, 50, 50);
  }
}