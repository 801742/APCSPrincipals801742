//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var head, food, segment, gameState;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
  frameRate(15);
  gameState = 1;
}
function loadObjects(){
  head = new Snake(int(random(32)), int(random(32)), 25, 0, 0)
  food = new Food(int(random(32)), int(random(32)), 25)
}
function runObjects(){
  background(20, 20, 20);
  head.run();
  food.run();
}
function draw(){
  if(gameState === 1) startgame();
  if(gameState === 2) playgame();
  if(gameState === 3) endgame();
  if(food.isEaten()){
  food = new Food(int(random(32)), int(random(32)), 25)
  }
}

function startgame(){
  textSize(50)
  text('Snake Game', 250, 200)
  rect(375, 500, 50, 50)
  textSize(25)
  text('PLAY', 370, 470)
  if(mouseIsPressed &&
    mouseX > 375 &&
    mouseX < 400 &&
    mouseY > 525 &&
    mouseY < 500){
      gameState = 2;
      console.log('change')
    }
}

function playgame(){
  runObjects();
}

function endgame(){}
