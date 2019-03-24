var test;
var a;
var b;
var angle;
function setup() {
  createCanvas(600, 600);
  a = createVector(50, 50);
  b = createVector(width / 2, height - 100);
  test = p5.Vector.sub(a, b);
  angle = 0;
  a.rotate(angle * (PI / 180));
  print(
    "a=" + a.x + " " + a.y + "\n",
    "test=" + test.x + " " + test.y + "\n",
    "b=" + b.x + " " + b.y + "\n",
    "angle=" + angle
  );
  frameRate(5);
}

function draw() {
  translate(100, 100);
  background(51);
  //   test;
  //   test.rotate(0.01);
  angle += 0.01;
  a.rotate(angle * (PI / 180));
  print(
    "a=" + a.x + " " + a.y + "\n",
    "test=" + test.x + " " + test.y + "\n",
    "b=" + b.x + " " + b.y + "\n",
    "angle=" + angle
  );
  line(a.x, a.y, 0, 0);
  rect(a.x, a.y, 2, 2).fill(255);
  rect(0, 0, 4, 2).fill(255);
}
