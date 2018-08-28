// Variables primer conjunto de triangulos NEGROS
var xn = 20;
var xn2 = 30;
// Variables primer conjunto de triangulos BLANCOS
var xb = 40;
var xb2 = 50;
var xbb = 80;
var xbb2 = 90;
// Variables segundo conjunto de triangulos NEGROS
var xnn = 40;
var xnn2 = 50;
var xnnn = 80;
var xnnn2 = 90;

function setup() {
  createCanvas(260, 180);
  background(250);
  noStroke(0);
  // Codigo patron de triangulos 1
  // Configuracion primer conjunto de triangulos NEGROS

  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 100; i = i + 10) {
    fill(0);
    triangle(xn, 30, xn2, 30, xn, 20);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  // Configuracion primer conjunto de triangulos BLANCOS
  xb = 40;
  xb2 = 50;
  xbb = 80;
  xbb2 = 90;
  for (var i = 40; i < 60; i = i + 10) {
    fill(250);
    triangle(xb, 20, xb2, 30, xb, 30);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  for (var i = 80; i < 100; i = i + 10) {
    fill(250);
    triangle(xbb, 30, xbb2, 30, xbb, 20);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  // Configuracion segundo conjunto de triangulos NEGROS
  xnn = 40;
  xnn2 = 50;
  xnnn = 80;
  xnnn2 = 90;
  for (var i = 40; i < 60; i = i + 10) {
    fill(0);
    noStroke();
    triangle(xnn, 20, xnn2, 20, xnn2, 30);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  for (var i = 80; i < 100; i = i + 10) {
    fill(0);
    noStroke();
    triangle(xnnn, 20, xnnn2, 20, xnnn2, 30);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }

  // Sengunda linea
  fill(0);
  noStroke();
  triangle(20, 40, 30, 40, 20, 30);

  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    fill(0);
    triangle(xn, 40, xn2, 40, xn, 30);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(90, 40, 100, 40, 90, 30);
  xnnn = 30;
  xnnn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn2, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 70;
  xnnn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn2, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Tercera linea
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 20;
  xnnn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn2, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 60;
  xnnn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn2, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // cuarta linea
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    fill(0);
    triangle(xn, 60, xn2, 60, xn, 50);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    fill(0);
    triangle(xn, 60, xn2, 60, xn, 50);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 20;
  xnnn2 = 30;
  for (var i = 20; i < 30; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 50;
  xnnn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 90;
  xnnn2 = 100;
  for (var i = 90; i < 100; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Quinta Linea
  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 100; i = i + 10) {
    fill(0);
    triangle(xn, 70, xn2, 70, xn, 60);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xb = 40;
  xb2 = 50;
  xbb = 80;
  xbb2 = 90;
  for (var i = 40; i < 60; i = i + 10) {
    fill(250);
    triangle(xb, 60, xb2, 70, xb, 70);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  for (var i = 80; i < 100; i = i + 10) {
    fill(250);
    triangle(xbb, 70, xbb2, 70, xbb, 60);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  xnn = 40;
  xnn2 = 50;

  for (var i = 40; i < 60; i = i + 10) {
    fill(0);
    triangle(xnn, 60, xnn2, 60, xnn2, 70);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  xnnn = 80;
  xnnn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    fill(0);
    triangle(xnnn, 60, xnnn2, 60, xnnn2, 70);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  //Sexta linea
  fill(0);
  triangle(20, 80, 30, 80, 20, 70);

  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    fill(0);
    triangle(xn, 80, xn2, 80, xn, 70);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(90, 80, 100, 80, 90, 70);
  xnnn = 30;
  xnnn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn2, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 70;
  xnnn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn2, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  //Septima Linea
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 20;
  xnnn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn2, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 60;
  xnnn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn2, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Octava linea
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    fill(0);
    triangle(xn, 100, xn2, 100, xn, 90);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    fill(0);
    triangle(xn, 100, xn2, 100, xn, 90);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 20;
  xnnn2 = 30;
  for (var i = 20; i < 30; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 50;
  xnnn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 90;
  xnnn2 = 100;
  for (var i = 90; i < 100; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
    xnnn2 = xnnn2 + 10;
  }

  // SEGUNDO CUADRADO DE TRIANGULOS EJE X
  // Configuracion primer conjunto de triangulos NEGROS
  xn = 100;
  xn2 = 110;
  for (var i = 100; i < 180; i = i + 10) {
    fill(0);
    triangle(xn, 30, xn2, 30, xn2, 20);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  // Configuracion primer conjunto de triangulos BLANCOS
  xb = 120;
  xb2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(255);
    triangle(xb, 30, xb2, 30, xb2, 20);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  xbb = 160;
  xbb2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(250);
    triangle(xbb, 30, xbb2, 30, xbb2, 20);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  // Configuracion segundo conjunto de triangulos NEGROS
  xnn = 120;
  xnn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(0);
    triangle(xnn, 20, xnn2, 20, xnn, 30);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  xnnn = 160;
  xnnn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(0);
    triangle(xnnn, 20, xnnn2, 20, xnnn, 30);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Segunda linea
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    fill(0);
    triangle(xn, 40, xn2, 40, xn2, 30);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    fill(0);
    triangle(xn, 40, xn2, 40, xn2, 30);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 100;
  xnnn2 = 110;
  for (var i = 100; i < 110; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 130;
  xnnn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 170;
  xnnn2 = 180;
  for (var i = 170; i < 180; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Tercera Linea
  xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn2, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn2, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 100;
  xnnn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 140;
  xnnn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Cuarta Linea
  fill(0);
  triangle(100, 60, 110, 60, 110, 50);

  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    fill(0);
    triangle(xn, 60, xn2, 60, xn2, 50);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(170, 60, 180, 60, 180, 50);

  xnnn = 110;
  xnnn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 150;
  xnnn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Quinta linea
  xn = 100;
  xn2 = 110;
  for (var i = 100; i < 180; i = i + 10) {
    fill(0);
    triangle(xn, 70, xn2, 70, xn2, 60);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xb = 120;
  xb2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(255);
    triangle(xb, 70, xb2, 70, xb2, 60);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  xbb = 160;
  xbb2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(250);
    triangle(xbb, 70, xbb2, 70, xbb2, 60);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  xnn = 120;
  xnn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(0);
    triangle(xnn, 60, xnn2, 60, xnn, 70);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  xnnn = 160;
  xnnn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(0);
    triangle(xnnn, 60, xnnn2, 60, xnnn, 70);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // sexta linea
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    fill(0);
    triangle(xn, 80, xn2, 80, xn2, 70);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    fill(0);
    triangle(xn, 80, xn2, 80, xn2, 70);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 100;
  xnnn2 = 110;
  for (var i = 100; i < 110; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 130;
  xnnn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 170;
  xnnn2 = 180;
  for (var i = 170; i < 180; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Septima Linea
  xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn2, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn2, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 100;
  xnnn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 140;
  xnnn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Octava linea
  fill(0);
  triangle(100, 100, 110, 100, 110, 90);

  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    fill(0);
    triangle(xn, 100, xn2, 100, xn2, 90);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(170, 100, 180, 100, 180, 90);

  xnnn = 110;
  xnnn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 150;
  xnnn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Configuración triangulos 3 cuadrado eje x
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 260; i = i + 10) {
    fill(0);
    triangle(xn, 30, xn2, 30, xn, 20);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xb = 200;
  xb2 = 210;
  for (var i = 40; i < 60; i = i + 10) {
    fill(250);
    triangle(xb, 20, xb2, 30, xb, 30);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  xbb = 240;
  xbb2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    fill(250);
    triangle(xbb, 30, xbb2, 30, xbb, 20);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  xnn = 200;
  xnn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    fill(0);
    triangle(xnn, 20, xnn2, 20, xnn2, 30);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  xnnn = 240;
  xnnn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    fill(0);
    triangle(xnnn, 20, xnnn2, 20, xnnn2, 30);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Segunda linea
  fill(0);
  triangle(180, 40, 190, 40, 180, 30);

  xn = 210;
  xn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    fill(0);
    triangle(xn, 40, xn2, 40, xn, 30);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(250, 40, 260, 40, 250, 30);

  xnnn = 190;
  xnnn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn2, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 230;
  xnnn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    fill(0);
    triangle(xnnn, 30, xnnn2, 30, xnnn2, 40);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Tercera linea
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    fill(0);
    triangle(xn, 50, xn2, 50, xn, 40);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 180;
  xnnn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn2, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 220;
  xnnn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    fill(0);
    triangle(xnnn, 40, xnnn2, 40, xnnn2, 50);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Cuarta linea
  xn = 190;
  xn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    fill(0);
    triangle(xn, 60, xn2, 60, xn, 50);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    fill(0);
    triangle(xn, 60, xn2, 60, xn, 50);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 180;
  xnnn2 = 190;
  for (var i = 180; i < 190; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 210;
  xnnn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 250;
  xnnn2 = 260;
  for (var i = 250; i < 260; i = i + 10) {
    fill(0);
    triangle(xnnn, 50, xnnn2, 50, xnnn2, 60);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Quinta linea
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 260; i = i + 10) {
    fill(0);
    triangle(xn, 70, xn2, 70, xn, 60);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xb = 200;
  xb2 = 210;
  xbb = 240;
  xbb2 = 250;
  for (var i = 200; i < 220; i = i + 10) {
    fill(250);
    triangle(xb, 60, xb2, 70, xb, 70);
    xb = xb + 10;
    xb2 = xb2 + 10;
  }
  for (var i = 240; i < 260; i = i + 10) {
    fill(250);
    triangle(xbb, 70, xbb2, 70, xbb, 60);
    xbb = xbb + 10;
    xbb2 = xbb2 + 10;
  }
  xnn = 200;
  xnn2 = 210;

  for (var i = 200; i < 220; i = i + 10) {
    fill(0);
    triangle(xnn, 60, xnn2, 60, xnn2, 70);
    xnn = xnn + 10;
    xnn2 = xnn2 + 10;
  }
  xnnn = 240;
  xnnn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    fill(0);
    triangle(xnnn, 60, xnnn2, 60, xnnn2, 70);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Sexta linea
  fill(0);
  triangle(180, 80, 190, 80, 180, 70);

  xn = 210;
  xn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    fill(0);
    triangle(xn, 80, xn2, 80, xn, 70);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  fill(0);
  triangle(250, 80, 260, 80, 250, 70);
  xnnn = 190;
  xnnn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn2, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 230;
  xnnn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    fill(0);
    triangle(xnnn, 70, xnnn2, 70, xnnn2, 80);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  //septima linea
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    fill(0);
    triangle(xn, 90, xn2, 90, xn, 80);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 180;
  xnnn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn2, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 220;
  xnnn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    fill(0);
    triangle(xnnn, 80, xnnn2, 80, xnnn2, 90);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Octava linea
  xn = 190;
  xn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    fill(0);
    triangle(xn, 100, xn2, 100, xn, 90);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    fill(0);
    triangle(xn, 100, xn2, 100, xn, 90);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xnnn = 180;
  xnnn2 = 190;
  for (var i = 180; i < 190; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 210;
  xnnn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
  }
  xnnn = 250;
  xnnn2 = 260;
  for (var i = 250; i < 260; i = i + 10) {
    fill(0);
    triangle(xnnn, 90, xnnn2, 90, xnnn2, 100);
    xnnn = xnnn + 10;
    xnnn2 = xnnn2 + 10;
    xnnn2 = xnnn2 + 10;
  }
  // Primer cuadro y2 x2
  triangle(20, 100, 30, 100, 20, 110);
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    triangle(xn, 110, xn2, 100, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    triangle(xn, 110, xn2, 100, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    triangle(xn, 100, xn2, 100, xn, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(90, 100, 100, 100, 90, 110);

  // Segunda linea
  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    triangle(xn, 110, xn2, 110, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    triangle(xn, 120, xn2, 110, xn2, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 60;
  xn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    triangle(xn, 110, xn2, 110, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    triangle(xn, 120, xn2, 110, xn2, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Tercera Linea
  triangle(20, 130, 30, 130, 30, 120);
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    triangle(xn, 120, xn2, 120, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    triangle(xn, 130, xn2, 120, xn2, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    triangle(xn, 120, xn2, 120, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(90, 130, 100, 130, 100, 120);

  // Cuarta linea
  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    triangle(xn, 140, xn2, 130, xn2, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    triangle(xn, 130, xn2, 130, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 60;
  xn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    triangle(xn, 140, xn2, 130, xn2, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    triangle(xn, 130, xn2, 130, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Quinta linea
  triangle(20, 140, 30, 140, 20, 150);
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    triangle(xn, 150, xn2, 140, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    triangle(xn, 150, xn2, 140, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    triangle(xn, 140, xn2, 140, xn, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(90, 140, 100, 140, 90, 150);

  // Sexta linea
  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    triangle(xn, 150, xn2, 150, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    triangle(xn, 160, xn2, 150, xn2, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 60;
  xn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    triangle(xn, 150, xn2, 150, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    triangle(xn, 160, xn2, 150, xn2, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Septima linea
  triangle(20, 170, 30, 170, 30, 160);
  xn = 30;
  xn2 = 40;
  for (var i = 30; i < 50; i = i + 10) {
    triangle(xn, 160, xn2, 160, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 50;
  xn2 = 60;
  for (var i = 50; i < 70; i = i + 10) {
    triangle(xn, 170, xn2, 160, xn2, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 70;
  xn2 = 80;
  for (var i = 70; i < 90; i = i + 10) {
    triangle(xn, 160, xn2, 160, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(90, 170, 100, 160, 100, 170);

  // Octava Linea
  xn = 20;
  xn2 = 30;
  for (var i = 20; i < 40; i = i + 10) {
    triangle(xn, 180, xn2, 170, xn2, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 40;
  xn2 = 50;
  for (var i = 40; i < 60; i = i + 10) {
    triangle(xn, 170, xn2, 170, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 60;
  xn2 = 70;
  for (var i = 60; i < 80; i = i + 10) {
    triangle(xn, 180, xn2, 170, xn2, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 80;
  xn2 = 90;
  for (var i = 80; i < 100; i = i + 10) {
    triangle(xn, 170, xn2, 170, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // SEGUNDO CUADRADO EJE Y2
  fill(255, 213, 0);
  triangle(100, 100, 110, 110, 100, 110);
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    triangle(xn2, 110, xn2, 100, xn, 100);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    triangle(xn, 100, xn2, 110, xn2, 100);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    triangle(xn, 100, xn2, 110, xn, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(170, 100, 180, 110, 170, 110);
  
  // Segunda Linea
xn = 100;
  xn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    triangle(xn, 110, xn2, 120, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
   xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    triangle(xn, 110, xn2, 120, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 140;
  xn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    triangle(xn, 110, xn2, 120, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
   xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    triangle(xn, 110, xn2, 120, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  
  // Tercera Linea
  triangle (100,120,110,120,110,130);
  
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    triangle(xn, 120, xn2, 130, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    triangle(xn, 120, xn2, 130, xn2, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    triangle(xn, 120, xn2, 130, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle (170,120,180,120,180,130);
  
  // Cuarta Linea
  
xn = 100;
  xn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    triangle(xn, 140, xn2, 140, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    triangle(xn, 130, xn2, 140, xn2, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 140;
  xn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    triangle(xn, 130, xn2, 140, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    triangle(xn, 130, xn2, 140, xn2, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  
  // Quinta Linea
  fill(255, 213, 0);
  triangle(100, 140, 110, 150, 100, 150);
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    triangle(xn2, 150, xn2, 140, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    triangle(xn, 140, xn2, 150, xn2, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    triangle(xn, 140, xn2, 150, xn, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(170, 140, 180, 150, 170, 150);
  
  // Sexta linea
  xn = 100;
  xn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    triangle(xn, 150, xn2, 160, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
   xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    triangle(xn, 150, xn2, 160, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 140;
  xn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    triangle(xn, 150, xn2, 160, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
   xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    triangle(xn, 150, xn2, 160, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  
  // Septima Linea
  
   triangle (100,160,110,160,110,170);
  
  xn = 110;
  xn2 = 120;
  for (var i = 110; i < 130; i = i + 10) {
    triangle(xn, 160, xn2, 170, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 130;
  xn2 = 140;
  for (var i = 130; i < 150; i = i + 10) {
    triangle(xn, 160, xn2, 170, xn2, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 150;
  xn2 = 160;
  for (var i = 150; i < 170; i = i + 10) {
    triangle(xn, 160, xn2, 170, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle (170,160,180,160,180,170);
  
  // Octava linea
  
xn = 100;
  xn2 = 110;
  for (var i = 100; i < 120; i = i + 10) {
    triangle(xn, 170, xn2, 180, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 120;
  xn2 = 130;
  for (var i = 120; i < 140; i = i + 10) {
    triangle(xn, 170, xn2, 180, xn2, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 140;
  xn2 = 150;
  for (var i = 140; i < 160; i = i + 10) {
    triangle(xn, 170, xn2, 180, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 160;
  xn2 = 170;
  for (var i = 160; i < 180; i = i + 10) {
    triangle(xn, 170, xn2, 180, xn2, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  
  // TERCER CUADRADO EN Y2
   triangle(180, 100, 190, 100, 180, 110);
  xn = 190;
  xn2 = 200;
  for (var i = 30; i < 50; i = i + 10) {
    triangle(xn, 110, xn2, 100, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 70; i < 90; i = i + 10) {
    triangle(xn, 110, xn2, 100, xn2, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 210;
  xn2 = 220;
  for (var i = 50; i < 70; i = i + 10) {
    triangle(xn, 100, xn2, 100, xn, 110);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(250, 100, 260, 100, 250, 110);

  // Segunda linea
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    triangle(xn, 110, xn2, 110, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    triangle(xn, 120, xn2, 110, xn2, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 220;
  xn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    triangle(xn, 110, xn2, 110, xn, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    triangle(xn, 120, xn2, 110, xn2, 120);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Tercera Linea
  triangle(180, 130, 190, 130, 190, 120);
  xn = 190;
  xn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    triangle(xn, 120, xn2, 120, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 210;
  xn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    triangle(xn, 130, xn2, 120, xn2, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    triangle(xn, 120, xn2, 120, xn, 130);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(250, 130, 260, 130, 250, 120);

  // Cuarta linea
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    triangle(xn, 140, xn2, 130, xn2, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    triangle(xn, 130, xn2, 130, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 220;
  xn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    triangle(xn, 140, xn2, 130, xn2, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    triangle(xn, 130, xn2, 130, xn, 140);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Quinta linea
  triangle(180, 140, 190, 140, 180, 150);
  xn = 190;
  xn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    triangle(xn, 150, xn2, 140, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    triangle(xn, 150, xn2, 140, xn2, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 210;
  xn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    triangle(xn, 140, xn2, 140, xn, 150);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(250, 140, 260, 140, 250, 150);

  // Sexta linea
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    triangle(xn, 150, xn2, 150, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    triangle(xn, 160, xn2, 150, xn2, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 220;
  xn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    triangle(xn, 150, xn2, 150, xn, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    triangle(xn, 160, xn2, 150, xn2, 160);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  // Septima linea
  triangle(180, 170, 190, 170, 190, 160);
  xn = 190;
  xn2 = 200;
  for (var i = 190; i < 210; i = i + 10) {
    triangle(xn, 160, xn2, 160, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 210;
  xn2 = 220;
  for (var i = 210; i < 230; i = i + 10) {
    triangle(xn, 170, xn2, 160, xn2, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 230;
  xn2 = 240;
  for (var i = 230; i < 250; i = i + 10) {
    triangle(xn, 160, xn2, 160, xn, 170);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  triangle(250, 170, 260, 160, 260, 170);

  // Octava Linea
  xn = 180;
  xn2 = 190;
  for (var i = 180; i < 200; i = i + 10) {
    triangle(xn, 180, xn2, 170, xn2, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 200;
  xn2 = 210;
  for (var i = 200; i < 220; i = i + 10) {
    triangle(xn, 170, xn2, 170, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 220;
  xn2 = 230;
  for (var i = 220; i < 240; i = i + 10) {
    triangle(xn, 180, xn2, 170, xn2, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }
  xn = 240;
  xn2 = 250;
  for (var i = 240; i < 260; i = i + 10) {
    triangle(xn, 170, xn2, 170, xn, 180);
    xn = xn + 10;
    xn2 = xn2 + 10;
  }

  
}