
class Ball{
  constructor(x, y, dx, dy, id){
    this.w=15;
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0,0)
      if(this.id<0){
          this.w=50;
    }
      else{
        this.w = 15
    }
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, this.w, this.w);
}
  checkEdges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }
update(){
  var distToatractor
  var distTorepeller
  if(this.id >= 0){
    distToatractor = this.loc.dist(atractor.loc);
    distTorepeller = this.loc.dist(repeller.loc);
    if(distToatractor < 800){
      this.acc = p5.Vector.sub(atractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(.07);
    }
    if(distTorepeller < 150){
      this.acc = p5.Vector.sub(this.loc, repeller.loc);
      this.acc.normalize();
      this.acc.mult(.5);
    }
  }
  this.vel.limit(5);
  this.loc.add(this.vel);
  this.vel.add(this.acc);
}//end of update

}//end of ball class
