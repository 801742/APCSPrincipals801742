//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var head;
var body = []
var grid = []
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadHead();
  runHead();
}
function draw(){
  grid();
}
function loadHead(){
  head = new Snake(random(800), random(800), 25, 25)
}
function runHead(){
  head.run();
}
function grid(){
  for(i = 0; i < 8; i++){
    for(n = 0; n < 8; n++){
      if(n % 2 = 1){ fill(255, 0, 0) }
      if(n % 2 = 0){ fill(0, 255, 0) }
      rect((width/8)*n,(height/8)*i,200, 200)
    }
  }
}
