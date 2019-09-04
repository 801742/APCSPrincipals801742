

class Ball{
  constructor(x, y, dx, dy, id){
    //this.x = x;
    //this.y = y;
    //this.dx = dx;
    //this.dy = dy;
    //this.w = random(10, 70);
    this.clr = color(random(255), random(255), random(255))
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0, .1);
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
  if(id = -1){
    var d = this.loc.dist(mainBall.loc);
    if(d<450){
      var this.Force = p5.Vector.sub(mainBall.loc, this.loc);
      this.Force.normalize();
      this.Force.mult(.08);
      this.vel.add(this.Force);
      if(d> 85){
        var repForce = p5.Vector.sub(this.loc, mainBall.loc);
        repForce.normalize();
        repForce.mult(.5);
        tnhis.vel.add(repForce);
      }
    }
    else{}
    this.vel.limit(3);
  }
  this.loc.add(this.vel)
  //  this.acc = p5.Vector.sub(mainBall.loc, this.loc);
    //this.acc.normalize();
    //this.acc.halt(0.5);
}

}
