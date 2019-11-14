
class Food{
  constructor(x, y, w){
    this.loc = createVector(x,y);
    this.w = w;
    this.clr = color(0,255, 0);
  };
  render(){
    fill(this.clr);
    rect(this.loc.x*this.w, this.loc.y*this.w, this.w, this.w);
  };
  run(){
    this.render();
  };
}
