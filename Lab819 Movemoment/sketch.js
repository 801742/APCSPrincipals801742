//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x;
var y;
var speedX;
var speedY;

function setup() {
  x=1;
  y=300;
  speedX=3;
  speedY=-2;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
x=x+speedX
y=y+speedY;
if(x>400){
  speedY=2;
};
  fill(200, 0, 0);
  ellipse(x, y, 50, 50);
  fill(255, 165, 0);
  ellipse(x, y+25, 50, 50);
  fill(255, 255, 0);
  ellipse(x, y+50, 50, 50);
  fill(0,255,0);
  ellipse(x, y+75, 50, 50);
  fill(0,0,255);
  ellipse(x, y+100, 50, 50);
  fill(255,0,255);
  ellipse(x, y+125, 50, 50);

}
