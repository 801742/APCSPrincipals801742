

class Ball{
  constructor(x, y, dx, dy){
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, .3);
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, 11, 11);
}

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;

    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;


    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;

    }

  }


update(){
  this.loc.add(this.vel)
  this.vel.add(this.acc)
}

}
