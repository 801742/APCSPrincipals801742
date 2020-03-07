
class Boss{
  constructor(x, y, dx, dy){
  this.clr = color(2,2,2);
  this.loc = createVector(x, y);
  this.vel = createVector(dx, dy);
  this.acc = createVector(0, .1);
}
run(){
  this.render();
  this.checkEdges();
  this.update();
} //end of run
render(){
  fill(this.clr);
  ellipse(this.loc.x, 100, 150, 135);
} //end of render

  checkEdges(){
    if(this.loc.x < 135/2 || this.loc.x > width-135/2)this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height){
       this.loc.y = 0
       this.vel.y = 0
     }
  } //end of checkEdges

update(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  this.vel.limit(20)
  
} //end of update



}
