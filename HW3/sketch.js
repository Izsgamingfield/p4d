//YunSheng Zhou
//IGME-609
//Conditionals and Loops
//March 24th, 2019

var WaterR = 128;
var WaterG = 172;
var WaterB = 137;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(62,48,66);
  drawDesk();
  //Tube follow the mouse
  drawTube(mouseX,mouseY);
  
  //Press R to reset
  if(key == 'r'){
  background(62,48,66);
	drawDesk();
  drawTube(mouseX,mouseY);
	}
  
  //Press A to show data
  if(key == 'a'){
   drawData();   
  }
  
  //Use key b to show the color result
  if(key == 'b'){
  fill(255);
  textSize(24);
  text("Your color is: Green" ,280, 200);
  }
}

//Draw tube follow the mouse
function drawTube(x,y){
  push();
  translate(x, y);
  noFill();
  stroke(255);
  rect(0,0,37,37);
  fill(WaterR,WaterG,WaterB);
  rect(16, 37, 5, 47, 20);
  noStroke();
  rect(0,19,37,17);
  pop();
}  

function drawDesk(){
  //draw desk
  strokeWeight(2);
	stroke(255);
  noFill();
  push();
	beginShape();
  vertex(261, 292);
  vertex(261, 292);
  vertex(261, 308);
  vertex(311, 384);
  vertex(446, 384);
  vertex(495, 308);
  vertex(495, 292);
  vertex(261, 292);
	vertex(261, 292);
	endShape(CLOSE);

  //Draw water
  fill(WaterR,WaterR,WaterR);
  
  //Draw water
  quad(261,308,311,384,446,384,495,308);


  //change color of the water
  if ( (175<mouseX)  &&  (mouseX< 600) && mouseIsPressed == true){
		fill(WaterR,WaterG,WaterB);
    quad(261,308,311,384,446,384,495,308);
  }
    
  //Hightlight-water
  fill(255);
  quad(274,308,316,376,331,376,285,308);

  //Draw desk legs
  noStroke();
  fill(23,20,37);
  rect(258, 364, 7, 136);
  rect(253, 360, 255, 7);
  rect(269, 327, 7, 32);
  rect(492, 364, 7, 136);
  rect(482, 327, 7, 32);
  rect(310, 383, 136, 27);
  quad(331,410,352,434,402,434,425,410);
  ellipse(377,448,50,50);
  
  //Highlight
  fill(64,92,113);
  rect(316, 387, 62, 9);
  quad(342,405,360,430,378,430,390,405);
  ellipse(369,449,24,24);
  noFill();
}

function drawData(){
  stroke(0,255,255);
  rect(571,174,173,222);
  line(476,317,535,317);
  line(535,317,571,285);
  fill(0,255,255);
  ellipse(476,316,7,7);
  noStroke();
  fill(255);
  
  //text
  textSize(18);
  text("Analyzing... " , 585, 200);
  textSize(12);
  text("Press B to see results" , 585, 380);
  drawDataAnim();
}

function drawDataAnim(){
  var dataA = 230;
  var rectW = 8;
  var randomL = random(1,5);
	fill(0,255,255);
  
  //Draw five static data image
   for(var u = 1; u < 5;u++){
  	rect(591,dataA,rectW,5);
    dataA = dataA + 15;
   }

  //Use mouse to animate the data
  if ( (261<mouseX)  &&  (mouseY< 396) &&(mouseY> 50) ){
   for(var c = 0; c < 10;c++){
    rect(591,dataA,rectW*0.8,6);
    rect(591,dataA-30,rectW,6);
    rect(591,dataA-45,rectW*0.5,6);
    rectW = rectW + c * randomL *0.5;
    }
  }
}