
class Ball{
  constructor(x, y, dx, dy){
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, .1);
} //end of constructor
run(){
  this.render();
  this.checkEdges();
  this.update();
  this.isColliding();
} //end of run
render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 20, 20);
} //end of render

  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width)this.vel.x = -this.vel.x;
    if(this.loc.y < 0 || this.loc.y > height) this.vel.y = -this.vel.y;
  } //end of checkEdges

update(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
} //end of update

isColliding(){
  if(this.loc.x > paddle.loc.x &&
  this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y &&
  this.loc.y < paddle.loc.y + paddle.h){
    this.vel.y = -this.vel.y;
}
}
}; //end of ball class
