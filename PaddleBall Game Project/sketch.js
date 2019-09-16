//  Andrew Mills
// 	9/11/19
// Collision
var balls = [];
var ships = [];
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(1, 30);
}

function draw() {
  background(255,255,255, 60);
  runObjects();
  fill(2, 2, 2);
  textSize(25);
  text('Score:', 50, 30)
  fill(2, 2, 2)
  ellipse(250, 60, 100, 100)
}

function loadObjects(n, l){
  for(var i =0; i < n; i++){
    balls[i] = new Ball(random(800), random(300), random(0, 5), random(0,5));
  }
  for(var i =0; i < l; i++){
    ships[i] = new Ship(random(width), random(300), random(-2, 2), random(-2, 2), i);
  }
  paddle = new Paddle(250, 700, 200, 25);
} //end of loadObjects

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
  for(var i = 0; i < ships.length; i++) ships[i].run();
} //end of runObjects
