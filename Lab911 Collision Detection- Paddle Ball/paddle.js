var mouseLoc;
class Paddle {
constructor(x, y, w, h) {
  this.clr = color(255, 0 , 0);
  this.loc = createVector(x, y)
  this.loc2 = createVector(w, h);
} //end of constructor

run(){
  this.render();
  this.update();
}//end of run

render(){
  fill(this.clr)
  rect(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
}

update(){
 var mouseLoc = createVector(mouseX, 700);
 this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}
}//end of paddle class
