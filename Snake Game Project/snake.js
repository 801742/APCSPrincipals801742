
class Snake{
  constructor(x, y, w, dx, dy){
    head.loc = createVector(x,y);
    head.w = w;
    head.clr = color(255, 0, 0);
    head.vel = createVector(dx, dy);
  };
  render(){
    fill(head.clr);
    rect(head.loc.x*head.w, head.loc.y*head.w, head.w, head.w);
  };
  run(){
    this.render();
    this.update();
  };
  update(){
    if(keyIsPressed &&
      keyCode === RIGHT_ARROW){
        head.vel.x = 1;
        head.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === LEFT_ARROW){
        head.vel.x = -1;
        head.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === DOWN_ARROW){
        head.vel.y = 1;
        head.vel.x = 0;
      }else if(keyIsPressed &&
      keyCode === UP_ARROW){
        head.vel.y = -1;
        head.vel.x = 0;
    }
      head.loc.add(head.vel);
  };
  //tangled(){}
};
