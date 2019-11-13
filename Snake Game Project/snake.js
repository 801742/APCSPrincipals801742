
class Snake{
  constructor(x, y, w, dx, dy){
    this.loc = createVector(x,y);
    this.w = w;
    this.clr = color(255, 0, 0);
    this.vel = createVector(dx, dy);
  };
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  };
  run(){
    this.render();
    this.update();
  };
  update(){
    if(keyIsPressed &&
      keyCode === RIGHT_ARROW){
        this.vel.x = 8;
        this.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === LEFT_ARROW){
        this.vel.x = -8;
        this.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === DOWN_ARROW){
        this.vel.y = 8;
        this.vel.x = 0;
      }else if(keyIsPressed &&
      keyCode === UP_ARROW){
        this.vel.y = -8;
        this.vel.x = 0;
    }
      this.loc.add(this.vel);
  };
};
