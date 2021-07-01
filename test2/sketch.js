var on = false;

let colors = [100, 255]

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('yellow');
	rectMode(CENTER)
}

function draw() {
	fill(colors[on ? 0 : 1])
	rect(windowWidth / 2, windowHeight / 2, 50, 50)
	fill(colors[on ? 1 : 0])
	rect(windowWidth / 2 + 100, windowHeight / 2, 50, 50)

	var cha = on

	for (x = 0; x < 11; x++) {
		fill(colors[cha ? 1: 0])
		circle(x * 100, 400, 100)
		cha = !cha;
	}
}

function mousePressed() {
	on = !on;
}