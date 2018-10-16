//VARIABLE
var badbunny;
var ozuna;
var anuel;
var tX;
var tY;
var tam = 100;
var jbalvin;


//VARIABLES COMUNIDAD
var comBadbunny = [];
var comOzuna = [];
var comAnuel = [];
var comJbalvin = [];



function preload() {

  badbunny = loadImage('recursos/badbunny.png');
  ozuna = loadImage('recursos/ozuna.png');
  anuel = loadImage('recursos/anuelito.png');
  jBalvin = loadImage('recursos/jbalvin.png');

}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

  for (var i = 0; i < 15; i = i + 1) {
    var tX = random(0, width);
    var tY = random(0, height);

    comBadbunny[i] = new bb(tX, tY);
  }

  for (var i = 0; i < 15; i = i + 1) {
    var tX = random(0, width);
    var tY = random(0, height);

    comOzuna[i] = new o(tX, tY);
  }

  for (var i = 0; i < 15; i = i + 1) {
    var tX = random(0, width);
    var tY = random(0, height);

    comAnuel[i] = new a(tX, tY);
  }
  for (var i = 0; i < 15; i = i + 1) {
    var tX = random(0, width);
    var tY = random(0, height);

    comJbalvin[i] = new j(tX, tY);
  }


}

function draw() {
  background(220);
  for (var i = 0; i < comBadbunny.length; i = i + 1) {
    comBadbunny[i].dibujate();
    comBadbunny[i].muevete();

    if (dist(mouseX, mouseY, comBadbunny[i].x, comBadbunny[i].y) < 20) {
      comBadbunny[i].muerte();
    }
    if (dist(comOzuna[i].x, comOzuna[i].y, comBadbunny[i].x, comBadbunny[i].y) < 40) {
      comBadbunny[i].canta();
    }
  }
  for (var i = 0; i < comOzuna.length; i = i + 1) {
    comOzuna[i].dibujate();
    comOzuna[i].muevete();

    if (dist(mouseX, mouseY, comOzuna[i].x, comOzuna[i].y) < 20) {
      comOzuna[i].muerte();
    }
  }
  for (var i = 0; i < comAnuel.length; i = i + 1) {
    comAnuel[i].dibujate();
    comAnuel[i].muevete();

    if (dist(mouseX, mouseY, comAnuel[i].x, comAnuel[i].y) < 20) {
      comAnuel[i].muerte();
    }

  }
  for (var i = 0; i < comJbalvin.length; i = i + 1) {
    comJbalvin[i].dibujate();
    comJbalvin[i].muevete();

    if (dist(mouseX, mouseY, comJbalvin[i].x, comJbalvin[i].y) < 20) {
      comJbalvin[i].muerte();
    }
     if (dist(comAnuel[i].x, comAnuel[i].y, comJbalvin[i].x, comJbalvin[i].y) < 40) {
      comJbalvin[i].crece();
    }
  }

}

function bb(miX, miY) {

  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.real = true;

  //habilidades
  this.dibujate = function() {
    if (this.real == true) {
      image(badbunny, this.x, this.y, tam, tam);
    }
  }
  this.muevete = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crece = function() {
    tam = tam + random(-1, 1);
  }

  this.muerte = function() {
    this.real = false;
  }
  this.canta = function() {
    textSize(40);
    fill(250, 0, 0);
    text('Bad Bunny Babe', width / 2, height / 2);

  }
}

function o(miX, miY) {

  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.real = true;

  //habilidades
  this.dibujate = function() {
    if (this.real == true) {
      image(ozuna, this.x, this.y, tam, tam);
    }
  }
  this.muevete = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crece = function() {
    tam = tam + random(-1, 1);
  }

  this.muerte = function() {
    this.real = false;
  }
}

function a(miX, miY) {

  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.real = true;

  //habilidades
  this.dibujate = function() {
    if (this.real == true) {
      image(anuel, this.x, this.y, tam, tam);
    }
  }
  this.muevete = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crece = function() {
    tam = tam + random(-1, 1);
  }

  this.muerte = function() {
    this.real = false;
  }

}

function j(miX, miY) {

  // caracteristicas
  this.x = miX;
  this.y = miY;
  this.real = true;

  //habilidades
  this.dibujate = function() {
    if (this.real == true) {
      image(jBalvin, this.x, this.y, tam, tam);
    }
  }
  this.muevete = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crece = function() {
    tam = tam - 10;
  }

  
  this.muerte = function() {
    this.real = false;
  }
}
//iba a agregar mas cantantes pero la falta de capacidad de memoria
//del programa no me deja incluir mas archivos externos
//por ende se diferenciaran entre especies por tinte