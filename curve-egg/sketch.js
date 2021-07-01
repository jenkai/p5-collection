const n = 1000
const r = 400
const ctrl_r = 300

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(0)
	// translate(width / 2, height / 2);
	// noFill()
	// colorMode(HSL, 100)

	// let r2 = []
	// let ctrls = []
	// let ctrls_angle = []
	// let pos1 = []
	// let pos2 = []
	// let col = []

	// for (let i = 0; i < n * 2; i++) {
	// 	let base_angle = (Math.PI / n) * i

	// 	// prepare r's r length
	// 	let r_len = map(noise((Math.cos(base_angle) + 1) / 2, (Math.sin(base_angle) + 1) / 2), 0, 1, -600, 100)
	// 	r2.push(r_len)

	// 	// prepare ctrl's length
	// 	let len = ctrl_r + noise(Math.cos(base_angle) + 1, Math.sin(base_angle) + 1) * 400
	// 	ctrls.push(len)

	// 	// prepare ctrl's angle
	// 	let angle = map(noise(Math.cos(base_angle) + 2, Math.sin(base_angle) + 2), 0, 1, -Math.PI, Math.PI)
	// 	ctrls_angle.push(angle)
	// }

	// for (let i = 0; i < n; i++) {
	// 	// basic angle offset
	// 	let angle = (Math.PI / n) * i
	// 	// strokeWeight(2)
	// 	// line(-Math.cos(angle) * r, -Math.sin(angle) * r, Math.cos(angle) * r, Math.sin(angle) * r)
	// 	let p1 = [-Math.cos(angle) * (r + r2[i]), -Math.sin(angle) * (r + r2[i])]
	// 	let p2 = [Math.cos(angle) * (r + r2[i + n]), Math.sin(angle) * (r + r2[i + n])]
	// 	let c1 = [-Math.cos(angle + ctrls_angle[i]) * (r + r2[i] + ctrls[i]), -Math.sin(angle + ctrls_angle[i]) * (r + r2[i] + ctrls[i])]
	// 	let c2 = [Math.cos(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n]), Math.sin(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n])]

	// 	pos1.push(p1)
	// 	pos2.push(p2)

	// 	strokeWeight(0.5)
	// 	let hue = map(noise(Math.cos(angle) + 1, Math.sin(angle) + 1), 0, 1, 0, 180)
	// 	stroke(color(hue, 100, 75, 10))
	// 	col.push(hue)
	// 	curve(c1[0], c1[1], p1[0], p1[1], p2[0], p2[1], c2[0], c2[1])

	// 	stroke(color(hue, 100, 70, 50))
	// 	strokeWeight(0.5)
	// 	point(p1[0], p1[1])
	// 	point(p2[0], p2[1])
	// 	// strokeWeight(1)
	// 	// stroke(color(255, 5))
	// 	// line(p1.x, p1.y, c1.x, c1.y)
	// 	// ellipse(c1.x, c1.y, 5, 5)
	// 	// line(p2.x, p2.y, c2.x, c2.y)
	// 	// ellipse(c2.x, c2.y, 5, 5)

	// }

	// let pos3 = pos1.concat(pos2)
	// let pos4 = shuffle(pos3)
	// console.log(col)

	// for (let i = 0; i < n * 2; i++) {
	// 	strokeWeight(0.5)
	// 	stroke(color(col[i / 2], 100, 70, 10))
	// 	curve(random(-width , width) , random(height, width), pos3[i][0], pos3[i][1], pos4[i][0], pos4[i][1], random(-width , width) , random(-height , width) )
	// }
}
let inc = 0
function draw() {

	background(0)
	translate(width / 2, height / 2);
	noFill()
	colorMode(HSL, 100)
	

	let r2 = []
	let ctrls = []
	let ctrls_angle = []
	let pos1 = []
	let pos2 = []
	let col = []

	for (let i = 0; i < n * 2; i++) {
		let base_angle = (Math.PI / n) * i

		// prepare r's r length
		let r_len = map(noise((Math.cos(base_angle) + 1) / 2, (Math.sin(base_angle) + 1) / 2, inc), 0, 1, -500, 200)
		r2.push(r_len)

		// prepare ctrl's length
		let len = ctrl_r + noise(Math.cos(base_angle) + 1, Math.sin(base_angle) + 1, inc+100) * 400
		ctrls.push(len)

		// prepare ctrl's angle
		let angle = map(noise(Math.cos(base_angle) + 2, Math.sin(base_angle) + 2,inc+200), 0, 1, -Math.PI, Math.PI)
		ctrls_angle.push(angle)
	}

	for (let i = 0; i < n; i++) {
		// basic angle offset
		let angle = (Math.PI / n) * i
		// strokeWeight(2)
		// line(-Math.cos(angle) * r, -Math.sin(angle) * r, Math.cos(angle) * r, Math.sin(angle) * r)
		let p1 = [-Math.cos(angle) * (r + r2[i]), -Math.sin(angle) * (r + r2[i])]
		let p2 = [Math.cos(angle) * (r + r2[i + n]), Math.sin(angle) * (r + r2[i + n])]
		let c1 = [-Math.cos(angle + ctrls_angle[i]) * (r + r2[i] + ctrls[i]), -Math.sin(angle + ctrls_angle[i]) * (r + r2[i] + ctrls[i])]
		let c2 = [Math.cos(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n]), Math.sin(angle + ctrls_angle[i + n]) * (r + r2[i + n] + ctrls[i + n])]

		pos1.push(p1)
		pos2.push(p2)

		strokeWeight(0.5)
		let hue = map(noise(Math.cos(angle) + 1, Math.sin(angle) + 1,inc+1000), 0, 1, 0, 180)
		stroke(color(hue, 100, 75, 10))
		// col.push(hue)
		curve(c1[0], c1[1], p1[0], p1[1], p2[0], p2[1], c2[0], c2[1])

		stroke(color(hue, 100, 70, 50))
		strokeWeight(0.5)
		point(p1[0], p1[1])
		point(p2[0], p2[1])
		// strokeWeight(1)
		// stroke(color(255, 5))
		// line(p1.x, p1.y, c1.x, c1.y)
		// ellipse(c1.x, c1.y, 5, 5)
		// line(p2.x, p2.y, c2.x, c2.y)
		// ellipse(c2.x, c2.y, 5, 5)

	}

	let pos3 = pos1.concat(pos2)
	let pos4 = shuffle(pos3)
	

	for (let i = 0; i < n * 2; i++) {
		strokeWeight(0.5)
		stroke(color(col[i / 2], 100, 75, 10))
		curve(noise(inc)*400, noise(inc+100)*400, pos3[i][0], pos3[i][1], pos4[i][0], pos4[i][1], noise(inc+200)*800, noise(inc+300)*400)
	}
	inc += 0.01
}