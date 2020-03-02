let input;
let button;
let myString;
let slider;
let sliderValue;
let sel;
let itemSelected;

function setup() {
  // put setup code here
  createCanvas(600, 600);

  myString = '';
  itemSelected = 'red';

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(buttonFunction);

  //slider properties
  slider = createSlider(0, width, 300);
  slider.position(20, 20);
  sliderValue = 0;

  sel = createSelect();
  sel.position(180, 20);
  sel.option('red');
  sel.option('blue');
  sel.option('green');
}


function draw() {
  sliderValue = slider.value();
  itemSelected = sel.value();


  // background(sliderValue, 0, 0);
  myFunction(sliderValue, 400);
  // myFunction(200, 100);
  // myFunction(500, 20);
}


function myFunction(myWidth, myHeight) {
  text(myString, random(myWidth), random(myHeight));
}


function buttonFunction() {
  if (itemSelected === 'red') {
    background(255, 0, 0);
  } else if (itemSelected === 'blue') {
    background(0, 0, 255);
  } else if (itemSelected === 'green') {
    background(0, 255, 0);
  }

  myString = input.value();
}
