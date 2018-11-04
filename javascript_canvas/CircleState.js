/**
 * サンプル画面（円）
 */
class CircleState extends StateBase {
    constructor() {
        super();
    }

    /**
     * 初期化
     */
    init () {
        console.log("CircleState.init");
        
        /** 描画する円を作成 */
        this._balls = [];
        this._balls.push(new Circle(150, 150, 6, 2, 50, "rgb(0, 255, 128)"));
        this._balls.push(new Circle(350, 350, -3, -7, 50, "rgb(0, 200, 255)"));

        // 背景色を設定
        back.fillStyle = 'rgb(100, 100, 0)';
        back.fillRect(0, 0, WIDTH, HEIGHT);
    }

    /**
     * 描画
     */
    draw() {
        for (let o of this._balls) {
            o.draw();
        }
    }

    /**
     * 状態を更新
     */
    run() {
        for (let o of this._balls) {
            o.run();
            if (3 <= o.boundCnt) {
                this.changeState("RectState");
            }
        }

        if (mouse.isLeft) {
            console.log("RectState　左クリック");
            this._balls[0].dx = -this._balls[0].dx;
            this._balls[0].dy = -this._balls[0].dy;
        }
        if (mouse.isRight) {
            console.log("RectState　右クリック");
            this._balls[1].dx = -this._balls[1].dx;
            this._balls[1].dy = -this._balls[1].dy;
        }
    }
}