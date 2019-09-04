//  Andrew Mills
// 	8/28/19
// Vectors

var balls = []
var mainBall
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
mainBall = new Ball(width, height, 1 , 1 , -1);
loadBalls(100);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  runBalls();
  mainBall.run();
}

function loadBalls(n){
  mainBall = new Ball(60, 60, 30, 30, -1)
  for(var i =0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), random(-3, 3), random(-3, 3), i);
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

}
