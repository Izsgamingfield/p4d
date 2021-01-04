var myBubble = [];
var bubbleNum = 100;

function setup() {
    createCanvas(400, 400);
    for(var i = 0; i < bubbleNum; i++){
      myBubble[i] = new bubble();
    }
}

function draw() {
  background(254,128,144);
  for (var i = 0;i < bubbleNum; i++){
    myBubble[i].move();
    myBubble[i].display(); 
  }  
}