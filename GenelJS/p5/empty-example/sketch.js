var angle;
var slider;
function setup() {
  angle = PI / 4;
  createCanvas(400, 400);
  slider = createSlider(0, PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value;
  stroke(255);
  translate(width / 2, height);
  branch(100);
}

//branch
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  rotate(angle);
  if (len > 4) {
    branch(len * 0.67);
  }
  //line(0, 0, 0, -len * 0.67);
}
