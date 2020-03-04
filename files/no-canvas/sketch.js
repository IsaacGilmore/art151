let myTitle;
let myButton;
let buttonPush;
let myParagraph;
let myInput;
let myString;
let myNewParagraph;
let mySelect;
let selectVal;
let mySlider;
let sliderVal;
let myHiddenDiv;

function setup() {
  noCanvas();
  myTitle = select('#myTitle');

  myButton = select('#myButton');
  myButton.mousePressed(buttonPressed);

  myParagraph = select('#myParagraph');
  myNewParagrah = select('#myNewParagraph')

  myInput = select('#myInput');
  mySlider = select('#mySlider');

  mySelect = select('#mySelect');

  myHiddenDiv = select('#myHiddenDiv');

  myString = '';
  buttonPush = 0;
}

function draw() {
  myString = myInput.value();
  selectVal = mySelect.value();
  sliderVal = mySlider.value();

  myTitle.style('color', 'rgb(' +sliderVal + ', 100, 100)')
  myNewParagrah.html(myString);
  myParagraph.style('font-size', selectVal + 'pt');
  // font-size: 10pt;

  // color: rgb(100, 100, 100)
}

function buttonPressed() {
  buttonPush = buttonPush + 1;
  if (buttonPush === 1) {
    myButton.html('Please Don\'t Click Me');
  } else if (buttonPush === 2) {
    myTitle.html('I told you not to click');
  } else if (buttonPush === 3) {
    myParagraph.html('Please');
  } else if (buttonPush >= 4) {
    myParagraph.html(' Please', true);
    myHiddenDiv.show();
    myTitle.hide();
  }







}
