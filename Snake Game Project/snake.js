
class Snake{
  constructor(x, y, w, dx, dy){
    this.loc = createVector(x,y);
    this.w = w;
    this.clr = color(255, 0, 0);
    this.vel = createVector(dx, dy);
    this.body = [];
  };
  render(){
    fill(this.clr);
    rect(this.loc.x * this.w, this.loc.y * this.w, this.w, this.w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x * this.w,this.body[i].y * this.w, this.w, this.w);
    }
  };
  run(){
    this.render();
    this.update();
    this.addBody();
    this.checkEdges();
  };
  update(){
    if(keyIsPressed &&
      keyCode === RIGHT_ARROW){
        this.vel.x = 1;
        this.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === LEFT_ARROW){
        this.vel.x = -1;
        this.vel.y = 0;
      }else if(keyIsPressed &&
      keyCode === DOWN_ARROW){
        this.vel.y = 1;
        this.vel.x = 0;
      }else if(keyIsPressed &&
      keyCode === UP_ARROW){
        this.vel.y = -1;
        this.vel.x = 0;
    }
      if(this.body.length > 0){
        for(var i = this.body.length-1; i > 0; i--){
          this.body[i].x=this.body[i-1].x;
          this.body[i].y=this.body[i-1].y;
        }
          this.body[0].x=head.loc.x;
          this.body[0].y=head.loc.y;
      }
      head.loc.add(this.vel);
  };
  addBody(){
    if(head.loc.x === food.loc.x && head.loc.y === food.loc.y){
      this.body.push(createVector(head.loc.x, head.loc.y));
    }
  }

  checkEdges(){
    if(this.loc.x > width/this.w){
      gameState = 3;
    }
    if(this.loc.y> width/this.w){
      gameState = 3;
    }
    if(this.loc.y < 0){
      gameState = 3;
    }
    if(this.loc.x < 0){
      gameState = 3;
    }
  }
}
