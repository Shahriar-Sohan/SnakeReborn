// snake.js

export const Snake = {
    length: 1,

    head: {
        img: new Image(),
        size: { w: 25, h: 35 },
        Pos: { x: 0, y: 0 },
    },

    body: {
        img: new Image(),
        size: { w: 25, h: 36 },
        pos: [
            { x: 0, y: 0 }
        ]
    },

    tail: {
        img: new Image(),
        size: { w: 25, h: 35 },
        Pos: { x: 0, y: 0 },
    },

    draw(ctx) {

        this.head.img.src = './Assets/snakeHeadRight.png';
        this.body.img.src = './Assets/snakeBody.png'
        this.tail.img.src = './Assets/snakeTailRight.png';


        ctx.drawImage(this.head.img,
            this.head.Pos.x,
            this.head.Pos.y,
            this.head.size.w,
            this.head.size.h)
    }

};