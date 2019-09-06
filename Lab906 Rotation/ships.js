class Ship{
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.angle = 0;
    this.acc = createVector(0,0)
  }; //end of constructor

run(){
  this.render();
  this.update();
  this.checkEdges();
} //end of run

render(){
  this.angle = this.angle +.1
  push();
  translate(this.loc.x, this.loc.y)
  rotate(this.angle)
  triangle(-5, 8, 5, 8, 0, -8);
  pop();
} // end of render

checkEdges(){
  if(this.loc.x < 0) this.loc.x = width;
  if(this.loc.x > width) this.loc.x = 0;
  if(this.loc.y < 0) this.loc.y = height;
}

}//end of ship class
