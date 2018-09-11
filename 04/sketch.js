// Variables

var tam = 10
var herSelec = 0
var col = 0
var col1 = 0
var col2 = 0


// COLORES

var posxblanco = 0
var posyblanco = 20
var tamblanco = 10

var posxnegro = 20
var posynegro = 20
var tamnegro = 10

var posxrojo = 40
var posyrojo = 20
var tamrojo = 10

var posxnaranja = 60
var posynaranja = 20
var tamnaranja = 10

var posxamarillo = 80
var posyamarillo = 20
var tamamarillo = 10

var posxverde = 100
var posyverde = 20
var tamverde = 10

var posxaguam = 120
var posyaguam = 20
var tamaguam = 10

var posxazul = 140
var posyazul = 20
var tamazul = 10

var posxmorado = 160
var posymorado = 20
var tammorado = 10

var posxrosa = 180
var posyrosa = 20
var tamrosa = 10

//HERRAMIENTAS

var posxellipse = 0
var posyellipse = 50
var tamellipse = 10

var posxsquare = 20
var posysquare = 50
var tamsquare = 10

var posxline = 40
var posyline = 50
var tamline = 10

var posxtam =0
var posytam = 70
var tamtam =10

var posxred = 20
var posyred = 70
var tamred = 10

var posxtriangle = 40
var posytriangle =70
var tamtriangle = 10

var posxlineados = 0
var posylineados = 90
var tamlineados = 10

var posxlinea = 20
var posylinea = 90
var tamlinea =10

var posxsmile = 40
var posysmile = 90
var tamsmile = 10

var posxalien = 0
var posyalien = 110
var tamalien = 10

var posxice = 20
var posyice = 110
var tamice =10

var posxflor = 40
var posyflor = 110
var tamflor = 10


// CLEAR ALL SAVE

var posxclear = 0
var posyclear = 140
var tamclear = 10

var posxsave = 40
var posysave = 140
var tamsave = 10



function setup() {
  createCanvas(1000, 900);
  background(255);

}

