class Control {
	constructor(div) {
		this.r = 300
		this.div = div
		this.ctr = random(1000)

		let noi = noise(cos(j) + 1, sin(j) + 1, this.ctr)
		let d = this.r + map(noi, 0, 1, -60, 60)
		let x = cos(j) * d
		let y = sin(j) * d

		this.ctr += 1
		controlsPos.push([x, y])
	}

}