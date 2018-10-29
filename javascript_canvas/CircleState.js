/**
 * サンプル画面（円）
 */
class CircleState {

    /**
     * 初期化
     */
    constructor() {
        /** 描画する円を作成 */
        this.balls = [];
        this.balls.push({x: 150, y: 150, dx: 6, dy: 2, radius: 50, color: "rgb(0, 255, 128)", boundCnt: 0});
        this.balls.push({x: 350, y: 350, dx: -3, dy: -7, radius: 50, color: "rgb(0, 200, 255)", boundCnt: 0});

        // 背景色を設定
        back.fillStyle = 'rgb(100, 100, 0)';
        back.fillRect(0, 0, WIDTH, HEIGHT);
    }

    /**
     * 描画
     */
    draw() {
        for (let o of this.balls) {
            front.beginPath();
            front.fillStyle = o.color;
            front.arc(o.x, o.y, o.radius, 0, 2 * Math.PI);
            front.fill();
        }
    }

    /**
     * 状態を更新
     */
    run() {
        for(let o of this.balls) {
            o.x = o.x + o.dx;
            o.y = o.y + o.dy;

            if (WIDTH < o.x) {
                o.x = WIDTH;
                o.dx = -o.dx;
                o.boundCnt++;
            } else if (o.x < 0) {
                o.x = 0;
                o.dx = -o.dx;
                o.boundCnt++;
            }
            if (HEIGHT < o.y) {
                o.y = HEIGHT;
                o.dy = -o.dy;
                o.boundCnt++;
            } else if (o.y < 0) {
                o.y = 0;
                o.dy = -o.dy;
                o.boundCnt++;
            }

            // 既定の回数バウンドしたら画面を切り替える
            if (5 == o.boundCnt) {
                state = new RectState();
            }
        }
    }
}