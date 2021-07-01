let size = 40
let w, h, cols, rows

function lookup(x, y) { // i, j
  let i = Math.floor(cols * (x / w))
  let j = Math.floor(rows * (y / h) )
  
  return [i, j]
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  ellipseMode(CORNER)
  
  cols = Math.floor(width / size)
  rows = Math.floor(height / size)
  w = cols * size
  h = rows * size

  
}

function draw() {
  background(255, 40)
  noFill()
  for (i = 0; i < cols; i ++) {
    for (j = 0; j < rows; j ++) {
      ellipse(i * size , j * size, size, size)
    }
  }
  
  fill(0)
  ellipse(lookup(mouseX, mouseY)[0] * size, lookup(mouseX, mouseY)[1] * size, size, size)
  
  if (mouseIsPressed) {
    
  }
}