let curves = []
let controls = []
var controlsPos = []

let curve_r = 200
let div = 15

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)

    for (var i = 0; i <= TWO_PI; i += TWO_PI * (1 /div)) {
        
        let curve_x = cos(i) * curve_r
		let curve_y = sin(i) * curve_r
        controls.push(new Control(div))


        curves.push(new Curves(curve_x, curve_y))
        
    }

    for (let j = 0; j < curves.length; j++) {

        push()
        translate(width / 2, height / 2)
        curves[j].display()
        pop()
        // j 不是PI
    }
}