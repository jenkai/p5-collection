let scl = 10;
let cols, rows;
let inc = 0.03;

let zoff = 0;
let particles = [];
let flowfield;
let fram;

function setup() {
  createCanvas(1000, 600);
  background(255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fram = createP('');
  flowfield = new Array(cols * rows);
  for (let i = 0; i < 10000; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  // background(255)
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      // noiseDetail(4,0.2)
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.01);
      xoff += inc;
      flowfield[index] = v;
      // stroke(0)
      // strokeWeight(0.5)
      // push()
      // translate(x * scl, y * scl)
      // rotate(v.heading())
      // line(0, 0, scl, 0)
      // pop()
    }
    yoff += inc;
    zoff += 0.0001;
  }
  for (const iterator of particles) {
    iterator.follow(flowfield);
    iterator.update();
    iterator.edges();
    iterator.show();
  }
  fram.html(floor(frameRate()));
}
