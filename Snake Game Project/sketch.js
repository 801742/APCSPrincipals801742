//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var head;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadHead();
  runHead();
  frameRate(15);
}
function loadHead(){
  head = new Snake(random(800), random(800), 25, 0, 0)
}
function runHead(){
  background(20, 20, 20);
  head.run();
}
