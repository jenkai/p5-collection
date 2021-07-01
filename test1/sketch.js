var color1 = [
	[60, 186, 200],
	[147, 237, 212],
	[243, 245, 196],
	[249, 203, 143],
	[241, 145, 129]
]

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(147, 237, 212);
	// frameRate(10)
}

let i = 0

function draw() {
	// put drawing code here
	// let z = Math.sin(i * 0.1) < 0 ? 1 : -1
	let x = Math.sin((Math.sin(i * 0.1 * - Math.PI / 4))) * i/4 + width / 2 ;
	let y = Math.cos(i * 0.1 * - Math.PI / 4) * i/4 + height / 2;
	
	
	// let x = Math.sin(i * 0.1)*100+windowWidth/2;
	// let y = Math.cos(i * 0.1)*100+windowHeight/2;

	// if (y > windowHeight/2  ) {
	// 	x= windowWidth/2+100 +(200-x)
	// } else {
	// 	x = Math.sin(i * 0.1)*100+windowWidth/2;
	// }
	var a = color1[Math.floor(random(0,5))];
	
	noStroke();
	fill(a[0], a[1], a[2]);
	let r = Math.sin(i * 0.01) * 100;
	ellipse(x, y, r, r)
	i += 1;
}

// function mousePressed() {
// 	loop();
//   }
  
//   function mouseReleased() {
// 	noLoop();
//   }

