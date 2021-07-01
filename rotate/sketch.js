function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)

}

function draw() {
	// put drawing code here
	background(255)
	translate(width / 2, height / 2)
	rotate(frameCount * 0.1)
	let div = 100
	for (let i = 0; i < div; i++) {
		push()
		// translate(windowWidth / 2, windowHeight / 2)
		rotate(i * (360 / div))
		strokeWeight(1)
		line(0, 0, 1000, 0)
		pop()
	}
}