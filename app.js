const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d');

const gridSize = 20;
const snakeColor = 'green';
const foodColor = 'purple';

let snake = [{x:10, y:15}];

let food = {x:15, y:20};
let dx=1;
let dy=0;


function drawSnake(){
    snake.forEach(segment=>{
        ctx.fillStyle = snakeColor;
        ctx.fillRect(segment.x*gridSize,  segment.y*gridSize,  gridSize,  gridSize);
    });
}




function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x*gridSize,  food.y*gridSize,  gridSize,  gridSize);
}



function check(){

}




function update(){
    const head = {x:snake[0].x+dx , y:snake[0].y+dy};
    //.unshift -> hasah, .pop -> nemeh
    snake.unshift(head);
    if(head.x === food.x && head.y === food.y){
        food = {x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*20)};
    }else{
        snake.pop();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSnake();
    drawFood();
}

const gameLoop = setInterval(update, 150);

document.addEventListener('keydown', (event)=>{
    switch(event.key){
        case 'ArrowUp':
            dx=0;
            dy=-1;
            break;
        case 'ArrowDown':
            dx=0;
            dy=+1;
            break;
        case 'ArrowRight':
            dx=+1;
            dy=0;
            break;
        case 'ArrowLeft':
            dx=-1;
            dy=-0;
            break;
    }
});