
var w;
class Ball{
  constructor(x, y, dx, dy){
    //this.x = x;
    //this.y = y;
    //this.dx = dx;
    //this.dy = dy;
    this.clr = color(random(255), random(255), random(255))
    //this.w = random(10, 70);
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, .1);
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.loc.x, this.loc.y, 50, 50);
}

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
        this.clr = color(random(255), random(255), random(255))

    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
        this.clr = color(random(255), random(255), random(255))

    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y+2;
        this.clr = color(random(255), random(255), random(255))


    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y-2;
        this.clr = color(random(255), random(255), random(255))

    }

  }


update(){

  this.loc.add(this.vel)
  this.vel.add(this.acc)
}

}
