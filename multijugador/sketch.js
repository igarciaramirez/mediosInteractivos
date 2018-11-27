var x, y; //variable para la posicion de la bola en x y en y;
var velx, vely; //variables para velocidad o cambio de posicion en el tiempo
var tam = 30; //variable tamaño de la elipse
var estado = 0;
var xi;
var yi;
var xii;
var yii;
var badbunny;
var yiii;
var xiii;
var tebote;
var fondo;
var cetp;
var triste;
var original;
var tamobien;
var jugador1;
var posxj1 = 100
var posyj1 = 420
var tamj1 = 50
var jugador2;
var posxj2 = 200
var posyj2 = 420
var tamj2 = 50

function preload() {
  badbunny = loadImage('mesh/bb.png');
  tebote = loadSound('canciones/TEBOTE.mp3');
  fondo = loadImage('mesh/1503487529.jpg');
  cetp = loadSound('canciones/cualestuplan.mp3');
  triste = loadSound('canciones/triste.mp3');
  original = loadSound('canciones/original.mp3');
  tamobien = loadSound('canciones/estamosbien.mp3');
}


function setup() {
  //crea un canvas del tamano de la ventana
  createCanvas(windowWidth, windowHeight);

  //inicia las posiciones en el cemtro de la pantalla
  x = 200;
  y = 20;
  xi = 200;
  yi = 20;
  xii = 200;
  yii = 20;
  xiii = 200;
  yiii = 20;

  //la velocidad inicial es 0
  velx = 0;
  velY = 0;

  //1a
  xline = random(-windowWidth, 0);
  //2a
  xlinei = random(-windowWidth, 0);
  xline1 = random(-windowWidth, 0);
  xline2 = random(-windowWidth, 0);
  //3a
  xline3 = random(-windowWidth, 0);
  xline4 = random(-windowWidth, 0);
  xline5 = random(-windowWidth, 0);
  xline6 = random(-windowWidth, 0);
  xline7 = random(-windowWidth, 0);
  //4a
  xline8 = random(-windowWidth, 0);
  xline9 = random(-windowWidth, 0);
  xline10 = random(-windowWidth, 0);
  xline11 = random(-windowWidth, 0);
  xline12 = random(-windowWidth, 0);
  xline13 = random(-windowWidth, 0);
  xline14 = random(-windowWidth, 0);
}

