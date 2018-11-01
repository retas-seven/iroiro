/**
 * ステートの基底クラス
 */
class StateBase {
    /**
     * 初期化
     */
    constructor() {
        console.log("StateBase.constructor");
        this.isChangeStateEnd = false;
    }

    changeState(stateName) {
        if (!this.isChangeStateEnd) {
            console.log("StateBase.changeState");

            isSystemBlack = true;
            systemAlpha = 0;
            nextStateName = stateName;
            this.isChangeStateEnd = true;
        }
    }
}