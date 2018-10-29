/** 画面幅 */
const WIDTH = 640;
/** 画面高さ */
const HEIGHT = 480;
/** 画面（前面CANVAS） */
var frontCanvas =  document.getElementById("frontCanvas");
/** 画面（背面CANVAS） */
var backCanvas =  document.getElementById("backCanvas");
/** コンテキスト（前面CANVAS） */
var front = frontCanvas.getContext('2d');
/** コンテキスト（背面CANVAS） */
var back = backCanvas.getContext('2d');
/** 画面（各場面） */
var state;

/**
 * 初期処理
 */
function init() {
    frontCanvas.width = WIDTH;
    frontCanvas.height = HEIGHT;
    backCanvas.width = WIDTH;
    backCanvas.height = HEIGHT;

    // 初期画面を設定
    state = new CircleState();
}

/**
 * メインループ
 */
function mainLoop() {
    // 画面を初期化
    // front.fillStyle = 'rgb(0, 0, 0)';
    // front.fillRect(0, 0, WIDTH, HEIGHT);
    front.clearRect(0, 0, WIDTH, HEIGHT);
    // 描画
    state.draw();
    // 状態を更新
    state.run();

    requestAnimationFrame(mainLoop);
}

// 画面を初期化
init();
// メインループ開始
requestAnimationFrame(mainLoop);