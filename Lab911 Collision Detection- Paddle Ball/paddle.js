class Paddle {
constructor(x, y, w, h) {
  this.clr = color(255, 0 , 0);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
} //end of constructor
run(){
  render();
}//end of run

render(){
  rect(this.loc.x, this.loc.y, this.w, this.h)
}

}//end of paddle class
