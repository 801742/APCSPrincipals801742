//  Andrew Mills
// 	12/9/19
// Num Sort

var nums = [];
var median;
var avg;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadNumbers(11)
  bubbleSort();
  findMedian();
  findAvg();
  logNumber();

}
//  The draw function is called @ 30 fps

function loadNumbers(n){
  for(var i =0; i < n; i++){
    nums[i] = int(random(100));
  }

}

function bubbleSort(){
  for(var i = 0; i < nums.length; i++)
    for(var j = 0; j < nums.length-1; j++){
      if(nums[j] < nums[j+1]){
        swap(nums, j, j+1);
      }
    }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}

function findAvg(){
  avg = 0;
  for(var i = 0; i < nums.length; i++){
    avg = (avg + nums[i]);
  }
  avg = (avg/nums.length);
}

function findMedian(){
  median = nums[5];
}

function logNumber(){
  console.log(nums);
  console.log(median);
  console.log(avg);
}
