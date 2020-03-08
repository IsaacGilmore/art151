let myButton;
let myTitle;
let myInput;
let myParagraph;
let myString;

function setup() {
  noCanvas();
  myButton = select('#myButton');
  myButton.mousePressed(buttonPressed);

  myTitle = select('#myTitle');

  myInput = select('#myInput');

  myParagraph = select('#myParagraph');
}

function draw() {
  myString = myInput.value();

  if (myString === "I'm Ready") {
    myTitle.html('Ok');
    window.location.href = "second.html"
  }
}

function buttonPressed() {
  console.log('pressed');
  myTitle.html('Are You Sure You\'re Ready?');
  myButton.hide();
  showInput();
}

function showInput() {
  myInput.show();
  myParagraph.show();
}
