/**
 * マウスイベントハンドラクラス
 */
class Mouse {
    /**
     * 初期化
     */
    constructor() {
        // 外部公開用変数
        this.x = 0;
        this.y = 0;
        this.isLeft = false;
        this.isRight = false;

        // 内部用変数
        this.eventX = 0;
        this.eventY = 0;
        this.isEventLeft = false;
        this.isEventRight = false;
    }

    /**
     * クリックイベントハンドラ
     */
    mouseClick(e) {
        mouse.eventX = e.clientX;
        mouse.eventY = e.clientY;

        switch (e.button) {
            case 0 :
                // console.log("左クリック:" + mouse.isLeft + "," + mouse.isRight + "," + mouse.isEventLeft + "," + mouse.isEventRight);
                mouse.isEventLeft = true;
                break;
            case 2 :
                // console.log("右クリック:" + mouse.isLeft + "," + mouse.isRight + "," + mouse.isEventLeft + "," + mouse.isEventRight);
                mouse.isEventRight = true;
                break;
        }

        // if (this.isEventLeft || this.isEventRight) {
        //     console.log("this.isLeft:" + this.isLeft + ", this.isRight:" + this.isRight);
        // }
    }

    /**
     * 検知したマウスイベントを外部公開用の変数に設定
     */
    update() {
        this.x = this.eventX;
        this.y = this.eventY;
        this.isLeft = this.isEventLeft;
        this.isRight = this.isEventRight;

        // if (this.isEventLeft) {
        //     this.isLeft = true;
        // }
        // if (this.isEventRight) {
        //     this.isRight = true;
        // }

        // if (this.isEventLeft || this.isEventRight) {
        //     console.log("マウス状態:" + this.isLeft + "," + this.isRight + "," + this.isEventLeft + "," + this.isEventRight);
        // }
    }

    /**
     * 検知したマウスイベントを無効化（検知したマウスイベントをを次のフレームに持ち越さない）
     */
    reset() {
        if (this.isLeft) {
            this.isLeft = false;
            this.isEventLeft = false;
        }
        if (this.isRight) {
            this.isRight = false;
            this.isEventRight = false;
        }
    }
}