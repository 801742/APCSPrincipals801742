//  Andrew Mills
// 	9/25/19
// PaddleBall Project
class Button{
  constructor(x, y, w, h, msg){
  this.loc = createVector(x, y)
  this.w = w;
  this.h = h;
  this.msg = msg;

}//end of constructor
  render(){
    fill(20, 100, 130);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    textSize(25)
    fill(2, 2, 2)
    text(this.msg, this.loc.x, this.loc.y - 20);
  }
  run(){
    this.render()
    this.checkEdges();
  } //end of run
  checkEdges(){
    if(mouseIsPressed &&
      mouseX > this.loc.x - 30 &&
      mouseX < this.loc.x + 30 &&
      mouseY > this.loc.y - 30 &&
      mouseY < this.loc.y + 60 &&
      this.msg === 'easy'){
          gameMode = 1;
          gameState = 2;
        }else if(mouseIsPressed &&
          mouseX > this.loc.x - 30 &&
          mouseX < this.loc.x + 30 &&
          mouseY > this.loc.y - 30 &&
          mouseY < this.loc.y + 60 &&
          this.msg === 'medium'){
          gameMode = 2;
          gameState = 2;
        }else if(mouseIsPressed &&
          mouseX > this.loc.x - 30 &&
          mouseX < this.loc.x + 30 &&
          mouseY > this.loc.y - 30 &&
          mouseY < this.loc.y + 60 &&
          this.msg === 'hard'){
          gameMode = 3;
          gameState = 2;
        }else if(mouseIsPressed &&
          mouseX > this.loc.x - 30 &&
          mouseX < this.loc.x + 30 &&
          mouseY > this.loc.y - 30 &&
          mouseY < this.loc.y + 60 &&
          this.msg === 'instructions'){
          gameState = 4;
        }else if(mouseIsPressed &&
          mouseX > this.loc.x - 30 &&
          mouseX < this.loc.x + 30 &&
          mouseY > this.loc.y - 30 &&
          mouseY < this.loc.y + 60 &&
          this.msg === 'restart'){
          gameState = 1;
        }else if(mouseIsPressed &&
          mouseX > this.loc.x - 30 &&
          mouseX < this.loc.x + 30 &&
          mouseY > this.loc.y - 30 &&
          mouseY < this.loc.y + 60 &&
          this.msg === 'play'){
          gameState = 1;
        }
}
}//end of button class
