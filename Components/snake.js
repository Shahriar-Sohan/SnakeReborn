// snake.js


export const Snake = {
    length: 1,

    direction: {
        up: false,
        down: false,
        left: false,
        right: true
    },


    head: {
        img: new Image(),
        size: { w: 25, h: 35 },
        pos: { x: 40, y: 0 },
    },

    body: {
        img: new Image(),
        size: { w: 25, h: 36 },
        pos: [
            { x: 20, y: 0 }
        ]
    },

    tail: {
        img: new Image(),
        size: { w: 25, h: 35 },
        pos: { x: 0, y: 0 },
    },

    draw(ctx) {

        this.head.img.src = './Assets/snakeHeadRight.png';
        this.body.img.src = './Assets/snakeBody.png';
        this.tail.img.src = './Assets/snakeTailRight.png';


        ctx.drawImage(this.head.img,
            this.head.pos.x,
            this.head.pos.y,
            this.head.size.w,
            this.head.size.h)

        ctx.drawImage(this.body.img,
            this.body.pos[0].x,
            this.body.pos[0].y,
            this.body.size.w,
            this.body.size.h)

        ctx.drawImage(this.tail.img,
            this.tail.pos.x,
            this.tail.pos.y,
            this.tail.size.w,
            this.tail.size.h)
    },

    move(speed, gameBoard) {
        if (this.head.pos.x > gameBoard.width + 30) {
            this.head.pos.x = 0
            this.body.pos[0].x = -20
            this.tail.pos.x = -40
        }else if (this.head.pos.y > gameBoard.height) {
            this.head.pos.y = -30
            this.body.pos[0].y = -30
            this.tail.pos.y = -30
        }else if (this.head.pos.x < -30 ) {
            this.head.pos.x = gameBoard.width
            this.body.pos[0].x = gameBoard.width - 20
            this.tail.pos.x = gameBoard.width - 40
        } else if (this.head.pos.y < - 30) {
            this.head.pos.y = gameBoard.height
            this.body.pos[0].y = gameBoard.height 
            this.tail.pos.y = gameBoard.height 
        }
        
        
        // Move based on direction
        if (this.direction.up) {
            this.head.pos.y -= speed;
            this.body.pos[0].y -= speed;
            this.tail.pos.y -= speed;
        } else if (this.direction.down) {
            this.head.pos.y += speed;
            this.body.pos[0].y += speed;
            this.tail.pos.y += speed;
        }

        if (this.direction.left) {
            this.head.pos.x -= speed;
            this.body.pos[0].x -= speed;
            this.tail.pos.x -= speed;
        } else if (this.direction.right) {
            this.head.pos.x += speed;
            this.body.pos[0].x += speed;
            this.tail.pos.x += speed;
        }
        

    },




};