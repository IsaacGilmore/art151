// variables for the color buttons
let redButton;
let blueButton;
let greenButton;

// variables for the gender buttons and start button
let femaleButton;
let maleButton;
let startGameButton;

// variable for the div that stores all the html for the character selection
// ..we'll hide it later
let characterSelection;

// variable to store what color and gender were selected
let colorSelection;
let genderSelection;

// a variable for our canvas so we can hide it while a user is selecting character
let canvas;
// a variable for our gamestate so we know what to display
let gameState;

// the paragraphs from our html to show what has been selected
let paragraphSelectionColor;
let paragraphSelectionGender;

function setup() {
  // create a canvas and store it in a variable
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  // set gamestate to 1 to begin with
  gameState = 1;

  //set textsize for the text that will display in our canvas
  textSize(32);

  // select the paragraph elements where we write what was selected
  paragraphSelectionColor = select('#paragraph-selection-color');
  paragraphSelectionGender = select('#paragraph-selection-gender');

  // the div of the whole character selection html
  characterSelection = select('#character-selection');

  // select each button by id
  // call a function when each button is mousePressed
  // different function for each button that is defined below
  redButton = select('#red-button');
  redButton.mousePressed(redChoice);
  blueButton = select('#blue-button');
  blueButton.mousePressed(blueChoice);
  greenButton = select('#green-button');
  greenButton.mousePressed(greenChoice);

  // same for gender buttons as color functions
  femaleButton = select('#female-button');
  femaleButton.mousePressed(femaleChoice);
  maleButton = select('#male-button');
  maleButton.mousePressed(maleChoice);

  // select the start game button by id
  // mousePressed function for startgame
  startGameButton = select('#start-game-button');
  startGameButton.mousePressed(startGame);

}

function draw() {
  // change what we do based on the current gamestate
  if (gameState == 1) {
    // hide the canvas while the user is selecting character
    canvas.hide();
  } else if (gameState == 2) {
    // show the canvas after character selection
    // canvas is full window width and height
    canvas.show();
    // call this function to hide all the html from character selection
    hideAllSelections();
    // advance the game state
    gameState = 3;
  } else if (gameState == 3) {
    // do whatever you want to do after character Selection
    // male or female is stored as a string in genderSelection
    // color is stored as a string in colorSelection
    // use those however you want
    // I'm just writing them to the middle of the canvas
    text('you picked ' + genderSelection, width/2, height/2);
    text('you picked ' + colorSelection, width/2, height/ 2 + 20);
  }

}

// function for if blue button is pressed
function blueChoice() {
  // change the contents of the paragraphSelectionColor element to 'you picked blue'
  paragraphSelectionColor.html('you picked blue');
  // set the color selection variable to 'blue'
  colorSelection = 'blue';
}

// see blueChoice function for comments
function redChoice() {
  paragraphSelectionColor.html('you picked red');
  colorSelection = 'red';
}

// see blueChoice function for comments

function greenChoice() {
  paragraphSelectionColor.html('you picked green');
  colorSelection = 'green';
}

// see blueChoice function for comments
function maleChoice() {
  paragraphSelectionGender.html('you picked male');
  genderSelection = 'male';
}

// see blueChoice function for comments
function femaleChoice() {
  paragraphSelectionGender.html('you picked female');
  genderSelection = 'female'
}

// function is called when start game button is pressed. advances the gameState
function startGame() {
  gameState = 2;

}

// hide everything within the characterSelection div when we're done with it
function hideAllSelections() {
  characterSelection.hide();

}
