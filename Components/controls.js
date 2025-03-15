import gameStart from "../script";


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
            
            break;

        case DOWN:
            console.log("down")
            yAxis = speed
            xAxis = 0
            
            break;

        case LEFT:
            console.log("left")
            yAxis = 0
            xAxis = -speed
            
            break;

        case RIGHT:
            console.log("right")
            yAxis = 0
            xAxis = speed
        
            break;
        case SPACEBAR:
            gameStart()
            break;
        
        default:
            break;
    }
}

export default changeDirection