/**
 * サンプル画面（四角）
 */
class RectState {

    /**
     * 初期化
     */
    constructor() {
        /** 描画する四角 */
        this.rects = [];
        this.rects.push({x: 150, y: 150, dx: 3, dy: 1, width: 100, height: 100, color: "rgb(255, 255, 128)", boundCnt: 0});
        this.rects.push({x: 350, y: 350, dx: -1, dy: -3, width: 100, height: 100, color: "rgb(128, 200, 255)", boundCnt: 0});
    }

    /**
     * 描画
     */
    draw() {
        for (let o of this.rects) {
            context.beginPath();
            context.fillStyle = o.color;
            context.fillRect(o.x, o.y, o.width, o.height);
            context.fill();
        }
    }

    /**
     * 状態を更新
     */
    run() {
        for(let o of this.rects) {
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
                state = new CircleState();
            }
        }
    }
}