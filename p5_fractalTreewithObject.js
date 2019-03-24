//https://www.youtube.com/watch?v=fcdNSZ9IzJM&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=18
//adresindeki örnektir
var tree = [];
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, PI / 2, 1, 0.01);
  a = createVector(width / 2, height);
  b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
}
////
function mousePressed() {
  // console.log("mouse pressed");
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      var result = tree[i].branch(floor(random(2, 5)));
      for (var j = 0; j < result.length; j++) {
        tree.push(result[j]);
      }
    }
    tree[i].finished = true;
  }
  // var result = tree[0].branch();
  // tree[1] = result[0];
  // tree[2] = result[1];
}

function draw() {
  background(51);
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    tree[i].rotate(slider.value());
    // tree[i].jitter();
  }
}

///
function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = function() {
    this.end.x += random(-0.2, 0.2);
    this.end.y += random(-0.2, 0.2);
  };


  this.getTheVector() = function(){
    var current = p5.Vector.sub(this.begin, this.end);

    return current;
  }

  this.setTheVector() = function(vector){
    this.begin.x = vector.x;
    
  }
  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };
  // bu kısmı videodakinden biraz daha farkl yaptım. iş görüyor ama daha da güzel olabilirdi.
  //mesela parametre alıp ona göre dalların sayısını değiştirebilrdik :)
  //düşündüm de deneyebilirim :)
  //evet iisteğe bağlı dal oluşturma tamamdır :)
  this.branch = function(NumofBranches) {
    //right side
    // var dir = p5.Vector.sub(this.end, this.begin);
    // dir.mult(0.67);
    var angle = PI / (NumofBranches + 1); //burdakii +1 meselesi biraz zamanımı aldı ama çözdüm. ağacın yukarı dallanması için gerekli. +1 olmadan da deneyebilirsiniz farkı görmek için
    var defAng = -(PI / 2);
    var result = [];
    for (var i = 1; i <= NumofBranches; i++) {
      var dir = p5.Vector.sub(this.end, this.begin);
      dir.mult(0.67);
      dir.rotate(defAng + angle * i);
      newEnd = p5.Vector.add(this.end, dir);
      result[i - 1] = new Branch(this.end, newEnd);
    }
    // dir.rotate(PI + PI / 2);
    // var newEnd = p5.Vector.add(this.end, dir);
    // var right = [];
    // right[0] = new Branch(this.end, newEnd);
    // //left side
    // dir = p5.Vector.sub(this.end, this.begin);
    // dir.rotate(-PI / 4);
    // dir.mult(0.67);
    // newEnd = p5.Vector.add(this.end, dir);
    // right[1] = new Branch(this.end, newEnd);

    return result;
  };
}
