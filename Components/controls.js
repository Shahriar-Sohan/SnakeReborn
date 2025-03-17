import { gameConfig } from "./gameConfig.js";
import { Snake } from "./snake.js";
import gameStart from "../script.js";

function changeDirection(e) {
    const { direction } = Snake; 

    const keyPressed = e.keyCode;
    const SPACEBAR = 32;
    const UP = 38;
    const DOWN = 40;
    const LEFT = 37;
    const RIGHT = 39;

    switch (keyPressed) {
        case UP:
            console.log("up");
            if (!direction.down) {
                direction.up = true;
                direction.down = false;
                direction.left = false;
                direction.right = false;
            }
            break;

        case DOWN:
            console.log("down");
            if (!direction.up) {
                direction.down = true;
                direction.up = false;
                direction.left = false;
                direction.right = false;
            }
            break;

        case LEFT:
            console.log("left");
            if (!direction.right) {
                direction.left = true;
                direction.up = false;
                direction.down = false;
                direction.right = false;
            }
            break;

        case RIGHT:
            console.log("right");
            if (!direction.left) {
                direction.right = true;
                direction.up = false;
                direction.down = false;
                direction.left = false;
            }
            break;

        case SPACEBAR:
            if (!gameConfig.gameRunning) {
                gameStart();
            }
            break;

        default:
            break;
    }
}

export default changeDirection;