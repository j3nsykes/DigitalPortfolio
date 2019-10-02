var step = 55;
var c;
var img;

function preload() {
  img = loadImage('0.jpg');

}

function setup() {
  c = createCanvas(400, 400);
  background(220);
  img.resize(100,0);
}

function draw() {

  for (var x = 0; x < width; x += step) {
for (var y = 0; y < height; y += step) {
  image(img, x, y);
}
  }

}

function mousePressed() {
  saveCanvas(c, 'myCanvas', 'jpg');
}