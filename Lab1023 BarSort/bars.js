class Bars{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = color(24, 150, 70);
  };
  render(){
    fill(this.clr)
    rect(this.x, this.y, this.w, this.h);
  }
}
