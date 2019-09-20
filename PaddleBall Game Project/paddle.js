var mouseLoc;
class Paddle {
constructor(x, y, w, h, id) {
  this.clr = color(255, 0 , 0);
  this.loc = createVector(x, y);
  this.w = 160
  this.h = 25
  this.id = id
} //end of constructor

run(){
  this.render();
  this.update();
  this.keyPressed();
}//end of run

render(){
  fill(this.clr)
  rect(this.loc.x, this.loc.y, this.w, this.h);
}

update(){
  if(this.id > 0){
 var mouseLoc = createVector(mouseX, 700);
 this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}else if(this.id < 0) {
  if()
}
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    this.loc.x = this.loc.x-1
  } else if (keyCode === RIGHT_ARROW) {
    this.loc.x = this.loc.x+1
  }
}
}//end of paddle class
