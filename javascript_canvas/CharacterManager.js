/**
 * キャラクタを管理するクラス
 */
class CharacterManager {
    /**
     * 初期化
     */
    constructor() {
        this.characterList = [];
    }

    add(character) {
        this.characterList.push(character);
    }

    draw() {
        for (let o of this.characterList) {
            o.draw();
        }
    }

    run() {
        for (let o of this.characterList) {
            o.run();
        }
    }
}