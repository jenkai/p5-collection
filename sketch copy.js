function setup() {
    createCanvas(windowWidth, windowHeight)
}

let x1 = 600
let y1 = 100
let x2 = 600
let y2 = 500
let cx1 = 300
let cy1 = 300
let cx2 = 500
let cy2 = 500
let r = 20

function draw() {
    // put drawing code here
    background(0)

    if (mouseIsPressed && dist(mouseX, mouseY, cx1, cy1) <= r + 100) {
        cx1 = mouseX
        cy1 = mouseY
    }
    if (mouseIsPressed && dist(mouseX, mouseY, cx2, cy2) <= r + 100) {
        cx2 = mouseX
        cy2 = mouseY
    }
    noFill()
    stroke(255, 50)
    strokeWeight(2)
    line(cx1, cy1, x1, y1)
    line(cx2, cy2, x2, y2)
    stroke(255, 100)
    ellipse(cx1, cy1, r, r)
    ellipse(cx2, cy2, r, r)
    curve(cx1, cy1, x1, y1, x2, y2, cx2, cy2)
}
