class Boss{
  constructor(x, y, dx){
    this.clr = color(2, 2, 2);
    this.x = x;
    this.y = y;
    this.dx = dx;
} //end of constructor
run(){
  this.render();
  this.checkEdges();
  this.update();
} //end of run
render(){
    fill(this.clr);
    ellipse(this.x, this.y, 120, 120);
} //end of render

  checkEdges(){
    if(this.x < 0 || this.x > width) this.dx = -this.dx;
  } //end of checkEdges

update(){
    this.x = this.x + this.dx;
} //end of update
}; //end of ball class
