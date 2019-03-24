//https://www.youtube.com/watch?v=0jjeOYMjmDU&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=17
//adresindeki örnektir

var angle = 0;
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, PI, PI / 4, 0.01); //start,end,defaultValue,StepSize
}

function draw() {
  background(51);
  angle = slider.value();
  // text(slider.value() / PI, 5, 15).fill(255); test amaçlı slider değerini yazdım ekrana
  stroke(255);
  translate(width / 2, height);
  branch(150);
}

//branch
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
  //line(0, 0, 0, -len * 0.67);
}
