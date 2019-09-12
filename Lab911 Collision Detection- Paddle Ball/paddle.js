class Paddle {
constructor(x, y, w, h) {
  this.clr = color(255, 0 , 0);
  this.w =
  this.h = 20
} //end of constructor
run(){
  render();
}//end of run

render(){
  fill(this.clr)
  rect(this.x, this.y, this.w, this.h)
}

}//end of paddle class
