function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  push();
  translate(width / 2 - 200, height / 2);
  rotate(PI);
  drawshape(1);
  pop();

  push();
  translate(width / 2 + 200, height / 2);
  drawshape(1);
  pop();
  let tex = ' random';
  for (let index = 1; index <= tex.length; index++) {
    textSize(20);
    textFont('Courier');
    textAlign(CENTER, CENTER);

    text(tex.substr(index, 1), (width / tex.length) * index, height / 2);
    fill(random(255));
  }
}

function drawshape(a) {
  let div = floor(random(2, 10));
  beginShape();

  for (let i = 1; i <= div + 1; i++) {
    let x = 400 * cos((TWO_PI / div) * i);
    let y = 400 * sin((TWO_PI / div) * i);
    fill(255, 5);
    strokeWeight(a);
    stroke(255, 50);
    vertex(x, y);
    drawpoint(x, y);
    strokeWeight(a);
  }
  endShape();
}

function drawpoint(x, y) {
  stroke(255, 100);
  strokeWeight(5);
  point(x, y);
}
