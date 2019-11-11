const canvasEl = document.getElementById("snake");
const context = canvasEl.getContext("2d");
const box = 32;
let snake = [];
snake[0] = {
    x: box * 8,
    y: box * 8
}
let direction = "right"
const food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// Função para criar o fundo do jogo
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// Função para desenhar a cobra
function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Função para desenhar a fruta, comida.
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}
 
document.addEventListener("keydown", update)

function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
    // Define as condições para que a cobra ao sair por um lado apareça do outro
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // Verificando se a cobra se chocou com ela mesma
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert("Game Over :(")
        }
    }

    // Funções de inicialização do jogo
    criarBG();
    criarCobrinha();
    drawFood();

    // Variaveis para a posicão da cobra no plano cartesiano
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Define as direções
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // Define o aumento da cobra ao comer a fruta
    if (snakeX != food.x|| snakeY != food.y){
        snake.pop();
    } 
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
    
    // Obj com as coordenadas da nova cabeça da cobra
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    // Adiciona um novo elemento no ínicio do array
    snake.unshift(newHead);
}

// intervalo de em que a função inicia jogo é executada. 100ms
const jogo = setInterval(iniciarJogo, 100)