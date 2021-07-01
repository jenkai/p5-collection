class Eli {
	constructor(x, y) {
		this.pos = createVector(x, y)
		this.vec = createVector(0, 0)
		this.acc = createVector(0, 0)
	}
	display() {
		ellipse(this.pos.x, this.pos.y, 1, 1)
		this.acc = createVector(random(-5, 5), random(-5, 5))
		this.vec.add(this.acc)
		this.vec.limit(3)
		this.pos.add(this.vec)
	}
}

let Elis = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 50; i++) {
		Elis.push(new Eli(random(width), random(height)))
	}
}

function draw() {
	// put drawing code here
	for (const item of Elis) {
		item.display()
	}
	
}