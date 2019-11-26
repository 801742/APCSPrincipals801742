//SNAKE CLASS
class Snake{
  constructor(x, y, w, dx, dy){
    this.loc = createVector(x,y);
    //location vectors, x, y
    this.w = w;
    this.clr = color(255, 0, 0);
    this.vel = createVector(dx, dy);
    this.body = [];
  };
  render(){
    fill(this.clr);
    //renders head
    rect(this.loc.x * this.w, this.loc.y * this.w, this.w, this.w);
    //renders body using loop
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x * this.w,this.body[i].y * this.w, this.w, this.w);
    }
  };
  run(){
    //running functions of snake
    this.render();
    this.update();
    this.addBody();
    this.checkEdges();
//    this.tangled();
  };
  update(){
    //head movement for right arrow
    if(keyIsPressed &&
      keyCode === RIGHT_ARROW){
        //changes direction of travel (vel)
        this.vel.x = 1;
        this.vel.y = 0;
    //head movement for left arrow
      }else if(keyIsPressed &&
      keyCode === LEFT_ARROW){
        this.vel.x = -1;
        this.vel.y = 0;
    //head movement for Down Arrow
      }else if(keyIsPressed &&
      keyCode === DOWN_ARROW){
        this.vel.y = 1;
        this.vel.x = 0;
    //head movement for Up Arrow
      }else if(keyIsPressed &&
      keyCode === UP_ARROW){
        this.vel.y = -1;
        this.vel.x = 0;
    }
    //code to move body, follows head
      if(this.body.length > 0){
        for(var i = this.body.length-1; i > 0; i--){
          this.body[i].x=this.body[i-1].x;
          this.body[i].y=this.body[i-1].y;
          //moving each body vector to the location of the body vector in front of it
        }
        //because first body has none ahead, must seperately move it to loc of head
          this.body[0].x=head.loc.x;
          this.body[0].y=head.loc.y;
      }
      //creating vel for head
      head.loc.add(this.vel);
  };
  addBody(){
    //collision detetector to see when head eats food
    if(head.loc.x === food.loc.x && head.loc.y === food.loc.y){
      //adds segment once food eaten
      this.body.push(createVector(head.loc.x, head.loc.y));
    }
  }
//checkEdges function detects when head hits wall
  checkEdges(){
    //right wall
    if(this.loc.x > width/25.5){
      //once hits wall changes to end screen (gamestate 3)
      gameState = 3;
    }
    //bottom wall
    if(this.loc.y> width/25.5){
      gameState = 3;
    }
    //upper wall
    if(this.loc.y < 0){
      gameState = 3;
    }
    //left wall
    if(this.loc.x < 0){
      gameState = 3;
    }
  }
  //tangled function detects if snake hits body
//  tangled(){
//     if(head.loc.x === this.body[i].x && head.loc.y === this.body[i].y){
//      gameState = 3;
//    }
//  }
}
