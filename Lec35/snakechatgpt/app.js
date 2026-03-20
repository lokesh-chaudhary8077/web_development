const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const cellSize = 50; // Smaller snake for smoother movement
const boardWidth = canvas.width;
const boardHeight = canvas.height;

let snake = [{ x: 0, y: 0 }];
let direction = "right";
let food = generateFood();
let score = 0;
let gameOver = false;

// Game loop
setInterval(() => {
  update();
  draw();
}, 400);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  else if (e.key === "ArrowDown" && direction !== "up") direction = "down";
  else if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  else if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});

function update() {
  if (gameOver) return;

  const head = { ...snake[snake.length - 1] };

  if (direction === "right") head.x += cellSize;
  else if (direction === "left") head.x -= cellSize;
  else if (direction === "up") head.y -= cellSize;
  else if (direction === "down") head.y += cellSize;

  // Collision with wall or itself
  if (
    head.x < 0 || head.x >= boardWidth ||
    head.y < 0 || head.y >= boardHeight ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver = true;
    return;
  }

  snake.push(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    score++;
    document.getElementById("score").innerText = score;
  } else {
    snake.shift();
  }
}

function draw() {
  ctx.clearRect(0, 0, boardWidth, boardHeight);

  if (gameOver) {
    ctx.fillStyle = "#ff4d4d";
    ctx.font = "40px monospace";
    ctx.fillText("GAME OVER", boardWidth / 2 - 120, boardHeight / 2);
    return;
  }

  // Draw snake with neon glow
  snake.forEach((segment) => {
    ctx.shadowColor = "#00e1ff";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#00e1ff";
    ctx.fillRect(segment.x, segment.y, cellSize, cellSize);
    ctx.strokeStyle = "#00b3cc";
    ctx.strokeRect(segment.x, segment.y, cellSize, cellSize);
  });

  // Draw food with glow
  ctx.shadowColor = "#ff007f";
  ctx.shadowBlur = 15;
  ctx.fillStyle = "#ff007f";
  ctx.fillRect(food.x, food.y, cellSize, cellSize);
}

function generateFood() {
  const foodX = Math.floor(Math.random() * (boardWidth / cellSize)) * cellSize;
  const foodY = Math.floor(Math.random() * (boardHeight / cellSize)) * cellSize;
  return { x: foodX, y: foodY };
}
