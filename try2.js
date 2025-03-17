const gameBoard = document.getElementById('gameBoard');
const scoreDisplay = document.getElementById('scoreDisplay')
const resetBtn = document.getElementById('resetBtn')
const ctx = gameBoard.getContext('2d')
const gbWidth = gameBoard.width;
const gbHeight = gameBoard.height;
const foodColor = "red"
const unitSize = 24
const speed = 3
const objSize = 20
const snakeHeadSize = {w: 25, h: 35}
const snakeBodySize = {w: 25, h: 36}
const snakeTailSize = {w: 25, h: 35}




let score = 0
let xAxis = speed
let yAxis = 0


//snake spritesheet
const headRight = new Image()
const headLeft = new Image()
const headUp = new Image()
const headDown = new Image()
const tailRight = new Image()
const tailLeft = new Image()
const tailUp = new Image()
const tailDown = new Image()
const body = new Image()
headRight.src= "snakeHeadRight.png"
headLeft.src= "snakeHeadLeft.png"
headUp.src= "snakeHeadUp.png"
headDown.src= "snakeHeadDown.png"
tailRight.src = "snakeTailRight.png"
tailLeft.src = "snakeTailLeft.png"
tailUp.src = "snakeTailUp.png"
tailDown.src = "snakeTailDown.png"
body.src = "body.png"

let head = headRight
let tail = tailRight


let snake = {
    length: 3,
    body:[
        {x:48 , y: 0},
        {x:24 , y: 0},
        {x:0 , y: 0}
    ]
}


window.addEventListener("keydown",changeDirection)
resetBtn.addEventListener("click",resetGame)


function gameStart(){
    running = true
    scoreDisplay.textContent = score
    //style
    gameBoard.style.transform = "scale(1.005)";
    gameBoard.style.boxShadow = "0 15px 35px 5px rgba(123, 3, 3, 0.8), 0 5px 15px 0 rgba(0, 0, 0, 0.5)";
    nextTick();
}

function nextTick() {
    if (running) {
      clearBoard();
      drawSnake();
    //   drawFood();
      moveSnake();
  
      // Use requestAnimationFrame for the next frame
      requestAnimationFrame(nextTick);
    }
}

function clearBoard(){
    ctx.clearRect(0,0,gbWidth,gbHeight)
}

function drawSnake(){
    for(let i = 0; i < snake.body.length; i++){
        const segment = snake.body[i]
        if(i === 0){
            ctx.drawImage(head,
                          segment.x,
                          segment.y,
                          snakeHeadSize.w,
                          snakeHeadSize.h)
        }
        else if(i < snake.body.length - 1){
            ctx.drawImage(body,
                segment.x,
                segment.y,
                snakeBodySize.w,
                snakeBodySize.h)
        }
        else{
            ctx.drawImage(tail,
                segment.x,
                segment.y,
                snakeTailSize.w,
                snakeTailSize.h)
        }
    }
    
}

function moveSnake(){
    for(let i = 0; i < snake.body.length;i++){
        snake.body[i].x += xAxis
        snake.body[i].y += yAxis
    }
    
     //infinite Border
     if (snake.body[0].x > gbWidth+24) {
        let n = 0
        for(let i = 0; i < snake.body.length;i++){
            snake.body[i].x = n;
                n -= 24
        }
    }
    if (snake.body[0].x < 0) {
        let n = gbWidth
        for(let i = 0; i < snake.body.length;i++){
            snake.body[i].x = n;
                n += 24
        }
    }
    if (snake.body[0].y > gbHeight) {
        for(let i = 0; i < snake.body.length;i++){
            snake.body[i].y = 0;
        }
    }
    if (snake.body[0].y < 0) {
        for(let i = 0; i < snake.body.length;i++){
            snake.body[i].y = gbHeight;
        }
    }
    
            
    // if(head.x === foodX && head.y === foodY){
    //     score += 1
    //     scoreDisplay.textContent = score
    //     createFood();
    // }else{
    //     for(let i = 0;i < 2;i++){
    //         snake.pop()
    //     }
    // }

    
}


window.addEventListener("keydown",changeDirection)
resetBtn.addEventListener("click",resetGame)

function changeDirection(e){
    const keyPressed = e.keyCode
    const SPACEBAR = 32;
    const UP = 38;
    const DOWN = 40;
    const LEFT = 37;
    const RIGHT = 39;
    switch (keyPressed) {
        case UP:
            console.log("up")
            yAxis = -speed
            xAxis = 0
            head = headUp
            tail = tailUp
            break;

        case DOWN:
            console.log("down")
            yAxis = speed
            xAxis = 0
            head = headDown
            tail = tailDown
            break;

        case LEFT:
            console.log("left")
            yAxis = 0
            xAxis = -speed
            head = headLeft
            tail = tailLeft
            break;

        case RIGHT:
            console.log("right")
            yAxis = 0
            xAxis = speed
            head = headRight
            tail = tailRight
            break;
        case SPACEBAR:
            gameStart()
            break;
        
        default:
            break;
    }
}

function resetGame(){}

console.log("Script is running");
