class Score{
  constructor(s, x , y){
    this.x = x;
    this.y = y;
    this.s = s
  } //end of constructor
  run(){
    this.render();
    this.isColliding();
  } //end of run
  isColliding(){
    if(this.loc.x > paddle.loc.x &&
    this.loc.x < paddle.loc.x +paddle.w &&
    this.loc.y > paddle.loc.y &&
    this.loc.y < paddle.loc.y + paddle.h){
      this.s = this.s + 1
    }
  }
  render(){
    text(this.s, this.x, this.y)
  }
}//end of score class
console.log(s)
