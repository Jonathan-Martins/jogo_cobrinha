const canvasEl = document.getElementById("snake");
const context = canvasEl.getContext("2d");
const box = 32;
let snake = [];
snake[0] = {
    x: box * 8,
    y: box * 8
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();