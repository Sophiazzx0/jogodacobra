 //tamanho dos blocos do jogo
 const canvas = document.getElementById('gameCanvas');
 const  ctx = canvas.getContext('2d');

 const gridsize = 20;
 const canvaSize = 400;

 //tamanho da cobra
 let snake = [{ x: gridSize * 5, y: gridSize * 5 }];
 let direction = { x : 1, y: 0 };

 //tamanho da comida
 let food = { x : gridSize * 10, y: gridSize* 10 } ;
 
//variavel para desenhar a cobra
 let gameInterval;

//função para desenhar a cobra
 function drawSnake() {
      ctx.fillStyle = 'lime';
      snake.forEach(part=> {
        ctx.fillRect(part.x, part.y, gridsize, gridsize)
      });
 }

 //desenhando comida 
 function drawfood() {
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, gridsize,gridsize);
 }
 
//movendo a cobra
function moveSnake() {
      const head = {x>: snake[0].x * direction.x * gridsize,
            y: snake[0].y * direction.y * gridsize};
        snake unshift(head);
}

//verifica se a cobra comeu a comida
if (head.x === food.x && head.y === food.y) {
    placefood();
} else{
    snake.pop
}
 if (head.x < 0) || head.y < 0|| head.x >= canvaSize || head.y >=canvaSize
    clearInterval(gameInterval);
    alert('game Over');
}
}

//função pra ver se colidiu com si mesma 
function isnakeColli

