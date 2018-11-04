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
        this._x = 0;
        this._y = 0;
        this._isLeft = false;
        this._isRight = false;
    }

    /**
     * クリックイベントハンドラ
     */
    mouseClick(e) {
        mouse._x = e.clientX;
        mouse._y = e.clientY;

        switch (e.button) {
            case 0 :
                // console.log("左クリック:" + mouse.isLeft + "," + mouse.isRight + "," + mouse._isEventLeft + "," + mouse.isEventRight);
                mouse._isLeft = true;
                break;
            case 2 :
                // console.log("右クリック:" + mouse.isLeft + "," + mouse.isRight + "," + mouse._isEventLeft + "," + mouse.isEventRight);
                mouse._isRight = true;
                break;
        }

        // if (this._isEventLeft || this.isEventRight) {
        //     conso_le.log("this.isLeft:" + this.isLeft + ", this.isRight:" + this.isRight);
        // }
    }

    /**
     * 検知したマウスイベントを外部公開用の変数に設定
     */
    update() {
        this.x = this._x;
        this.y = this._y;
        this.isLeft = this._isLeft;
        this.isRight = this._isRight;

        // if (this._isEventLeft) {
        //     this._isLeft = true;
        // }
        // if (this.isEventRight) {
        //     this.isRight = true;
        // }

        // if (this._isEventLeft || this.isEventRight) {
        //     con_sole.log("マウス状態:" + this.isLeft + "," + this.isRight + "," + this._isEventLeft + "," + this.isEventRight);
        // }
    }

    /**
     * 検知したマウスイベントを無効化（検知したマウスイベントをを次のフレームに持ち越さない）
     */
    reset() {
        if (this.isLeft) {
            this.isLeft = false;
            this._isLeft = false;
        }
        if (this.isRight) {
            this.isRight = false;
            this._isRight = false;
        }
    }
}