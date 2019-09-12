//  Andrew Mills
// 	9/11/19
// Collision
var balls = []
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(100);
}

function draw() {
  background(5,5,5);
  runObjects();
}

function loadObjects(n){
  for(var i =0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), random(-3, 3), random(-3,3));
  }
  paddle = new Paddle(300, 300, 100, 50);
} //end of loadObjects

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
} //end of runObjects
