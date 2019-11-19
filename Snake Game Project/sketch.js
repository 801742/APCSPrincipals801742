//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var head, food;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
  frameRate(15);
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
  runObjects();
}
