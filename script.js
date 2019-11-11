const canvasEl = document.getElementById("snake");
const context = canvasEl.getContext("2d");
const box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG()