function setup() {
	createCanvas(windowWidth, windowHeight);
	noiseSeed(1)
	noiseDetail(2,0.00000001)
}
let inc = 0.01
let count = 0
function draw() {
	// put drawing code here

	// ellipse(, height/2 ,30,30)
	background(255)
	let xoff = 0
	strokeWeight(0.5)
	beginShape()
	for (let x = 0; x < width; x++) {
		let y = noise(xoff+count)*height
		vertex(x,y)
		xoff += inc
	}
	endShape()
	count +=0.01
	noLoop()
}
