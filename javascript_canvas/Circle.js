/**
 * キャラクタ：円
 */
class Circle {
    /**
     * 初期化
     */
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.boundCnt = 0;
    }

    run() {
        this.x += this.dx;
        this.y += this.dy;

        if (WIDTH < this.x) {
            this.x = WIDTH;
            this.dx = -this.dx;
            this.boundCnt++;
        } else if (this.x < 0) {
            this.x = 0;
            this.dx = -this.dx;
            this.boundCnt++;
        }
        if (HEIGHT < this.y) {
            this.y = HEIGHT;
            this.dy = -this.dy;
            this.boundCnt++;
        } else if (this.y < 0) {
            this.y = 0;
            this.dy = -this.dy;
            this.boundCnt++;
        }
    }

    draw() {
        front.beginPath();
        front.fillStyle = this.color;
        front.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        front.fill();
    }
}