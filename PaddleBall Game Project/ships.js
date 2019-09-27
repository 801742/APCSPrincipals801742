//  Andrew Mills
// 	9/25/19
// PaddleBall Project
class Ship{
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0, .1);
  } //end of constructor

run(){
  this.render();
  this.update();
  this.checkEdges();
  this.isColliding();
} //end of run

render(){
  this.heading = this.vel.heading();
  fill(this.clr);
  this.angle = this.angle + .1;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.heading + 1.5);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
} // end of render

checkEdges(){
  if(this.loc.x < 0 || this.loc.x > width) this.vel.x = -this.vel.x;
  if(this.loc.y < 0){
    this.loc.y = 25
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.loc.y = 0
    this.vel.y = 0
    lives = lives - 1;
  }
} // end of checkEdges
update(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}
isColliding(){
  if(this.loc.x > paddle.loc.x &&
  this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y &&
  this.loc.y < paddle.loc.y + paddle.h){
    this.vel.y = -this.vel.y;
    score=score+1;
  }
}
}//end of ship class
