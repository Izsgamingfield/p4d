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
//Self protrait
//January 24th, 2019

function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
}

function draw() {
  background(255);
  //Outside Frame
  rect(-1, -1, 400, 400);
    
  //Fill in the blue
  fill(106,55,255);
  rect(0,280,80,400);
  noFill();
  
  //Fill in the red
  fill(255,53,34);
  rect(80,0,400,280);
  noFill();
  
    //Fill in the yellow
  fill(255,250,34);
  rect(0,0,80,100);
  rect(280,280,280,400);
  noFill();
  
  line(80,0,80,400);
  line(0,280,400,280);
  
  //Heavy stroke
  strokeWeight(8);
  line(0,150,80,150);
  line(340,280,340,400);
  strokeWeight(3);
  
  //group of line
  line(340,350,400,350);
  line(340,360,400,360);
  line(340,370,400,370);
  line(340,390,400,380);
  line(340,390,400,390);
  ellipse(40,40,80,80);
  fill(255);
  arc(40, 40, 80, 80, 0,HALF_PI);
  
  //Circle big in white
  fill(255);
  ellipse(240,160,320,320);
  noFill();
  fill(190);
  arc(240, 160, 320, 320, 0, 3.14,OPEN);
  noFill();
  
  fill(106,55,255);
  arc(280, 120, 210, 210, 2.6, 0.1,PIE);
  noFill();
  ellipse(280,120,210,210);

 
  rect(160, 50,70, 400, 10, 10, 0, 0);
  fill(255,53,34);
  ellipse(220,220,60,60);
  noFill();
  line(40,0,40,80);
  ellipse(140,140,90,90);
  
  // Try Vertice
  beginShape();
  vertex(0, 0);
  vertex(80, 150);
  vertex(400, 280);
  vertex(80, 400);
  endShape(CLOSE);
  
}