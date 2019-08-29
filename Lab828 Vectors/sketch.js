//  Andrew Mills
// 	8/28/19
// Vectors

var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);

loadBalls(100);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  runBalls();
}

function loadBalls(n){
  for(var i =0; i < n; i++){
    balls[i] = new Ball(random(800), random(800), random(-3, 3), random(-3, 3));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
