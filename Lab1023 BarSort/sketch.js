//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars, barWidth;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  barWidth = 10;
  numBars = width/barWidth;

  loadBars(numBars);
  runBars();
  myBubbleSort();
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 110);
  frameRate(1);
  runBars();
}

function loadBars(num){
    
}
function selectionSwap(){
for (var i = 0; i < list.length - 1; i++){
  var index = i;
  for (var j = i + 1; j < list.length; j++){
    if (list[j] < list[index]){
       index = j;
    }
  }
            var smallerNumber = list[index];
            list[index] = list[i];
            list[i] = smallerNumber;
        }
      }
console.log(list)
