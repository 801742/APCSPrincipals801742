
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
    this.update();
  };
  update(){

  }

  isEaten(){
    if(this.loc.x === head.loc.x && this.loc.y === head.loc.y){
      return true;
    }
    return false;
  }
}
