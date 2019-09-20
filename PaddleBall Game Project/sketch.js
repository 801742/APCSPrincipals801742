//  Andrew Mills
// 	9/11/19
// Collision
var balls = [];
var ships = [];
var paddle;
var paddle2;
var gameState = 1;
var gameMode;
var score = 0
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
    multiGame();
  }
} //end of draw

function loadObjects(b, s){
  for(var i =0; i < b; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5), 1);
  }
  for(var i =0; i < s; i++){
    ships[i] = new Ship(random(width), random(300), random(-2, 2), random(-2, 2), 1);
  }
  paddle = new Paddle(250, 700, 200, 25, 1);
  paddle2 = new Paddle(250, 100, 200, 25, -1);
} //end of loadObjects

function startGame(){
  textSize(50);
  text('PaddleBall!', 300, 300);
  fill(20, 100, 130)
  textSize(25)
  text('Easy',178,575);
  rect(170, 600, 60, 60);
  text('Medium',378,575);
  rect(370, 600, 60, 60);
  text('Hard',578,575);
  rect(570, 600, 60, 60);
  if(mouseIsPressed &&
    mouseX > 170 &&
    mouseX < 230 &&
    mouseY > 600 &&
    mouseY < 660){
      gameState = 2;
      gameMode = 1;
      console.log('easy');
    }else if(mouseIsPressed &&
      mouseX > 370 &&
      mouseX < 430 &&
      mouseY > 600 &&
      mouseY < 660){
        gameState = 2
        gameMode = 2;
        console.log('medium');
      }else if(mouseIsPressed &&
      mouseX > 570 &&
      mouseX < 630 &&
      mouseY > 600 &&
      mouseY < 660){
        gameState = 2;
        gameMode = 3;
        console.log('hard');
      }
      if(gameMode === 1){
        loadObjects(2,0)
      }else if(gameMode === 2){
        loadObjects(2,2)
      }else if(gameMode === 3){
        loadObjects(3,3)
      };
}//end of StartGame
function multiGame(){

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
