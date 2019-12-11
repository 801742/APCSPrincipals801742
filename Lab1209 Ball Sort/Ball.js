
class Ball{
  constructor(x, y){
    this.w = 15;
    this.r = random(255)
    this.clr = color(this.r, 0, 0)
    this.x = x;
    this.y = y;
    this.w = width/20;
}
run(){
  this.render();
}
render(){
  fill(this.clr)
  ellipse(this.x+20, this.y, this.w, this.w);
}

ballX(i){
  this.x=i*40;
  }
}
