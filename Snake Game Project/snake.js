
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
    if(KeyIsPressed &&
      keyCode === RIGHT_ARROW){
        this.vel.x = 3
        this.vel.y = 0
      }else if(KeyIsPressed &&
      keyCode === LEFT_ARROW){
        this.vel.x = -3
        this.vel.y = 0
      }else if(KeyIsPressed &&
          keyCode === DOWN_ARROW){
            this.vel.x = 0
            this.vel.y = -3
          }else if(KeyIsPressed &&
          keyCode === UP_ARROW){
            this.vel.x = 0
            this.vel.y = 3
          }
    this.loc.add(this.vel);
  }
}
