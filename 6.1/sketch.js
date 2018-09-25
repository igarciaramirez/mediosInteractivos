var teBote;
var badBunny;
var nio;
var boca = 5;
var bocaopen = 1;
var miAnalizador;
var nivel;
var dur;
var col = 0;
posBBB = -400;
var posicion = 0
var posd = -1000
var poscane = 0
var posdar = -800
var lag = 171.5

function preload() {

  teBote = loadSound('assets/tebote.mp3');
  badBunny = loadImage('assets/bbb.png');
  nio = loadImage('assets/nio.png');
  bunny = loadImage('assets/bunny.png');
  bunny2 = loadImage('assets/bunny2.png');
  caneca = loadImage('assets/canec.png');
}


function setup() {
  createCanvas(400, 400);

  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(teBote);

  dur = teBote.duration();
}

function draw() {

  if (mouseIsPressed) {
    teBote.play();
    teBote.jump(13);
    
    image(nio, 0, 100, 300, 300);
    fill (0);
text ('TBT',140,140,20,20);

  }

  var nivel = miAnalizador.getLevel();
  //noprotect
  stroke (0);
  fill(250, 0, 0);
  ellipse(155, 200, 30, nivel * 40);
  
  noStroke ();
  fill (153,204,255);
    ellipse (125,lag,3,3);
    lag = lag + 0.1
  
  if (nivel > 0.2 && nivel > 0.4) {
    for (var i = 0; i < 5; i = i + 1) {
      //background (255);
      var posX = random(0, width);
      var posY = random(0, height);

      fill(0);
      textSize(20);
      text('TeBote', posX, posY, 20, 20);
      
    }
    image(nio, 0, 100, 300, 300);
    image(badBunny, -10, posBBB, 300, 300);
    posBBB = posBBB + 2.7
    if (posBBB > 80) {
      posBBB = 79;
      background(255);


      if (nivel > 0.1 && nivel > 0.2) {
        for (var i = 0; i < 10; i = i + 1) {
          var posX = random(0, width);
          var posY = random(0, height);
          image(bunny, posX, posY, 100, 100);
        }
      }
      if (nivel > 0.1 && nivel > 0.2) {
        for (var i = 0; i < 10; i = i + 1) {
          var posX = random(0, width);
          var posY = random(0, height);
          image(bunny2, posX, posY, 100, 100);
        }

        image(caneca, 0, poscane, 80, 80);
        image(caneca, 80, poscane, 80, 80);
        image(caneca, 160, poscane, 80, 80);
        image(caneca, 240, poscane, 80, 80);
        image(caneca, 310, poscane, 80, 80);
        image(caneca, 390, poscane, 80, 80);
        poscane = poscane + 1;
        image(badBunny, -10, 79, 300, 300);
        
       fill (0);
        textSize (10);
        text ('TBT',140,140,20,20);
      }
    }
  }
}