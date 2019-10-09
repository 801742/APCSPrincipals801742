class Rectangle{
  constructor(x, y, clr){
    this.x = x;
    this.y = y;
    this.h = h;
    this.clr = color(clr, clr, clr)
  }
  render(){
    fill(this.clr);
    rect(this.x, this.y, 100, 100);
  } //end of render
  run(){
    this.render();
  }
}
