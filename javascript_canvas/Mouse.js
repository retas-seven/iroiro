/**
 * マウスイベントハンドラクラス
 */
class Mouse {
    /**
     * 初期化
     */
    constructor() {
        this.x = 0;
        this.y = 0;
        this.mouseX = 0;
        this.mouseY = 0;
    }

    /**
     * クリックイベントハンドラ
     */
    onclick(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        console.log(mouseX +" | "+ mouseY);
    }
}