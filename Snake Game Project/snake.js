
class Snake{
  constructor(x, y, w){
    this.loc = createVector(x,y)
    this.w = w;
    this.clr = color(255, 0, 0);
    this.vel = createVector(0,0)
  }
  render(){
    fill(this.clr)
    rect(this.x, this.y, this.w, this.w)
  }
  run(){
    this.render();
  }
  update(){
    if(mousePressed === Right_Arrow){

    }else if
    this.loc.add(this.vel);
  }
}
