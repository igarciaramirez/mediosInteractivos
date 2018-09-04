// VARIABLES ESTRELLAS
var rad = 2;
var rad1 = 2;
var rad2 = 2;
var rad3 = 2;
var rad4 = 2;
var rad5 = 2;
// VARIABLES PLANETAS
var planet = 100;
var planet1 = 200;
//VARIABLRES COHETE
var posxa = -100;
var posxb = -90;
var posxc = -120;
var posxd = -130;
var posya = 500;
var posyb = 530;
// EXPLOSION
var boom = 2;
//Allien
var allieny = 600;
var ojito = 15;
var ojo1 = 590;
var bocay = 620;
//Rectangulo final
posyquad = 0;

function setup() {
  createCanvas(600, 400);
  background(9, 21, 60);

  // Planeta rojo
  for (var col = 51; col < 255; col = col + 40) {
    noStroke();
    fill(255, col + 1, 51);
    ellipse(500, 100, planet);
    planet = planet - 10;
  }

  // Planeta Azul
  for (var col = 51; col < 255; col = col + 40) {
    noStroke();
    fill(51, col + 1, 255);
    ellipse(0, 400, planet1);
    planet1 = planet1 - 30;
  }
}

function draw() {

  stroke(0);
  //Estrellas
  fill(255);
  ellipse(100, 120, rad);
  rad = rad + 0.1;
  if (rad > 5) {
    rad = 1;
  }
  fill(255);
  ellipse(300, 144, rad1);
  rad1 = rad1 + 0.1;
  if (rad1 > 5) {
    rad1 = 1;
  }
  fill(255);
  ellipse(400, 350, rad2);
  rad2 = rad2 + 0.1;
  if (rad2 > 5) {
    rad2 = 1;
  }
  fill(255);
  ellipse(200, 210, rad3);
  rad3 = rad3 + 0.1;
  if (rad3 > 5) {
    rad3 = 1;
  }
  fill(255);
  ellipse(500, 320, rad4);
  rad4 = rad4 + 0.1;
  if (rad4 > 5) {
    rad4 = 1;
  }
  fill(255);
  ellipse(120, 380, rad5);
  rad5 = rad5 + 0.1;
  if (rad5 > 5) {
    rad5 = 1;
  }
  //Texto inicial
  if (frameCount > 50 && frameCount < 150) {
    fill(255, 0, 0);
    noStroke();
    textSize(20);
    text('THE BIG BANG', 50, 100);
  }
  //COHETE
  if (frameCount > 100 && frameCount < 680) {
    noStroke();
    fill(255, 0, 0);
    quad(posxa, posya, posxb, posya, posxc, posyb, posxd, posyb);
    posxa = posxa + 1
    posxb = posxb + 1
    posxc = posxc + 1
    posxd = posxd + 1
    posya = posya - 0.7
    posyb = posyb - 0.7
  }
  // Explosion blanca
  if (frameCount > 690 && frameCount < 1200) {
    noStroke();
    fill(255);
    ellipse(500, 100, boom);
    boom = boom + 3;
  }
  // Alliens
  if (frameCount > 1200 && frameCount < 1300) {
    background(255);
    noStroke();
    fill(51, 255, 51);
    ellipse(300, allieny, 90, 120);
    //allieny = allieny -2;
    fill(0);
    ellipse(280, ojo1, ojito);
    ellipse(320, ojo1, ojito);
    //ojo1 = ojo1 -2;
    ellipse(300, bocay, 25);
    //bocay = bocay - 2;

    fill(51, 255, 51);
    ellipse(150, allieny, 90, 120);
    allieny = allieny - 3.7;
    fill(0);
    ellipse(130, ojo1, ojito);
    ellipse(170, ojo1, ojito);
    ojo1 = ojo1 - 3.7;
    ellipse(150, bocay, 25);
    bocay = bocay - 3.7;

    fill(51, 255, 51);
    ellipse(450, allieny, 90, 120);
    //allieny = allieny -4;
    fill(0);
    ellipse(430, ojo1, ojito);
    ellipse(470, ojo1, ojito);
    //ojo1 = ojo1 -4;
    ellipse(450, bocay, 25);
    //bocay = bocay - 4;
  }
  //TEXTO
  if (frameCount > 1450 && frameCount < 1600) {
    fill(0);
    noStroke();
    textSize(25);
    text('Hello human, welcome to the universe creation', 30, 350);
  }
  // TEXTO 2

  if (frameCount > 1600 && frameCount < 2000) {
    fill(0);
    rect(posyquad, 0, 10, 400);
    posyquad = posyquad + 2;
  }

  if (frameCount > 2000 && frameCount < 2400) {
    fill(255, 0, 0);
    textSize(80);
    text('THE END...', 50, 200);
  }
  if (frameCount > 2200 && frameCount < 2400) {
    fill(51, 255, 51);
    ellipse(500, allieny, 110, 140);
    //allieny = allieny -4;
    fill(0);
    ellipse(480, ojo1, ojito);
    ellipse(520, ojo1, ojito);
    //ojo1 = ojo1 -4;
    ellipse(500, bocay, 25);
    //bocay = bocay - 4;
  }
}