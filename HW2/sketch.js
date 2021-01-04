/**
* Yourfirstand Lastname
* IGME-609: Assignment Name, m/d/18
* Summarization of sketch activity
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
//YunSheng Zhou
//IGME-609
//Interactive Scene
//Feb 19th, 2019
var moveLeaf;
var bgColorBlue;
var leafY;

function setup(){
  createCanvas(400, 400);
  frameRate(20);
  moveLeaf = 40;
  bgColorBlue = 255;
  leafY = width * 0.5;
}

function draw() {
  //text
  background(159,228,bgColorBlue);
  bgColorBlue = bgColorBlue -1;
  if (mouseY > width *0.4) {
  background(159, 228, 259);
  strokeWeight(12);
  stroke(225,15,20);
  line(mouseX,mouseY,198,273);
  noStroke();
  textSize(28);
  text('+1s', 180, 30);
  fill(255);
  }
  
  //movement of mouse
  strokeWeight(1);
  stroke(151);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  
  //Move Leaf
  fill(0,146,96);
  ellipse(leafY+150,moveLeaf,141,141);
  ellipse(leafY-50,moveLeaf+200,50,50);
  ellipse(leafY-120,moveLeaf-60,80,80);
  moveLeaf = moveLeaf +1;
  
  //drawfrog
  noStroke();
  drawClaw(0,0);
  drawFrog();
  drawFly(mouseX,mouseY);

}

function drawFrog(){
  fill(125,207,18);
  beginShape();
  curveVertex(200, 236);
  curveVertex(200, 236);
  curveVertex(142, 290);
  curveVertex(110, 420);
  curveVertex(310, 420);
  curveVertex(270, 290); 
  curveVertex(210, 236);  
  curveVertex(210, 236); 
	endShape();
  
  //eyes
  noFill();
  fill(255);
  ellipse(155,276,40,60);
  ellipse(260,276,40,60);
  noFill();
  fill(12);
  ellipse(160,270,25,36);  
  ellipse(254,270,25,36); 
	fill(0,146,69);
  ellipse(195,251,8,8);
  ellipse(215,251,8,8);
}

function drawClaw(){
  //left
  strokeWeight(6);
  stroke(0,146,69);
  line(70,285,72,332);
  line(110,302,72,332);
  line(44,296,72,332);
  line(35,325,72,332);
  noStroke();
  strokeWeight(12);
  stroke(57,181,74);
  beginShape();
  curveVertex(72,332);
  curveVertex(72,332);
  curveVertex(90,368);
  curveVertex(115,402);
  curveVertex(115,402);
  endShape();
  noStroke();
  fill(0,146,69);
  ellipse(70,285,20,20);
  ellipse(110,302,20,20);
  ellipse(44,296,20,20);
  ellipse(35,325,20,20);
  fill(57,181,74);
  ellipse(72,332,25,25);
  noFill();
  
  //right
  strokeWeight(6);
  stroke(0,146,69);
  line(300,303,327,332);
  line(329,286,327,332);
  line(355,296,327,332);
  line(364,325,327,332);
  noStroke();
  strokeWeight(12);
  stroke(57,181,74);
  beginShape();
  curveVertex(326,332);
  curveVertex(326,332);
  curveVertex(310,368);
  curveVertex(284,402);
  curveVertex(284,402);
  endShape();
  noStroke();
  fill(0,146,69);
  ellipse(300,303,20,20);
  ellipse(329,286,20,20);
  ellipse(355,296,20,20);
  ellipse(364,325,20,20);
  fill(57,181,74);
  ellipse(327,332,25,25);
  noFill();
}

function drawFly(x,y){
  push();
  translate(x, y);
  fill(245);
  ellipse(9,9,16,16);
  ellipse(9,19,20,20);
  ellipse(34,19,20,20);
  ellipse(34,9,16,16);
  fill(135);
  quad(22, -6, 34, 12, 22, 39, 9, 12)
  pop();  
}