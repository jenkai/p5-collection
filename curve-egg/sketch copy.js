const n = 2000
const r = 300
const ctrl_r = 300

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
	translate(width / 2, height / 2);
	noFill()
	colorMode(HSL, 100)

	let r2 = []
	let ctrls = []
	let ctrls_angle = []


	for (let i = 0; i < n * 2; i++) {
		let base_angle = (Math.PI / n) * i

		// prepare r's r length
		let r_len = map(noise((Math.cos(base_angle) + 1) /1, (Math.sin(base_angle) + 1) /1), 0, 1, -200, 300)
		r2.push(r_len)
		
		// prepare ctrl's length
		let len = ctrl_r + noise(Math.cos(base_angle) + 1, Math.sin(base_angle) + 1) * 400
		ctrls.push(len)

		// prepare ctrl's angle
		let angle = map(noise(Math.cos(base_angle) + 2, Math.sin(base_angle) + 2), 0, 1, -Math.PI, Math.PI)
		ctrls_angle.push(angle)
	}

	for (let i = 0; i < n; i++) {
		// basic angle offset
		let angle = (Math.PI / n) * i
		// strokeWeight(2)
		// line(-Math.cos(angle) * r, -Math.sin(angle) * r, Math.cos(angle) * r, Math.sin(angle) * r)
		let p1 = new p5.Vector(-Math.cos(angle) * (r + r2[i]), -Math.sin(angle) * (r + r2[i]))
		let p2 = new p5.Vector(Math.cos(angle) * (r + r2[i + n]), Math.sin(angle) * (r + r2[i + n]))
		let c1 = new p5.Vector(-Math.cos(angle + ctrls_angle[i]) * (r + r2[i] +ctrls[i]), -Math.sin(angle + ctrls_angle[i]) * (r + r2[i] + ctrls[i]))
		let c2 = new p5.Vector(Math.cos(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n]), Math.sin(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n]))
		strokeWeight(0.5)
		let hue = map(noise(Math.cos(angle) + 1, Math.sin(angle) + 1), 0, 1, 50, 100)
		stroke(color(hue, 100, 70, 10))
		curve(c1.x, c1.y, p1.x, p1.y, p2.x, p2.y, c2.x, c2.y)
		// strokeWeight(1)
		// stroke(color(255, 50))
		// line(p1.x, p1.y, c1.x, c1.y)
		// ellipse(c1.x, c1.y, 5, 5)
		// line(p2.x, p2.y, c2.x, c2.y)
		// ellipse(c2.x, c2.y, 5, 5)
	}
}

function draw() {
	// put drawing code here
}