//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(210, 161, 140);
  ellipse(400, 400, 750, 750);
  fill(255, 255, 255);
  ellipse(200, 200, 150, 150);
  ellipse(600, 200, 150, 150);
  fill(0, 0, 0);
  ellipse(200, 200, 70, 70);
  ellipse(600, 200, 70, 70);
  fill(255, 255, 255);
  arc(400, 600, 300, 300, 0, PI + QUARTER_PI,CHORD );
  triangle(400, 325, 375, 370, 425, 370);

}
