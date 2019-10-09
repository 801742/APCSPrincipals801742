//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var squares = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadRect()
}

//  The draw function is called @ 30 fps
function draw() {}

function loadRect(){
  idy = 0
for(i = 0; i < 8; i++){
  p = 50
  id = 0
  idy = idy + 1
for(j = 0; j < 8; j++){
  id = id+1
  squares = new Rectangle(p*id, p*idy, 50, 50);
}
}
}
