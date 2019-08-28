//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x;
var y;
var speedX;
var speedY;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
x=random(-5, 5);
y=random(-5, 5);
speedX=random(-5, 5);
speedY=random(-5, 5);

x2=random(-5, 5);
y2=random(-5, 5);
speedX2=random(-5, 5);
speedY2=random(-5, 5);


}

//  The draw function is called @ 30 fps
function draw() {
x=x+speedX
y=y+speedY
if(x<0){
  speedX=-speedX
};
if(x>800){
  speedX=-speedX
};
if(y<0){
  speedY=-speedY
}
if(y>800){
  speedY=-speedY
}

fill(255,0, 0)
ellipse(x, y, 60, 60);



}