function draw() {

  
  // Int. botones
  fill(0);
  stroke(0);

  //BOTONES COLORES
  text("Colores", 0, 15, 10);
  fill(255);
  rect(posxblanco, posyblanco, tamblanco, tamblanco);
  fill(0);
  rect(posxnegro, posynegro, tamnegro, tamnegro);
  fill(255, 0, 0);
  rect(posxrojo, posyrojo, tamrojo, tamrojo);
  fill(255, 128, 0);
  rect(posxnaranja, posynaranja, tamnaranja, tamnaranja);
  fill(255, 255, 0);
  rect(posxamarillo, posyamarillo, tamamarillo, tamamarillo);
  fill(0, 255, 0);
  rect(posxverde, posyverde, tamverde, tamverde);
  fill(0, 255, 205);
  rect(posxaguam, posyaguam, tamaguam, tamaguam);
  fill(0, 128, 255);
  rect(posxazul, posyazul, tamazul, tamazul);
  fill(172, 0, 206);
  rect(posxmorado, posymorado, tammorado, tammorado);
  fill(255, 153, 153);
  rect(posxrosa, posyrosa, tamrosa, tamrosa);

  //BOTONES HERRAMIENTAS
  fill(0);
  text("Pinceles", 0, 45, 10);

  fill(255);
  
  rect(posxellipse, posyellipse, tamellipse, tamellipse);
  ellipse(5.5, 55, 5, 5);
  
  rect(posxsquare, posysquare, tamsquare, tamsquare);
  rect(22.5, 52.5, 5, 5);
  
  rect(posxline, posyline, tamline, tamline);
  line(40, 50, 50, 60);
  
  rect (posxtam, posytam, tamtam,tamtam);
  line (5,70,5,80);
  line (0,75,10,75);
  
  rect (posxred, posyred, tamred, tamred);
  line (20,75,30,75);
  
  rect (posxtriangle, posytriangle, tamtriangle, tamtriangle);
  triangle (42,78,48,78,45,72);
  
  rect (posxlineados, posylineados, tamlineados, tamlineados);
  line (5,95,7,92);
  line (5,95,3,92);
  line (5,95,3,97);
  line (5,95,7,97);
  
  rect (posxlinea, posylinea, tamlinea, tamlinea);
  point (25,95);
  
  rect (posxsmile, posysmile, tamsmile, tamsmile);
  point (43,93);
  point (47,93);
  line (43,96,47,96);
  
  rect (posxalien, posyalien, tamalien, tamalien);
  fill (0,255,0);
  ellipse (5,115,4,8);
  
  fill (255);
  rect (posxice, posyice, tamice, tamice);
  ellipse (25.5,115,4,6);
  triangle (22,115,29,115,25.5,119);
  
  rect (posxflor, posyflor, tamflor,tamflor);
  

  //CLEAR ALL
 
  strokeWeight (1);
  fill(0);
  text("Clear", 0, 135, 10);
  fill(255);
  rect(posxclear, posyclear, tamclear, tamclear);

  fill(0);
  text("Save", 40, 135, 10);
  fill(255);
  rect (posxsave, posysave, tamsave, tamsave);

  //Acciones


  if (mouseIsPressed) {
    
    fill(col, col1, col2);
    noStroke();
    
    //ELLIPSE
    if (herSelec == 0) {
      ellipse(mouseX, mouseY, tam, tam);
    }

    //SQUARE
    if (herSelec == 1) {
      rect(mouseX, mouseY, tam, tam);
    }

    //LINE
    stroke (col,col1,col2);
    if (herSelec == 2) {
      line(mouseX + 10, mouseY + 10, mouseX - 10, mouseY - 10);
    }
    
    //TRIANGLE
    
    if (herSelec ==3) {
      triangle (mouseX, mouseY, mouseX+tam, mouseY, mouseX+tam/2, mouseY-tam);
    }
    
    //LINEA FIJA CENTRO
    
    if (herSelec == 4) {
      line (width/2, height/2, mouseX - 10, mouseY - 10);
    }
    
    //Linea continua
    
    if (herSelec == 5) {
       line(mouseX, mouseY, pmouseX, pmouseY);
    }
    
    //CARA FELIZ
    if (herSelec ==6) {
      ellipse (mouseX, mouseY, tam/2, tam/2);
    ellipse (mouseX + tam, mouseY, tam/2, tam/2);
   arc (mouseX + 5, mouseY+tam, 10, 10, 0, PI + QUARTER_PI, CHORD)
    }
    
    //ALIEN
    
    if (herSelec == 7) {
      fill (col,col1,col2); 
       ellipse (mouseX,mouseY,25,30);
    fill (0);
    ellipse (mouseX-5,mouseY-2,5,10);
    ellipse (mouseX+5,mouseY-2,5,10);
    }
    
    // ICE CREAM
    
    if (herSelec == 8 ) {
      stroke (0);
      fill (236,157,21);
triangle (mouseX, mouseY, mouseX+tam, mouseY, mouseX+tam/2, mouseY +tam);
    fill (col,col1,col2);
   ellipse (mouseX+tam/2, mouseY-3, tam,tam);
    }
    
    //FLOR
    
    if (herSelec == 9 ) {
      stroke (0);
      fill (255,255,0);
    ellipse (mouseX,mouseY,tam/2,tam/2);
    fill (col,col1,col2);
    ellipse (mouseX-tam+2,mouseY,tam,tam);
    ellipse (mouseX+tam-2,mouseY,tam,tam);
    ellipse (mouseX,mouseY+tam-2,tam,tam);
    ellipse (mouseX, mouseY-tam+2,tam,tam);
    }
    
  }

  //FUNCION BOTONES

  if (mouseIsPressed) {
  if (mouseX > posxclear && mouseX < posxclear + tamclear && mouseY > posyclear && mouseY < posyclear + tamclear) {
    background(255);
  }

  if (mouseX > posxsave && mouseX < posxsave + tamsave && mouseY > posysave && mouseY < posysave + tamsave) {
    saveCanvas("Draw" + frameCount, 'jpg');
  }

  if (mouseX > posxblanco && mouseX < posxblanco + tamblanco && mouseY > posyblanco && mouseY < posyblanco + tamblanco) {
    col = 255;
    col1 = 255;
    col2 = 255;
  }

  if (mouseX > posxnegro && mouseX < posxnegro + tamnegro && mouseY > posynegro && mouseY < posynegro + tamnegro) {
    col = 0;
    col1 = 0;
    col2 = 0;
  }

  if (mouseX > posxrojo && mouseX < posxrojo + tamrojo && mouseY > posyrojo && mouseY < posyrojo + tamrojo) {
    col = 255;
    col1 = 0;
    col2 = 0;
  }

  if (mouseX > posxnaranja && mouseX < posxnaranja + tamnaranja && mouseY > posynaranja && mouseY < posynaranja + tamnaranja) {
    col = 255;
    col1 = 128;
    col2 = 0;
  }

  if (mouseX > posxamarillo && mouseX < posxamarillo + tamamarillo && mouseY > posyamarillo && mouseY < posyamarillo + tamamarillo) {
    col = 255;
    col1 = 255;
    col2 = 0;
  }

  if (mouseX > posxverde && mouseX < posxverde + tamverde && mouseY > posyverde && mouseY < posyverde + tamverde) {
    col = 0;
    col1 = 255;
    col2 = 0;
  }

  if (mouseX > posxaguam && mouseX < posxaguam + tamaguam && mouseY > posyaguam && mouseY < posyaguam + tamaguam) {
    col = 0;
    col1 = 255;
    col2 = 205;
  }

  if (mouseX > posxazul && mouseX < posxazul + tamazul && mouseY > posyazul && mouseY < posyazul + tamazul) {
    col = 0;
    col1 = 128;
    col2 = 255;
  }

  if (mouseX > posxmorado && mouseX < posxmorado + tammorado && mouseY > posymorado && mouseY < posymorado + tammorado) {
    col = 172;
    col1 = 0;
    col2 = 206;
  }

  if (mouseX > posxrosa && mouseX < posxrosa + tamrosa && mouseY > posyrosa && mouseY < posyrosa + tamrosa) {
    col = 255;
    col1 = 153;
    col2 = 153;
  }

  if (mouseX > posxellipse && mouseX < posyellipse + tamellipse && mouseY > posyellipse && mouseY < posyellipse + tamellipse) {
    herSelec = 0;
  }

  if (mouseX > posxsquare && mouseX < posysquare + tamsquare && mouseY > posysquare && mouseY < posysquare + tamsquare) {
    herSelec = 1;
  }

  if (mouseX > posxline && mouseX < posyline + tamline && mouseY > posyline && mouseY < posyline + tamline) {
    herSelec = 2;
  }
  
  if (mouseX > posxtam && mouseX < posytam + tamtam && mouseY > posytam && mouseY < posytam + tamtam) {
    tam = 20;
  }
  
  if (mouseX > posxred && mouseX < posyred + tamred && mouseY > posyred && mouseY < posyred + tamred) {
    tam = 10;
  }
  
  if (mouseX > posxtriangle && mouseX < posytriangle + tamtriangle && mouseY > posytriangle && mouseY < posytriangle + tamtriangle) {
    herSelec = 3;
  }
  
  if (mouseX > posxlineados && mouseX < posylineados + tamlineados && mouseY > posylineados && mouseY < posylineados + tamlineados) {
    herSelec = 4;
  }
  
   if (mouseX > posxlinea && mouseX < posylinea + tamlinea && mouseY > posylinea && mouseY < posylinea + tamlinea) {
    herSelec = 5;
  }
    
    if (mouseX > posxsmile && mouseX < posysmile + tamsmile && mouseY > posysmile && mouseY < posysmile+ tamsmile) {
    herSelec = 6;
  }
    
    if (mouseX > posxalien && mouseX < posyalien + tamalien && mouseY > posyalien && mouseY < posyalien+ tamalien) {
    herSelec = 7;
  }
    
    if (mouseX > posxice && mouseX < posyice + tamice && mouseY > posyice && mouseY < posyice+ tamice) {
    herSelec = 8;
  }
    
    if (mouseX > posxflor && mouseX < posyflor + tamflor && mouseY > posyflor && mouseY < posyflor+ tamflor) {
    herSelec = 9;
  }
    
  }
}
