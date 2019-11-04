
class Snake{
  constructor(x, y, w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.clr = color(255, 0, 0);
  }
  render(){
    fill(this.clr)
    rect(this.x, this.y, this.w, this.w)
  }
  run(){
    this.render();
  }
}
