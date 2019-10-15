//  Andrew Mills
// 	10/15
// Bubble Sort
a = [7, 4, 8, 1, 2, 9, 3, 5, 6];
var temp;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

function bubbleSort(){
  for (i=0; i<n-1; i++) {
  for (j=0; j<n-1-i; j++)
    if(a[j+1] < a[j]) swap(a[j], a[j+1]).run
}

function swap(a[j], a[j+1]){
  tmp = a[j];
    a[j] = a[j+1];
    a[j+1] = tmp;
}
