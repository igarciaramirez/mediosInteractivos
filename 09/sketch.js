// Estado 0 = Introducción
// Estado 1 = Nivel 1
// Estado 2 = Ganó
// Estado 3 = Perdió
var x, y; //variable para la posicion de la bola en x y en y;
var velx, vely; //variables para velocidad o cambio de posicion en el tiempo
var tam = 30; //variable tamaño de la elipse
var estado = 0;
var xi;
var yi;
var xii;
var yii;
var badbunny;

function preload (){
  badbunny = loadImage('mesh/bb.png');
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

}

function draw() {
  if (estado == 0) {
    background(255);
    noStroke();
    fill(0);
    text("Bienvenido", 150, 40);
    text("Ahora es su responsabilidad llevar a Badbunny", 60, 200);
    text("al final del laberinto para la creación de los temas", 55, 215);
    text("Presione la pantalla para empezar", 95, 500);

    //     if (mouseIsPressed) {
    //       estado = 1;
    //     }

    ///NIVEL UNO

  } else if (estado == 1) {
    background(255);
    fill(0);
    noStroke();

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
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);



    //imprime los valores de rotacion en X y en Y
    fill(255);
    noStroke();

    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse
    fill(0);
    strokeWeight(2);
    stroke(0);
    image (badbunny, x, y, tam, tam);


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
    }
    //PIERDES
    if (y > height / 2 && y < (height / 2) + 5) {
      if (x > xline && x < xline + (width - 50)) {
        estado = 5
      }
      if (x > xline + width && x < xline + (width * 2)) {
        estado = 5
      }
    }
  }

  ///NIVEL DOS
  else if (estado == 2) {
    background(0);
    fill(255);

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
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);



    //imprime los valores de rotacion en X y en Y
    fill(255);
    noStroke();


    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse

    fill(255);
    strokeWeight(2);
    stroke(255);
    image (badbunny,xi, yi, tam, tam);


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
    }
    //PIERDES

    if (yi > 150 && yi < 155) {
      if (xi > xlinei && xi < xlinei + (width - 50)) {
        estado = 5
      }
      if (xi > xlinei + width && xi < xlinei + (width * 2)) {
        estado = 5
      }
    }

    if (yi > 250 && yi < 255) {
      if (xi > xline1 && xi < xline1 + (width - 50)) {
        estado = 5
      }
      if (xi > xline1 + width && xi < xline1 + (width * 2)) {
        estado = 5
      }
    }

    if (yi > 350 && yi < 355) {
      if (xi > xline2 && xi < xline2 + (width - 50)) {
        estado = 5
      }
      if (xi > xline2 + width && xi < xline2 + (width * 2)) {
        estado = 5
      }
    }
  }

  //NIVEL TRES
  else if (estado == 3) {
    background(255, 0, 0);
    fill(255);

    //primera caja
    rect(windowWidth / 4 + 50, 0, 100, 5);
    rect(windowWidth / 4 + 50, 0, 5, 35);
    rect(windowWidth / 4 + 150, 0, 5, 35);
    rect(windowWidth / 4 + 50, 35, 25, 5);
    rect(windowWidth / 4 + 130, 35, 25, 5);

    //Laberinto

    rect(xline3, 150, width - 50, 5);
    rect(xline3 + width, 150, width, 5);

    rect(xline4, 220, width - 50, 5);
    rect(xline4 + width, 220, width, 5);

    rect(xline5, 290, width - 50, 5);
    rect(xline5 + width, 290, width, 5);

    rect(xline6, 360, width - 50, 5);
    rect(xline6 + width, 360, width, 5);

    rect(xline7, 430, width - 50, 5);
    rect(xline7 + width, 430, width, 5);


    //segunda caja
    rect(windowWidth / 4 + 50, windowHeight - 5, 100, 5);
    rect(windowWidth / 4 + 50, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 150, windowHeight - 35, 5, 35);
    rect(windowWidth / 4 + 50, windowHeight - 35, 25, 5);
    rect(windowWidth / 4 + 130, windowHeight - 35, 25, 5);



    //imprime los valores de rotacion en X y en Y
    fill(255);
    noStroke();


    //asigna valores a la velocidad de acuerdo a la rotación del dispositivo
    velx = map(rotationY, -90, 90, -5, 5);
    vely = map(rotationX, -90, 90, -5, 5);

    //pinta la elipse

    fill(255);
    strokeWeight(2);
    stroke(255);
    image (badbunny,xii, yii, tam, tam);


    //suma la velocidad en x y en y a las posiciones de la elipse
    xii = xii + velx;
    yii = yii + vely;

    //evita que las posiciones se salgan del canvas
    xii = constrain(xii, tam / 2, width - tam / 2);
    yii = constrain(yii, tam / 2, height - tam / 2);

    if (yii > 485) {
      if (xii > windowWidth / 4 + 50 && xii < windowWidth / 4 + 130)
        estado = 4
    }

    //PIERDES

    if (yii > 150 && yii < 155) {
      if (xii > xline3 && xii < xline3 + (width - 50)) {
        estado = 5
      }
      if (xii > xline3 + width && xii < xline3 + (width * 2)) {
        estado = 5
      }
    }

    if (yii > 220 && yii < 225) {
      if (xii > xline4 && xii < xline4 + (width - 50)) {
        estado = 5
      }
      if (xii > xline4 + width && xii < xline4 + (width * 2)) {
        estado = 5
      }
    }

    if (yii > 290 && yii < 295) {
      if (xii > xline5 && xii < xline5 + (width - 50)) {
        estado = 5
      }
      if (xii > xline5 + width && xii < xline5 + (width * 2)) {
        estado = 5
      }
    }
    if (yii > 360 && yii < 365) {
      if (xii > xline6 && xii < xline6 + (width - 50)) {
        estado = 5
      }
      if (xii > xline6 + width && xii < xline6 + (width * 2)) {
        estado = 5
      }
    }
    if (yii > 430 && yii < 435) {
      if (xii > xline7 && xii < xline7 + (width - 50)) {
        estado = 5
      }
      if (xii > xline7 + width && xii < xline7 + (width * 2)) {
        estado = 5
      }
    }

  }
  
  //GANAS
  
  else if (estado == 4){
     background(0);
    fill(255);
    noStroke();
    text("GANASTE", 150, 200);
    text("Presione la pantalla para volver empezar", 85, 500);

}

  ///PIERDES
  else if (estado == 5) {
    background(0);
    fill(255);
    text("PERDISTE", 150, 200);
    text("Presione la pantalla para volver empezar", 85, 500);

  }
}

function mouseReleased() {
  if (estado == 0) {
    estado = 1;
  }
  if (estado == 5) {
    estado = 0;
    x = 200;
    y = 20;
    xi = 200;
    yi = 20;
    xii =200;
    yii=20;
    xline = random(-width, 0);
  }
  if (estado == 4) {
    estado = 0;
    x = 200;
    y = 20;
    xi = 200;
    yi = 20;
    xii =200;
    yii=20;
    xline = random(-width, 0);
  }

}