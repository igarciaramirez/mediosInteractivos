var badbunnyb;
var benito;
var tam = 100;
var ozuna;
var anuel;

var miEjercito = [];
var miEjOzuna = [];
var miEjAnuel = [];

function preload() {
  badbunnyb = loadImage('assets/body.png');
  ozuna = loadImage('assets/ozuna.png');
  anuel = loadImage('assets/anuel.png');

}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);

  benito = new badbunny(150, 200);


  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(0, height);

    miEjercito[i] = new badbunny(tempX, tempY);
  }

  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(0, height);

    miEjOzuna[i] = new ozunap(tempX, tempY);
  }

  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width);
    var tempY = random(0, height);

    miEjAnuel[i] = new anuelp(tempX, tempY);
  }
}

function draw() {
  background(220);
  // badbunny(mouseX,mouseY);


  benito.dibujate();
  benito.muevete();



  for (var i = 0; i < miEjercito.length; i = i + 1) {
    miEjercito[i].dibujate();
    miEjercito[i].muevete();

    if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 20) {
      miEjercito[i].muerte();
    }
  }
  for (var i = 0; i < miEjOzuna.length; i = i + 1) {
    miEjOzuna[i].dibujate();
    miEjOzuna[i].muevete();

    if (dist(mouseX, mouseY, miEjOzuna[i].x, miEjOzuna[i].y) < 20) {
      miEjOzuna[i].muerte();
    }
  }
  for (var i = 0; i < miEjAnuel.length; i = i + 1) {
    miEjAnuel[i].dibujate();
    miEjAnuel[i].muevete();

    if (dist(mouseX, mouseY, miEjAnuel[i].x, miEjAnuel[i].y) < 20) {
      miEjAnuel[i].muerte();
    }
  }
}

function badbunny(miX, miY) {
  //caracteristicas
  this.x = miX;
  this.y = miY;
  this.realHastaLaMuerte = true;

  //habilidades
  this.dibujate = function() {
    if (this.realHastaLaMuerte == true) {

      image(badbunnyb, this.x, this.y, tam, tam);

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
    this.realHastaLaMuerte = false;
  }
}

function ozunap(miX, miY) {
  //caracteristicas
  this.x = miX;
  this.y = miY;
  this.realHastaLaMuerte = true;

  //habilidades
  this.dibujate = function() {
    if (this.realHastaLaMuerte == true) {

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
    this.realHastaLaMuerte = false;
  }

  function anuelp(miX, miY) {
    //caracteristicas
    this.x = miX;
    this.y = miY;
    this.realHastaLaMuerte = true;

    //habilidades
    this.dibujate = function() {
      if (this.realHastaLaMuerte == true) {

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
      this.realHastaLaMuerte = false;
    }
  }
}