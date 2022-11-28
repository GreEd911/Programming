/* for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      let x = random(200);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    } else {
      let x = random(200, 400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      text(i, x, y);
    }
  } */

//Opgave 3
/* 
  for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
      let x = random(400);
      let y = random(400);
      fill(155, 0, 0);
      text(i, x, y);
    }
  } */

//Opgave 4

/* for (let i = 0; i < 101; i++) {
    if (i % 2 === 1) {
      let x = random(400);
      let y = random(400);
      fill(0, 0, 155);
      text(i, x, y);
    }
  } */
//Opgave 5 med for loop
/* let x = 200;
  let y = 200;
  noFill();
  for (let i = 10; i < 310; i = i + 10) {
    circle(x, y, i);
  } */

//Opgave 5 med while loops
/*  
  let i = 0;
  let x = 200;
  let y = 200;
  let r = 10;
  noFill();
  while (i < 30) {
    circle(x, y, r);
    r = r + 10;
    i++;
  }
 */

//Opgave 6
// Med for loop
/* for (let i = 0; i < 10; i++) {
    let x = random(100, 300);
    let y = random(100, 300);
    circle(x, y, 50);
  } */
// Med while loop

/* let i = 0;
  while (i < 10) {
    circle(random(100, 300), random(100, 300), 50);
    i++;
  } */

//Opgave 7
/*  function setup() {
    createCanvas(400, 400);
    let wordcloud = [
      "Javascript",
      "Python",
      "C++",
      "C",
      "C#",
      "Julia",
      "Java",
      "Go",
      "R",
      "Basic",
    ];
    for (let i = 0; i < wordcloud.length; i++) {
      text(wordcloud[i], random(400), random(400));
      i = i + 1;
    }
  } */
//first it make a list
//the for loop has the variable i, and if i is smaller then the length of the list
//then the loop will print the elements in the list starting with element 0 and then add 1
//until it prints out every name and then stop.

//Opg 13
//
let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink");
  noStroke();
}

function draw() {
  background("yellow");
  translate(x, y);
  rotate(angle);
  ellipseMode(CENTER);

  x = x + 2;
  angle = angle + 4;
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}
