class Eli {
	constructor() {
		this.pos = createVector(random(width), random(height))
		this.vec = createVector(0, 0)
		this.acc = createVector(0 , 0)
		this.f = random(0.98, 0.99)
	}
	display() {
		this.acc  = createVector(mouseX - this.pos.x, mouseY - this.pos.y).mult(this.f)
		this.acc.limit(1)
		this.vec.add(this.acc).mult(this.f)
		this.pos.add(this.vec)
		ellipse(this.pos.x, this.pos.y, 30, 30)
	}
	boom(){
		this.acc  = createVector(-(mouseX - this.pos.x), -(mouseY - this.pos.y))
		this.acc.limit(20)
		this.vec.add(this.acc)
		this.pos.add(this.vec)
		ellipse(this.pos.x, this.pos.y, 30, 30)
		
	}
}
let balls = []

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < 50; i ++) {
		balls.push(new Eli())
	}
}

function draw() {
	// put drawing code here
	background(255)
	for (const iterator of balls) {
		iterator.display()
	}
}

function mousePressed(){
	for (const iterator of balls) {
		iterator.boom()
	}
}