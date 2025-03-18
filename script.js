import changeDirection from "./Components/controls.js";
import { gameConfig } from "./Components/gameConfig.js";
import { Snake } from "./Components/snake.js";


window.addEventListener("keydown", changeDirection);



function gameStart() {
    const { gameBoard, scoreDisplay, ctx, speed, score } = gameConfig;

    gameConfig.gameRunning = true;  
    scoreDisplay.textContent = score;

    // Apply style to gameBoard
    gameBoard.style.transform = "scale(1.005)";
    gameBoard.style.boxShadow = "0 15px 35px 5px rgba(123, 3, 3, 0.8), 0 5px 15px 0 rgba(0, 0, 0, 0.5)";
    
    Snake.init();
    nextTick(ctx, gameBoard, speed);  
}

function clearBoard( ctx, gameBoard ) {
    ctx.clearRect(0, 0, gameBoard.width, gameBoard.height);  
}

function nextTick( ctx, gameBoard, speed ) {
    if (gameConfig.gameRunning) {
        clearBoard( ctx, gameBoard ); 
        Snake.draw(ctx);  
        Snake.move(speed, gameBoard )

        
        requestAnimationFrame(() => nextTick( ctx, gameBoard, speed ));
    }
}

export default gameStart;