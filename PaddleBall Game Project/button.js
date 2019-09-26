//  Andrew Mills
// 	9/11/19
// Collision
class Button{
  constructor(x, y, w, h, msg){
  this.loc = createVector(x, y)
  this.w = w;
  this.h = h;
  this.msg = 'msg'

}//end of constructor
  render(){
    fill(20, 100, 130);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    textSize(25)
    text(this.msg, this.loc.x, this.loc.y);
  }
  run(){
    this.render()
  } //end of run
  checkEdges(){
    if(mouseIsPressed &&
      mouseX > this.loc.x - 30 &&
      mouseX < this.loc.x + 30 &&
      mouseY > this.loc.y - 30 &&
      mouseY < this.loc.y + 30){
        gameState = 2;
        if(this.msg = 'easy'){
          gameMode = 1;
        }else if(this.msg = 'medium'){
          gameMode = 2;
        }else if(this.msg = 'hard'){
          gameMode = 3;
        }
  }
}//end of button class
