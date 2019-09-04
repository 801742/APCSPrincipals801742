

class Ball{
  constructor(x, y, dx, dy, id){
    //this.x = x;
    //this.y = y;
    //this.dx = dx;
    //this.dy = dy;
    this.w=15;
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0, .1);
    if(this.id<0){
      this.w=50;
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
  var distToMainBall
  if(id >= 0){
  distToMainBall = this.loc.dist(mainBall.loc);
  if(distToMainBall<250){
    this.acc = p5.Vector.sub(mainBall.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(distToMainBall<150){
    this.acc = p5.Vector.sub(this.loc, mainBall.loc);
    this.acc.normalize();
    this.acc.mult(0.5);
  }
}
  this.loc.add(this.vel)

}//end of update

}//end of ball class
