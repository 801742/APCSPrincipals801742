

class Ball{
  constructor(x, y, dx, dy){
    //this.x = x;
    //this.y = y;
    //this.dx = dx;
    //this.dy = dy;
    //this.clr = color(random(255), random(255), random(255))
    //this.w = random(10, 70);
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
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
      this.loc.x = -this.loc.x;

    }
    if(this.loc.x > width){
      this.loc.x = -this.loc.x;

    }
    if(this.loc.y < 0){
      this.vel.dy = -this.vel.dy;


    }
    if(this.loc.y > height){
      this.vel.dy = -this.vel.dy;

    }

  }


update(){
  this.loc.add(this.vel)
}

}
