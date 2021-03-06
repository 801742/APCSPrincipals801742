var mouseLoc;
class Paddle {
constructor(x, y, w, h) {
  this.clr = color(255, 0 , 0);
  this.loc = createVector(x, y);
  this.w = 100
  this.h = 25
} //end of constructor

run(){
  this.render();
  this.update();
}//end of run

render(){
  fill(this.clr)
  rect(this.loc.x, this.loc.y, this.w, this.h);
}

update(){
 var mouseLoc = createVector(mouseX, 700);
 this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}
}//end of paddle class
