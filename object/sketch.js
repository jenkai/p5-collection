class Eli {
	constructor() {
		this.x = random(width)
		this.y = random(height)
		this.isOveron = false
		// this.isClicked = false
	}
	overon(x, y) {
		this.isOveron = dist(x, y, this.x, this.y) < 50
	}
	display() {
		if (this.isOveron) {
			fill(100)
		} else {
			fill(255)
		}
		// if (!this.isClicked) {
			ellipse(this.x, this.y, 100)
		// }
	}
}

let Elis = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 10; i++) {
		Elis.push(new Eli())
	}
}

function draw() {
	background(200)

	for (let i = Elis.length-1 ; i >= 0 ; i--) {
		Elis[i].overon(mouseX, mouseY)
		Elis[i].display()
		if (mouseIsPressed && Elis[i].isOveron) {
			Elis.splice(i, 1)
			// item.isClicked = true
		}
	}
}