//code for food class
class Food{
  constructor(x, y, w){
    this.loc = createVector(x,y);
    this.w = w;
    this.clr = color(0,255, 0);
    //food has location, width and color
  };
  //rendering food
  render(){
    fill(this.clr);
    rect(this.loc.x*this.w, this.loc.y*this.w, this.w, this.w);
  };
  //running its properties
  run(){
    this.render();
  };
  //isEaten function detects when snake head collides with food
  isEaten(){
    //when this colision happens it makes statment true triggering listener in sketch
    if(this.loc.x === head.loc.x && this.loc.y === head.loc.y){
      return true;
    }
    //when its not true its defaultly false, not triggering the function in sketch  
    return false;
  }
}
