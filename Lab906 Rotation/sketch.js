//  Andrew Mills
// 	9/6/19
// Rotation

var ships = [];
var atractor, repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20,);
  loadObjects(1000);
}
//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 50);
  runShips();

}

function loadObjects(n){
  repeller = new Ball(width/2, height/2, random(-1, 1), random(-1,1), -2);
  atractor = new Ball(width/2, height/2, random(-1, 1), random(-1,1), -1);
    for(var i =0; i < n; i++){
      ships[i] = new Ship(random(width), random(height), random(-2, 2), random(-2, 2), i);
  }
} // end of loadObjects

function runShips(){
  repeller.run();
  atractor.run();
    for(var i = 0; i < ships.length; i++){
      ships[i].run();
  }
} //end of runShips
