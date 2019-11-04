class Bars{
  constructor(loc){
    this.loc = location;
    this.w = barWidth;
    this.h = barHeight
  }
  run(){
    this.render();
  }
  render(){
    fill(255, 255, 255);
    this.loc.x = i * 25;
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
