function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1)
	loadPixels()
	let R = [floor(random(0,255)), floor(random(0,255))]
	let G = [floor(random(0,255)), floor(random(0,255))]
	let B = [floor(random(0,255)), floor(random(0,255))]

	function xwyh(choice, x, y) {
		if (choice === 0) {
			return [x, width]
		}
		else {
			return [y, height]
		}
	}

	let Rxy = Math.random() < 0.5 ? 0 : 1
	let Gxy = Math.random() < 0.5 ? 0 : 1
	let Bxy = Math.random() < 0.5 ? 0 : 1

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			let index = (x + y * width) * 4
			pixels[index] =     map(xwyh(Rxy, x, y)[0], 0, xwyh(Rxy, x, y)[1], R[0], R[1])
			pixels[index + 1] = map(xwyh(Gxy, x, y)[0], 0, xwyh(Gxy, x, y)[1], G[0], G[1])
			pixels[index + 2] = map(xwyh(Bxy, x, y)[0], 0, xwyh(Bxy, x, y)[1], B[0], B[1])
			pixels[index + 3] = 175
		}
	}
	updatePixels()
	console.log(R)
	console.log(G)
	console.log(B)

}

function draw() {
	// put drawing code here

}