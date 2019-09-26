//  Andrew Mills
// 	9/11/19
// Collision
var balls = [];
var ships = [];
var paddle;
var gameState = 1;
var gameMode;
var score = 0;
var b;
var s;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
}

function draw() {
  background(255,255,255, 60);
  fill(2, 2, 2);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    playGame();
  }
} //end of draw

function loadObjects(b, s){
  for(var i =0; i < b; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5), 1);
  }
  for(var i =0; i < s; i++){
    ships[i] = new Ship(random(width), random(300), random(-2, 2), random(-2, 2), 1);
  }
  paddle = new Paddle(250, 600, 200, 25);
} //end of loadObjects

function startGame(){
  textSize(50);
  text('PaddleBall!', 300, 300);
  new Button()
/*  fill(20, 100, 130)
  textSize(25)
  text('Easy',178,575);
  rect(100, 600, 60, 60);
  text('Medium',378,575);
  rect(300, 600, 60, 60);
  text('Hard',578,575);
  rect(500, 600, 60, 60);
  rect(700, 600, 60, 60);
  if(mouseIsPressed &&
    mouseX > 100 &&
    mouseX < 160 &&
    mouseY > 600 &&
    mouseY < 660){
      gameState = 2;
      gameMode = 1;
      console.log('easy');
    }else if(mouseIsPressed &&
      mouseX > 300 &&
      mouseX < 360 &&
      mouseY > 600 &&
      mouseY < 660){
        gameState = 2
        gameMode = 2;
        console.log('medium');
      }else if(mouseIsPressed &&
      mouseX > 500 &&
      mouseX < 570 &&
      mouseY > 600 &&
      mouseY < 660){
        gameState = 2;
        gameMode = 3;
        console.log('hard');
      }else if(mouseIsPressed &&
      mouseX > 700 &&
      mouseX < 760 &&
      mouseY > 600 &&
      mouseY < 660){
        gameState = 4;
        gameMode = 4
        console.log('multiplayer');
      }
      */
      if(gameMode === 1){
        loadObjects(2,0,1)
      }else if(gameMode === 2){
        loadObjects(2,2,1)
      }else if(gameMode === 3){
        loadObjects(3,3,1)
      }else if(gameMode === 4){
        loadObjects(1,0,1)
      }
}

function playGame(){
  textSize(25);
  text("Score:" + score, 50, 30)
  runObjects();
} //end of playGame

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
  for(var i = 0; i < ships.length; i++) ships[i].run();
} //end of runObjects
