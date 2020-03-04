let rotateVal;
let scaleVal;

function setup() {
  // put setup code here
  createCanvas(600,600);
  rectMode(CENTER);
  rotateVal = 0;
  scaleVal = 1;
}


function draw() {
  background(150);
  push();
  translate(width/3, height/3);
  scale(scaleVal);
  rotate(rotateVal);
  rect(100, -100, 100, 75);
  rect(0, 0, 75, 75);
  pop();

  push();
  translate(2*width/3, 2*height/3);
  scale(scaleVal);
  rotate(-rotateVal);
  rect(100, -100, 100, 75);
  rect(0, 0, 75, 75);
  pop();

  rect(100, 100, 50, 50);

  rotateVal = rotateVal + .1;
  scaleVal = scaleVal + .01;
  if (scaleVal > 5) {
    scaleVal = .2;
  }
}
