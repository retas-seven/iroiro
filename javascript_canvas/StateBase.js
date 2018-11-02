/**
 * ステートの基底クラス
 */
class StateBase {
    /**
     * 初期化
     */
    constructor() {
        this.isChangeStateEnd = false;
    }

    changeState(stateName) {
        if (!this.isChangeStateEnd) {
            isSystemBlack = true;
            systemAlpha = 0;
            nextStateName = stateName;
            this.isChangeStateEnd = true;
        }
    }
}