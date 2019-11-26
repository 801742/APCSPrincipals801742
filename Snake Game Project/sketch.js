//  Andrew Mills
// 	11/25/19
//  Snake Game Project
var head, food, gameState, score;
//global variables
//setup function
function setup(){
  //size of canvas (800, 800)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background color
  background(5, 5, 5);
  fill(200, 30, 150);
  //loads snake, food
  loadObjects();
  frameRate(15);
  //starting point for variables
  gameState = 1;
  score = 0
}
function loadObjects(){
  //loading a snake and food, using classes
  //width of 25, spawning on a random integer in grid
  head = new Snake(int(random(32)), int(random(32)), 25, 0, 0)
  food = new Food(int(random(32)), int(random(32)), 25)
}
//running the snake and food that was created in loadObjects
function runObjects(){
  background(20, 20, 20);
  head.run();
  food.run();
}
//draw function is a loop
//constantly checks what screen to present
function draw(){
  //startgame = beginning screen
  if(gameState === 1) startgame();
  //if button clicked gameState = 2, changes to the actual game
  if(gameState === 2) playgame();
  //if snake dies, gameState = 3, changes to end screen
  if(gameState === 3) endgame();
  //code for the creation of a new food block if old one is eaten
  if(food.isEaten()){
  food = new Food(int(random(32)), int(random(32)), 25)
  //when food eaten score increases by one
  score++;
  }
}
//beginning splashscreen code
function startgame(){
  //text size, location for title
  textSize(50)
  text('Snake Game', 250, 200)
  //button size, location and code
  rect(375, 500, 50, 50)
  textSize(25)
  text('PLAY', 370, 470)
  //if button pressed changes gameState to 2, changing screen and running playgame function
  if(mouseIsPressed &&
    mouseX > 375 &&
    mouseX < 425 &&
    mouseY > 500 &&
    mouseY < 550){
      gameState = 2;
  }
}
//actual game code
function playgame(){
  runObjects();
  //score text and location
  textSize(30)
  text(score, 100, 100)
}
//code for endgame screen
function endgame(){
  //you lose title: text, location
  textSize(50)
  text('YOU LOST!', 265, 200)
  //code for button to play agian
  rect(375, 500, 50, 50)
  textSize(25)
  text('Try Again?', 350, 470)
//if button clicked it clears previous game and loads new snake and food objects
  if(mouseIsPressed &&
    mouseX > 375 &&
    mouseX < 425 &&
    mouseY > 500 &&
    mouseY < 550){
      //clearing previous game
      clear();
      //loading new ones and changing screen
      loadObjects();
      gameState = 2;
      //score set back to 0
      score = 0

  }
}
