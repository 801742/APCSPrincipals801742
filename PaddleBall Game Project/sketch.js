//  Andrew Mills
// 	9/25/19
// PaddleBall Project
var balls = [];
var ships = [];
var paddle;
var gameState = 1;
var gameMode;
var score = 0;
var lives = 8;
var b;
var s;
var buttonE, buttonM, buttonH;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadButtons();
}

function draw() {
  background(255,255,255);
  fill(2, 2, 2);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }else if(gameState === 4){
    instructions();
  }
  if(lives === 0) gameState = 3;

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
function loadButtons(){
    buttonE = new Button(100, 600, 60, 60, 'easy');
    buttonM = new Button(300, 600, 60, 60, 'medium');
    buttonH = new Button(500, 600, 60, 60, 'hard');
    buttonI = new Button(675, 600, 60, 60, 'instructions');
    buttonR = new Button(400, 600, 60, 60, 'restart');
    buttonP = new Button(400, 600, 60, 60, 'play');
}
function startGame(){
  textSize(50);
  text('PaddleBall!', 300, 300);
  buttonE.run();
  buttonM.run();
  buttonH.run();
  buttonI.run();
  if(gameMode === 1){
      loadObjects(2,0)
  }else if(gameMode === 2){
      loadObjects(2,2)
  }else if(gameMode === 3){
      loadObjects(3,3)
  }else if(gameMode === 4){
      loadObjects(1,0)
    }
} // end of startGame
function playGame(){
  textSize(25);
  text("Score:" + score, 50, 30);
  text('Lives:' + lives, 50, 60);
  runObjects();
} //end of playGame

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
  for(var i = 0; i < ships.length; i++) ships[i].run();
} //end of runObjects

function instructions(){
  textSize(30);
  fill(2, 2, 2);
  text('Instructions:', 20, 40)
  text('Use the paddle, controled by the mouse to deflect', 20, 80);
  text('objects back into the air. If a ball hits the bottom,',20, 110);
  text('you will lose a life, if a ship hits the bottom you', 20, 140);
  text('also lose a life. Good Luck!', 20, 170);
  buttonP.run();

}
function endGame(){
    textSize(100);
    text('You Lost', 250, 200);
    textSize(30)
    text('Score:'+ score, 385, 250);
    buttonR.run();
}
