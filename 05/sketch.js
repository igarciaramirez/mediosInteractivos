
var miMinuto;
var miSegundo;
var miHora;
var miMinMod;
var miSegMod;
  var miHorMod;
var col = 0;
var col1 = 0;
var col2 = 0;

function setup() {
  createCanvas(400, 400);
 angleMode (DEGREES); 
 
  
  
}

function draw() {
  //background(220);
  background (255);
  stroke (0);
  fill (0);
    text ("12",190, 90,10);
  text ("6",200,320,10);
  text ("9",85,200,10);
  text ("3",310,200,10);
  
  miSegundo = second();
  miMinuto = minute ();
  miHora = hour ();
  fill (255);
  ellipse (width/2,height/2,200,200);
  ellipse (width/2,height/2,10,10);
  ellipse (width/2,height/2,8,8);
  ellipse (width/2,height/2,6,6);
  ellipse (width/2,height/2,4,4);
   ellipse (width/2,height/2,2,2);

  miSegMod = map (miSegundo,0,59,0,359);
  miMinMod = map (miMinuto,0,59,0,359);
  miHorMod = map (miHora,0,11,0,359);
  
  

  strokeWeight (1);
  
  push ();
  
  translate(width/2,height/2)
  rotate (miSegMod);
  line (0,0,0,-80);
  pop ();
  
  push ();
  translate(width/2,height/2)
  rotate (miMinMod);
  line (0,0,0,-50);
  pop();
  
  push ();
  translate(width/2,height/2)
  rotate (miHorMod);
  line (0,0,0,-30);
  pop ();
  
  
  fill (col,col1,col2); 
       rect (20,40,50,20);
  rect (70,45,5,10);
  if (miHorMod <= 0) {
    col = 255;
    col1 = 0;
    col2 =0;
  }
  if (miHorMod >= 0) {
    col = 255;
    col1 = 0;
    col2 =0;
  }
  
   if (miHorMod >= 45) {
    col = 255;
    col1 = 60;
    col2 =0;
  }
  
   if (miHorMod >= 90) {
    col = 255;
    col1 = 145;
    col2 =0;
  }
  
  if (miHorMod >= 135) {
    col = 239;
    col1 = 255;
    col2 =0;
  }
  
   if (miHorMod >= 135) {
    col = 0;
    col1 = 255;
    col2 =0;
  }
  
  if (miHorMod >= 292) {
    col = 239;
    col1 = 255;
    col2 =0;
  }
  
  if (miHorMod >= 315) {
    col = 255;
    col1 = 145;
    col2 =0;
  }
  
  if (miHorMod >= 337) {
    col = 255;
    col1 = 0;
    col2 =0;
    
  }
}