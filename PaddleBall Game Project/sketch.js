//  Andrew Mills
// 	9/25/19
// PaddleBall Project
var balls = [];
var ships = [];
var gameState = 1;
var gameMode;
var score = 0;
var lives = 8;
var boss;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadButtons();
}
function draw() {
  titleColor = color(random(255), random(255), random(255));
  background(255,255,255);
  fill(2, 2, 2);
  if(gameState === 1){
    textSize(55);
    fill(titleColor)
    text('PaddleBall!', 300, 300);
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

function loadObjects(b, s, c){
  bheight = random(300)
  bwidth = random(800)
  for(var i = 0; i < c; i++){
  boss = new Boss(random(75, 725), 50, random(-10, 10))
  for(var i =0; i < b; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5), 1);
  }
  for(var i =0; i < s; i++){
    bwidth = random(800);
    bheight = random(300);
    if(gameMode ===5){
      bwidth = boss.loc.x;
      bheight = 50;
    }
    ships[i] = new Ship(random(bwidth), bheight, random(-2, 2), random(-2, 2), 1);
  }
  paddle = new Paddle(250, 600, 200, 25);
}
} //end of loadObjects
function loadButtons(){
    buttonE = new Button(100, 600, 60, 60, 'easy');
    buttonM = new Button(300, 600, 60, 60, 'medium');
    buttonH = new Button(500, 600, 60, 60, 'hard');
    buttonI = new Button(675, 600, 60, 60, 'instructions');
    buttonP = new Button(400, 600, 60, 60, 'play');
    buttonR = new Button(400, 600, 60, 60, 'restart');
    buttonB = new Button(400, 700, 60, 60, 'BOSS')
}
function startGame(){
  buttonE.run();
  buttonM.run();
  buttonH.run();
  buttonI.run();
  buttonB.run();
  if(gameMode === 1){
      loadObjects(2,0,0)
  }else if(gameMode === 2){
      loadObjects(2,2,0)
  }else if(gameMode === 3){
      loadObjects(3,3,0)
  }else if(gameMode === 4){
      loadObjects(1,0,0)
  }else if(gameMode === 5)
      loadObjects(3,2,1)

} // end of startGame
function playGame(){
  textSize(25);
  text("Score:" + score, 50, 30);
  text('Lives:' + lives, 50, 60);
  runObjects();
} //end of playGame

function runObjects(){
  paddle.run();
  boss.run();
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
    //buttonR.run();
    textSize(100);
    text('You Lost', 250, 200);
    textSize(30)
    text('Score:'+ score, 385, 250);
    text('Refresh Page to Restart', 300, 600)
    //text('Refresh Page to Restart', 300, 600)
    //buttonR.run();
};
