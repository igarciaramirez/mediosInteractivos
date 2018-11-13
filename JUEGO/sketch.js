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

function preload() {
  badbunny = loadImage('mesh/bb.png');
  tebote = loadSound('canciones/TEBOTE.mp3');
  fondo = loadImage('mesh/1503487529.jpg');
  cetp = loadSound('canciones/cualestuplan.mp3');
  triste = loadSound('canciones/triste.mp3');
  original = loadSound('canciones/original.mp3');
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
  xline = random(-width, 0);
  //2a
  xlinei = random(-width, 0);
  xline1 = random(-width, 0);
  xline2 = random(-width, 0);
  //3a
  xline3 = random(-width, 0);
  xline4 = random(-width, 0);
  xline5 = random(-width, 0);
  xline6 = random(-width, 0);
  xline7 = random(-width, 0);
  //4a
  xline8 = random(-width, 0);
  xline9 = random(-width, 0);
  xline10 = random(-width, 0);
  xline11 = random(-width, 0);
  xline12 = random(-width, 0);
  xline13 = random(-width, 0);
  xline14 = random(-width, 0);
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

    //     if (mouseIsPressed) {
    //       estado = 1;
    //     }

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

    rect(xline, height / 2, width - 50, 5);
    rect(xline + width, height / 2, width, 5);

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
    x = constrain(x, tam / 2, width - tam / 2);
    y = constrain(y, tam / 2, height - tam / 2);

    //CAJA INVISIBLE QUE TOCA PARA CAMBIAR DE NIVEL
    if (y > 485) {
      if (x > windowWidth / 4 + 50 && x < windowWidth / 4 + 130)
        estado = 2
      original.play();
    }
    //PIERDES
    if (y > height / 2 && y < (height / 2) + 5) {
      if (x > xline && x < xline + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (x > xline + width && x < xline + (width * 2)) {
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

    rect(xlinei, 150, width - 50, 5);
    rect(xlinei + width, 150, width, 5);

    rect(xline1, 250, width - 50, 5);
    rect(xline1 + width, 250, width, 5);

    rect(xline2, 350, width - 50, 5);
    rect(xline2 + width, 350, width, 5);


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
    xi = constrain(xi, tam / 2, width - tam / 2);
    yi = constrain(yi, tam / 2, height - tam / 2);

    //GANAS
    if (yi > 485) {
      if (xi > windowWidth / 4 + 50 && xi < windowWidth / 4 + 130)
        estado = 3
      original.pause();
      tebote.play();

    }
    //PIERDES

    if (yi > 150 && yi < 155) {
      if (xi > xlinei && xi < xlinei + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xlinei + width && xi < xlinei + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yi > 250 && yi < 255) {
      if (xi > xline1 && xi < xline1 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xline1 + width && xi < xline1 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yi > 350 && yi < 355) {
      if (xi > xline2 && xi < xline2 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xi > xline2 + width && xi < xline2 + (width * 2)) {
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

    rect(xline3, 130, width - 50, 5);
    rect(xline3 + width, 130, width, 5);

    rect(xline4, 200, width - 50, 5);
    rect(xline4 + width, 200, width, 5);

    rect(xline5, 270, width - 50, 5);
    rect(xline5 + width, 270, width, 5);

    rect(xline6, 340, width - 50, 5);
    rect(xline6 + width, 340, width, 5);

    rect(xline7, 410, width - 50, 5);
    rect(xline7 + width, 410, width, 5);


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
    xii = constrain(xii, tam / 2, width - tam / 2);
    yii = constrain(yii, tam / 2, height - tam / 2);

    if (yii > 485) {
      if (xii > windowWidth / 4 + 50 && xii < windowWidth / 4 + 130)
        estado = 4
      tebote.pause();
      cetp.play();
    }

    //PIERDES

    if (yii > 130 && yii < 135) {
      if (xii > xline3 && xii < xline3 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline3 + width && xii < xline3 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yii > 200 && yii < 205) {
      if (xii > xline4 && xii < xline4 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline4 + width && xii < xline4 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yii > 270 && yii < 275) {
      if (xii > xline5 && xii < xline5 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline5 + width && xii < xline5 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yii > 340 && yii < 345) {
      if (xii > xline6 && xii < xline6 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline6 + width && xii < xline6 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yii > 410 && yii < 415) {
      if (xii > xline7 && xii < xline7 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xii > xline7 + width && xii < xline7 + (width * 2)) {
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

    rect(xline8, 80, width - 50, 5);
    rect(xline8 + width, 80, width, 5);

    rect(xline9, 140, width - 50, 5);
    rect(xline9 + width, 140, width, 5);

    rect(xline10, 200, width - 50, 5);
    rect(xline10 + width, 200, width, 5);

    rect(xline11, 260, width - 50, 5);
    rect(xline11 + width, 260, width, 5);

    rect(xline12, 320, width - 50, 5);
    rect(xline12 + width, 320, width, 5);

    rect(xline13, 380, width - 50, 5);
    rect(xline13 + width, 380, width, 5);

    rect(xline14, 440, width - 50, 5);
    rect(xline14 + width, 440, width, 5);


    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    text ("BENITO",175, 500);
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

    if (yiii > 485) {
      if (xiii > windowWidth / 4 + 50 && xiii < windowWidth / 4 + 130)
        estado = 6
      cetp.pause();
    }

    //PIERDES

    if (yiii > 80 && yiii < 85) {
      if (xiii > xline8 && xiii < xline8 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline8 + width && xiii < xline8 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yiii > 140 && yiii < 145) {
      if (xiii > xline9 && xiii < xline9 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline9 + width && xiii < xline9 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }

    if (yiii > 200 && yiii < 205) {
      if (xiii > xline10 && xiii < xline10 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline10 + width && xiii < xline10 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > 260 && yiii < 265) {
      if (xiii > xline11 && xiii < xline11 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline11 + width && xiii < xline11 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > 320 && yii < 325) {
      if (xiii > xline12 && xiii < xline12 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline12 + width && xiii < xline12 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > 380 && yii < 385) {
      if (xiii > xline13 && xiii < xline13 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline13 + width && xiii < xline13 + (width * 2)) {
        estado = 5
        triste.play();
      }
    }
    if (yiii > 440 && yii < 445) {
      if (xiii > xline14 && xiii < xline14 + (width - 50)) {
        estado = 5
        triste.play();
      }
      if (xiii > xline14 + width && xiii < xline14 + (width * 2)) {
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
    xline = random(-width, 0);
    xline1 = random(-width, 0);
    xline2 = random(-width, 0);
    xline3 = random(-width, 0);
    xline4 = random(-width, 0);
    xline5 = random(-width, 0);
    xline6 = random(-width, 0);
    xline7 = random(-width, 0);
    xline8 = random(-width, 0);
    xline9 = random(-width, 0);
    xline10 = random(-width, 0);
    xline11 = random(-width, 0);
    xline12 = random(-width, 0);
    xline13 = random(-width, 0);
    xline14 = random(-width, 0);
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
    xline = random(-width, 0);
    xline1 = random(-width, 0);
    xline2 = random(-width, 0);
    xline3 = random(-width, 0);
    xline4 = random(-width, 0);
    xline5 = random(-width, 0);
    xline6 = random(-width, 0);
    xline7 = random(-width, 0);
    xline8 = random(-width, 0);
    xline9 = random(-width, 0);
    xline10 = random(-width, 0);
    xline11 = random(-width, 0);
    xline12 = random(-width, 0);
    xline13 = random(-width, 0);
    xline14 = random(-width, 0);
  }
}