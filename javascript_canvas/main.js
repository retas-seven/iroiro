/** 画面幅 */
const WIDTH = 640;
/** 画面高さ */
const HEIGHT = 480;
/** 画面 */
var canvas =  document.getElementById("mainCanvas");
/** コンテキスト */
var context = canvas.getContext('2d');
/** 画面（各場面） */
var state;

/**
 * 初期処理
 */
function init() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    // 初期画面を設定
    state = new CircleState();
}

/**
 * メインループ
 */
function mainLoop() {
    // 画面を初期化
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, WIDTH, HEIGHT);
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