function draw() {
  if (estado == 0) {
    background(255);
    noStroke();
    fill(0);
    text("Bienvenido", 150, 40);
    text("Ahora es su responsabilidad llevar a Badbunny", 60, 200);
    text("al final del laberinto para la creación de los temas", 55, 215);
    text("((Suba el volumen para una mejor experiencia))", 65, 380);
    text("Presione la pantalla para empezar", 95, 500);

    fill(255);
    rect(posxj1, posyj1, tamj1, 10);
    fill(0);
    text("Jugador 1", 100, 430);
    fill(255);
    rect(posxj2, posyj2, tamj2, 10);
    fill(0);
    text("Jugador 2", 200, 430);


    if (mouseIsPressed) {
      estado = 1;
      
    }

    ///NIVEL UNO

  } else if (estado == 1) {
    background(0);
    image(fondo, -100, 30, 584, 438);
    noStroke();
    fill(255, 222, 0);


    //primera caja
    rect(windowWidth / 4 + 50, 0, 100, 5);
    rect(windowWidth / 4 + 50, 0, 5, 35);
    rect(windowWidth / 4 + 150, 0, 5, 35);
    rect(windowWidth / 4 + 50, 35, 25, 5);
    rect(windowWidth / 4 + 130, 35, 25, 5);

    //Laberinto
    // rect(0, 250, 170, 5);
    // rect(220, 250, 250, 5);

    rect(xline, windowHeight / 2, windowWidth - 50, 5);
    rect(xline + windowWidth, windowHeight / 2, windowWidth, 5);

    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    text("ARCANGEL", 165, 500);
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse
    image(badbunny, x, y, tam, tam);

    //suma la velocidad en x y en y a las posiciones de la elipse
    x = x + velx;
    y = y + vely;

    //evita que las posiciones se salgan del canvas
    x = constrain(x, tam / 2, windowWidth - tam / 2);
    y = constrain(y, tam / 2, windowHeight - tam / 2);

    //CAJA INVISIBLE QUE TOCA PARA CAMBIAR DE NIVEL
    if (y > windowHeight - 50) {
      if (x > windowWidth / 4 + 50 && x < windowWidth / 4 + 130)
        estado = 2
      original.play();
    }
    //PIERDES
    if (y > windowHeight / 2 && y < (windowHeight / 2) + 5) {
      if (x > xline && x < xline + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (x > xline + windowWidth && x < xline + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
  }

  ///NIVEL DOS
  else if (estado == 2) {

    background(0);
    image(fondo, -100, 30, 584, 438);
    fill(255, 222, 0);
    noStroke();

    //primera caja
    rect(windowWidth / 4 + 50, 0, 100, 5);
    rect(windowWidth / 4 + 50, 0, 5, 35);
    rect(windowWidth / 4 + 150, 0, 5, 35);
    rect(windowWidth / 4 + 50, 35, 25, 5);
    rect(windowWidth / 4 + 130, 35, 25, 5);

    //Laberinto

    rect(xlinei, windowHeight / 3, windowWidth - 50, 5);
    rect(xlinei + windowWidth, windowHeight / 3, windowWidth, 5);

    rect(xline1, (windowHeight / 3) + 100, windowWidth - 50, 5);
    rect(xline1 + windowWidth, (windowHeight / 3) + 100, windowWidth, 5);

    rect(xline2, (windowHeight / 3) + 200, windowWidth - 50, 5);
    rect(xline2 + windowWidth, (windowHeight / 3) + 200, windowWidth, 5);


    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    text("NIO GARCIA", 160, 500);
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse
    image(badbunny, xi, yi, tam, tam);


    //suma la velocidad en x y en y a las posiciones de la elipse
    xi = xi + velx;
    yi = yi + vely;

    //evita que las posiciones se salgan del canvas
    xi = constrain(xi, tam / 2, windowWidth - tam / 2);
    yi = constrain(yi, tam / 2, windowHeight - tam / 2);

    //GANAS
    if (yi > windowHeight - 50) {
      if (xi > windowWidth / 4 + 50 && xi < windowWidth / 4 + 130)
        estado = 3
      original.pause();
      tebote.play();

    }
    //PIERDES

    if (yi > windowHeight / 3 && yi < (windowHeight / 3) + 5) {
      if (xi > xlinei && xi < xlinei + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xlinei + windowWidth && xi < xlinei + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yi > (windowHeight / 3) + 100 && yi < (windowHeight / 3) + 105) {
      if (xi > xline1 && xi < xline1 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xline1 + windowWidth && xi < xline1 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yi > (windowHeight / 3) + 200 && yi < (windowHeight / 3) + 205) {
      if (xi > xline2 && xi < xline2 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xline2 + windowWidth && xi < xline2 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
  }

  //NIVEL TRES
  else if (estado == 3) {
    background(0);
    image(fondo, -100, 30, 584, 438);
    fill(255, 222, 0);
    noStroke();

    //primera caja
    rect(windowWidth / 4 + 50, 0, 100, 5);
    rect(windowWidth / 4 + 50, 0, 5, 35);
    rect(windowWidth / 4 + 150, 0, 5, 35);
    rect(windowWidth / 4 + 50, 35, 25, 5);
    rect(windowWidth / 4 + 130, 35, 25, 5);

    //Laberinto

    rect(xline3, windowHeight / 5, windowWidth - 50, 5);
    rect(xline3 + width, windowHeight / 5, width, 5);

    rect(xline4, (windowHeight / 5) + 70, windowWidth - 50, 5);
    rect(xline4 + windowWidth, (windowHeight / 5) + 70, windowWidth, 5);

    rect(xline5, (windowHeight / 5) + 140, windowWidth - 50, 5);
    rect(xline5 + windowWidth, (windowHeight / 5) + 140, windowWidth, 5);

    rect(xline6, (windowHeight / 5) + 210, windowWidth - 50, 5);
    rect(xline6 + windowWidth, (windowHeight / 5) + 210, windowWidth, 5);

    rect(xline7, (windowHeight / 5) + 280, windowWidth - 50, 5);
    rect(xline7 + windowWidth, (windowHeight / 5) + 280, windowWidth, 5);


    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    text("ÑEJO", 180, 500);
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse
    image(badbunny, xii, yii, tam, tam);


    //suma la velocidad en x y en y a las posiciones de la elipse
    xii = xii + velx;
    yii = yii + vely;

    //evita que las posiciones se salgan del canvas
    xii = constrain(xii, tam / 2, windowWidth - tam / 2);
    yii = constrain(yii, tam / 2, windowHeight - tam / 2);

    if (yii > windowHeight - 50) {
      if (xii > windowWidth / 4 + 50 && xii < windowWidth / 4 + 130)
        estado = 4
      tebote.pause();
      cetp.play();
    }

    //PIERDES

    if (yii > windowHeight / 5 && yii < (windowHeight / 5) + 5) {
      if (xii > xline3 && xii < xline3 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline3 + windowWidth && xii < xline3 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yii > (windowHeight / 5) + 70 && yii < (windowHeight / 5) + 75) {
      if (xii > xline4 && xii < xline4 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline4 + windowWidth && xii < xline4 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yii > (windowHeight / 5) + 140 && yii < (windowHeight / 5) + 145) {
      if (xii > xline5 && xii < xline5 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline5 + windowWidth && xii < xline5 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yii > (windowHeight / 5) + 210 && yii < (windowHeight / 5) + 215) {
      if (xii > xline6 && xii < xline6 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline6 + windowWidth && xii < xline6 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yii > (windowHeight / 5) + 280 && yii < (windowHeight / 5) + 285) {
      if (xii > xline7 && xii < xline7 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline7 + windowWidth && xii < xline7 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
  }
  //NIVEL CUATRO
  else if (estado == 4) {
    background(0);
    image(fondo, -100, 30, 584, 438);
    fill(255, 222, 0);
    noStroke();

    //primera caja
    rect(windowWidth / 4 + 50, 0, 100, 5);
    rect(windowWidth / 4 + 50, 0, 5, 35);
    rect(windowWidth / 4 + 150, 0, 5, 35);
    rect(windowWidth / 4 + 50, 35, 25, 5);
    rect(windowWidth / 4 + 130, 35, 25, 5);

    //Laberinto

    rect(xline8, windowHeight / 7, windowWidth - 50, 5);
    rect(xline8 + windowWidth, windowHeight / 7, windowWidth, 5);

    rect(xline9, (windowHeight / 7) + 60, windowWidth - 50, 5);
    rect(xline9 + width, (windowHeight / 7) + 60, width, 5);

    rect(xline10, (windowHeight / 7) + 120, windowWidth - 50, 5);
    rect(xline10 + windowWidth, (windowHeight / 7) + 120, windowWidth, 5);

    rect(xline11, (windowHeight / 7) + 180, windowWidth - 50, 5);
    rect(xline11 + windowWidth, (windowHeight / 7) + 180, windowWidth, 5);

    rect(xline12, (windowHeight / 7) + 240, windowWidth - 50, 5);
    rect(xline12 + windowWidth, (windowHeight / 7) + 240, windowWidth, 5);

    rect(xline13, (windowHeight / 7) + 300, windowWidth - 50, 5);
    rect(xline13 + windowWidth, (windowHeight / 7) + 300, windowWidth, 5);

    rect(xline14, (windowHeight / 7) + 360, windowWidth - 50, 5);
    rect(xline14 + windowWidth, (windowHeight / 7) + 360, windowWidth, 5);


    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    text("BENITO", 175, 500);
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse
    image(badbunny, xiii, yiii, tam, tam);


    //suma la velocidad en x y en y a las posiciones de la elipse
    xiii = xiii + velx;
    yiii = yiii + vely;

    //evita que las posiciones se salgan del canvas
    xiii = constrain(xiii, tam / 2, width - tam / 2);
    yiii = constrain(yiii, tam / 2, height - tam / 2);

    if (yiii > windowHeight - 50) {
      if (xiii > windowWidth / 4 + 50 && xiii < windowWidth / 4 + 130)
        estado = 6
      cetp.pause();
      tamobien.play();
    }

    //PIERDES

    if (yiii > windowHeight / 7 && yiii < (windowHeight / 7) + 5) {
      if (xiii > xline8 && xiii < xline8 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline8 + windowWidth && xiii < xline8 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yiii > (windowHeight / 7) + 60 && yiii < (windowHeight / 7) + 65) {
      if (xiii > xline9 && xiii < xline9 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline9 + windowWidth && xiii < xline9 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yiii > (windowHeight / 7) + 120 && yiii < (windowHeight / 7) + 125) {
      if (xiii > xline10 && xiii < xline10 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline10 + windowWidth && xiii < xline10 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > (windowHeight / 7) + 180 && yiii < (windowHeight / 7) + 185) {
      if (xiii > xline11 && xiii < xline11 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline11 + windowWidth && xiii < xline11 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > (windowHeight / 7) + 240 && yii < (windowHeight / 7) + 245) {
      if (xiii > xline12 && xiii < xline12 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline12 + windowWidth && xiii < xline12 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > (windowHeight / 7) + 300 && yii < (windowHeight / 7) + 305) {
      if (xiii > xline13 && xiii < xline13 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline13 + windowWidth && xiii < xline13 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > (windowHeight / 7) + 360 && yii < (windowHeight / 7) + 365) {
      if (xiii > xline14 && xiii < xline14 + (windowWidth - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline14 + windowWidth && xiii < xline14 + (windowWidth * 2)) {
        estado = 5
        triste.play();
      }
    }
  }

  //GANAS
  else if (estado == 6) {
    background(0);
    fill(255);
    noStroke();
    text("GANASTE", 155, 200);
    text("tu tiempo" + second(), (windowWidth / 2) - 50, 300);
    second.stop();
    text("Presione la pantalla para volver empezar", 85, 500);

  }

  ///PIERDES
  else if (estado == 5) {
    cetp.pause();
    tebote.pause();
    original.pause();
    background(0);
    fill(255);
    text("PERDISTE", 155, 200);
    text("TURNO DEL JUGADOR 2", 120, 300);
    text("Presione la pantalla para volver empezar", 85, 500);

  }
}



function mouseReleased() {
  if (estado == 0) {
    estado = 1;
  }
  if (estado == 6) {
    estado = 0;
    x = 200;
    y = 20;
    xi = 200;
    yi = 20;
    xii = 200;
    yii = 20;
    xiii = 200;
    yiii = 20;
    tamobien.pause();
    xline = random(-windowWidth, 0);
    xline1 = random(-windowWidth, 0);
    xline2 = random(-windowWidth, 0);
    xline3 = random(-windowWidth, 0);
    xline4 = random(-windowWidth, 0);
    xline5 = random(-windowWidth, 0);
    xline6 = random(-windowWidth, 0);
    xline7 = random(-windowWidth, 0);
    xline8 = random(-windowWidth, 0);
    xline9 = random(-windowWidth, 0);
    xline10 = random(-windowWidth, 0);
    xline11 = random(-windowWidth, 0);
    xline12 = random(-windowWidth, 0);
    xline13 = random(-windowWidth, 0);
    xline14 = random(-windowWidth, 0);
second = 0;
  }
  if (estado == 5) {
    estado = 0;
    x = 200;
    y = 20;
    xi = 200;
    yi = 20;
    xii = 200;
    yii = 20;
    xiii = 200;
    yiii = 20;
    triste.pause();
    xline = random(-windowWidth, 0);
    xline1 = random(-windowWidth, 0);
    xline2 = random(-windowWidth, 0);
    xline3 = random(-windowWidth, 0);
    xline4 = random(-windowWidth, 0);
    xline5 = random(-windowWidth, 0);
    xline6 = random(-windowWidth, 0);
    xline7 = random(-windowWidth, 0);
    xline8 = random(-windowWidth, 0);
    xline9 = random(-windowWidth, 0);
    xline10 = random(-windowWidth, 0);
    xline11 = random(-windowWidth, 0);
    xline12 = random(-windowWidth, 0);
    xline13 = random(-windowWidth, 0);
    xline14 = random(-windowWidth, 0);
  }
}