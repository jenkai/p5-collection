class Tri {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	rota() {
		push()
		translate(this.x, this.y)
		let a = atan2(mouseY - this.y, mouseX - this.x);
		rotate(a)
		fill(0)
		triangle(-20, - 20, - 20, 20, 15, 0)
		pop()
	}

}
let tris = []

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(i = 0; i < 30 ; i ++){
		for(j = 0 ; j < 30 ; j++){
			tris.push(new Tri(i * 60 ,j* 60))
		}
			
	}
}

function draw() {
	// put drawing code here
	background(200)
	for(item of tris){
		item.rota()
	}
}