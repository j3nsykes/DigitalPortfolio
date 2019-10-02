let c;
let col;

function setup() {
  c = createCanvas(400, 400);
  background(220);
}

function draw() {
  col = color(random(255), random(255), random(255));
  fill(col);
  //rect(mouseX, mouseY, 100, 100);
  ellipse(mouseX, mouseY, 100, 100);
}

function mousePressed() {
  saveCanvas(c, 'myCanvas', 'jpg');
}