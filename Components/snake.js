// snake.js


export const Snake = {

    length: 3,

    direction: {
        up: false,
        down: false,
        left: false,
        right: true
    },


    head: {
        img: new Image(),
        size: { w: 25, h: 35 },
        pos: { x: 80, y: 0 },
    },

    body: {
        img: new Image(),
        size: { w: 25, h: 36 },
        pos: [
            { x: 60, y: 0 }, 
            { x: 40, y: 0 }, 
            { x: 20, y: 0 }
        ]
    },

    tail: {
        img: new Image(),
        size: { w: 25, h: 35 },
        pos: { x: 0, y: 0 },
    },

    init(){

        this.head.img.src = './Assets/snakeHeadRight.png';
        this.body.img.src = './Assets/snakeBody.png';
        this.tail.img.src = './Assets/snakeTailRight.png';
    },

    draw(ctx) {

        ctx.drawImage(
            this.head.img,
            this.head.pos.x,
            this.head.pos.y,
            this.head.size.w,
            this.head.size.h
        )

        for(let i = 0; i < this.length;i++){
            ctx.drawImage(
                this.body.img,
                this.body.pos[i].x,
                this.body.pos[i].y,
                this.body.size.w,
                this.body.size.h
            )
        }  

        ctx.drawImage(
            this.tail.img,
            this.tail.pos.x,
            this.tail.pos.y,
            this.tail.size.w,
            this.tail.size.h
        )
    },

    move(speed, gameBoard) {
        if (this.head.pos.x > gameBoard.width + 30) {
            this.head.pos.x = 0;
    
            let n = -20;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].x = n;
                n -= 20;
            }
    
            this.tail.pos.x = this.body.pos[this.length - 1].x - 20;
        } 
        else if (this.head.pos.y > gameBoard.height) {
            let n = -30;
            this.head.pos.y = n;
    
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].y = n; 
            }
    
            this.tail.pos.y = this.body.pos[this.length - 1].y ;
        } 
        else if (this.head.pos.x < -30) {
            this.head.pos.x = gameBoard.width;
    
            let n = gameBoard.width - 20;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].x = n;
                n -= 20;
            }
    
            this.tail.pos.x = this.body.pos[this.length - 1].x - 20;
        } 
        else if (this.head.pos.y < -30) {
            let n = gameBoard.height;

            this.head.pos.y = n;

            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].y = n;
            }
    
            this.tail.pos.y = this.body.pos[this.length - 1].y ;
        }
        
        
        // Move based on direction
        if (this.direction.up) {
            this.head.pos.y -= speed;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].y -= speed;
            }
            this.tail.pos.y -= speed;
        } else if (this.direction.down) {
            this.head.pos.y += speed;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].y += speed;
            }
            this.tail.pos.y += speed;
        }

        if (this.direction.left) {
            this.head.pos.x -= speed;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].x -= speed;
            }
            this.tail.pos.x -= speed;
        } else if (this.direction.right) {
            this.head.pos.x += speed;
            for (let i = 0; i < this.length; i++) {
                this.body.pos[i].x += speed;
            }
            this.tail.pos.x += speed;
        }
        

    },




};