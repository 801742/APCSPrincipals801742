//  Andrew Mills
// 	9/6/19
//  Quiz #1 Corrections
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}
function draw() {}

var num = 1;
if(num < 4){
  console.log("Peace");
}
console.log("War");

for(var i = 14; i > 8; i--){
  i =i-4;
  console.log(i);
}
