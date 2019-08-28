

class Ball{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255), random(255))
    this.w = random(10, 70);
}
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr)
  ellipse(this.x, this.y, this.w, this.w);
}

  checkEdges(){
    if(this.x < 0){
      this.dx = -this.dx;
        this.clr = color(random(255), random(255), random(255))
          this.w = random(10, 70);
  this.clr = color(random(255), random(255), random(255))
    };
    if(this.x > width){
      this.dx = -this.dx;
        this.clr = color(random(255), random(255), random(255))
          this.w = random(10, 70);
  this.clr = color(random(255), random(255), random(255))
    }
    if(this.y < 0){
      this.dy = -this.dy;
        this.clr = color(random(255), random(255), random(255))
          this.w = random(10, 70);
  this.clr = color(random(255), random(255), random(255))
    };
    if(this.y > height){
      this.dy = -this.dy;
        this.clr = color(random(255), random(255), random(255))
          this.w = random(10, 70);
  this.clr = color(random(255), random(255), random(255))
    }

  }


update(){
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
}

}
