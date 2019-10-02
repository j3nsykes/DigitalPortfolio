var step = 55;
var c;
var img;

function preload() {
  img = loadImage('0.jpg');

}

function setup() {
  c = createCanvas(400, 400);
  background(220);
}

function draw() {


  image(img, 0, 0, width,height);

}

function mousePressed() {
  saveCanvas(c, 'myCanvas', 'jpg');
}