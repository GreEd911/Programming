
//har ændret nogen af vrariabler så åde passer bedre med kode og så jeg også kan se min "kat" og "mus"  på skærmen
let x ;
let y ;
let a ;
let b = 0;
let d = 60;
let speed =3;
let imgmus;
let imgkat;

let xkat = 100;
let ykat = 300;
let akat = 4
let bkat = 4
let speedkat = 5



//laver et lærred til os med en defineret højde og bredde
function setup() {
  createCanvas(599, 614);
  x = random(0,width);
  y = random(0,height);
  a = speed;
}




function draw() {
  speedkat += 0.09;

 
  background(220);
  
  image(imgmus, x,y,d,d);
  x+=a;
  y+=b;
  
  image(imgkat, xkat, ykat,d,d)
  xkat += akat
  ykat += bkat
  
  borderCheck()
 
 //hvis musens x og y værdier kommer ind for d + xkat og ykat + d så stopper de og variabler som speed bliver 0.
 if (
  (x + d > xkat && x < xkat + d && y + d > ykat && y < ykat + d)
) 
{
  a = 0;
  b = 0;
  akat = 0;
  bkat = 0;
  speed = 0;
}

//den kan laod alt muligt in i filen udenfra, vi har brugt den til at load billider.
}
function preload() {
  imgmus = loadImage('mus.png')
  imgkat = loadImage('kat.png')
}
//sørger for at vores mus ikke gå ud fra skærmen ved at tjek om dens x og y værdi +
//halvdelen af vores mus diameter. Så tjekker den om x og y er midre end 0 hvis de er
//accelerer vores mus i den modsatte retning.
function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y < 0) {
    a = 0;
    b = speed;
  }
//tjekker om kattens x + d og kattens y + d er midre end vores kanvas maks højde og længde.
//tjerkker også om xkat og ykat værdier ikke er mindre end 0. Hvis ja så giver dem nogen
// random værdier at stige eller falde på x og y positionen.
  if (xkat + d >= 599) {
    akat = random(-1, -speedkat);
    bkat = random(-speedkat, speedkat);
  }

  if (xkat <= 0) {
    akat = random(1, speedkat);
    bkat = random(-speedkat, speedkat);
  }

  if (ykat + d >= 614) {
    akat = random(-speedkat, speedkat);
    bkat = random(-1, -speedkat);
  }

  if (ykat  <= 0) {
    akat = random(-speedkat, speedkat);
    bkat = random(1, speedkat);
  }




 }
  //Ændrer musens retning i forhold til hivlken pilknap vi trykker på
  //ved at kig på knappen trykket og ændrer i variabler a og b
 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }


 

 

  

//Den med kommentar.
//Koden er den samme som der jeg afleveret på teams, aflever det her nu fordi min repository virker.
