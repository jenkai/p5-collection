// let g = createVector(0, 0.5)

class Ball {
	constructor(x, y, vx, vy, r) {
		this.pos = createVector(x, y)
		this.vec = createVector(vx, vy)
		this.r = r
		this.color = color(random(100), 80, 100)
		this.g = createVector(0, 0.5)
	}

	update() {
		this.vec.add(this.g)
		this.pos.add(this.vec)

		if (this.pos.x + this.r / 2 >= width || this.pos.x - this.r / 2 <= 0) {
			this.vec = createVector(-(this.vec.x), this.vec.y)
		}
		if (this.pos.y + this.r / 2 >= height || this.pos.y - this.r / 2 <= 0) {
			this.vec = createVector(this.vec.x, -(this.vec.y))

		}

	}

	render() {
		this.update()
		fill(this.color)
		ellipse(this.pos.x, this.pos.y, this.r, this.r)
	}
}

let balls = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	colorMode(HSB, 100);
	for (let i = 0; i < 10; i++) {
		balls.push(new Ball(random(width), random(height), random(-8, 8), random(-8, 8), random(10, 100)))
	}
}

function draw() {
	background(255, 50)
	for (let i = 0; i < 10; i++) {
		balls[i].render()
	}
}