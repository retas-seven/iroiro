/** 画面幅 */
const WIDTH = 640;
/** 画面高さ */
const HEIGHT = 480;
/** 画面 */
var canvas =  document.getElementById("mainCanvas");
/** コンテキスト */
var context = canvas.getContext('2d');
/** ボール */
var balls = [];

/**
 * 初期処理
 */
function init() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    balls.push({x: 150, y: 150, dx: 3, dy: 1, radius: 50, color: "rgb(0, 255, 128)"});
    balls.push({x: 350, y: 350, dx: -1, dy: -3, radius: 50, color: "rgb(0, 200, 255)"});
}

/**
 * メインループ
 */
function mainLoop() {
    // 画面を初期化
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    
    // 描画
    for (let c of balls) {
        context.beginPath();
        context.fillStyle = c.color;
        context.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
        context.fill();
    }

    // 状態を更新
    for(let c of balls) {
        c.x = c.x + c.dx;
        c.y = c.y + c.dy;

        if (WIDTH < c.x) {
            c.x = WIDTH;
            c.dx = -c.dx;
        } else if (c.x < 0) {
            c.x = 0;
            c.dx = -c.dx;
        }
        if (HEIGHT < c.y) {
            c.y = HEIGHT;
            c.dy = -c.dy;
        } else if (c.y < 0) {
            c.y = 0;
            c.dy = -c.dy;
        }
    }

    requestAnimationFrame(mainLoop);
}

// 画面を初期化
init();
// メインループ開始
requestAnimationFrame(mainLoop);