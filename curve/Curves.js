class Curves {
    constructor(x, y) {
        this.x1 = x
        this.y1 = y
        this.x2 = -x
        this.y2 = -y

        noFill()
        strokeWeight(1)
        stroke(255, 90)
    }


    
    display() {
        this.cx1 = 300
        this.cy1 = 300
        this.cx2 = 200
        this.cy2 = 200

        curve(
            this.cx1,
            this.cy1,
            this.x1,
            this.y1,
            this.x2,
            this.y2,
            this.cx2,
            this.cy2
        )
    }
}