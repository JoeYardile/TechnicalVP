class GameRound {
    constructor() {
        this.word = null;
        this.lives = 11;
        this.wins = 0;
        this.losses = 0;
        this.emptySpaces = 0;
    }
}

export function drawHangman(lives) {
    let ctx = document.getElementById("hangman").getContext("2d");
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    switch(lives) {
        case 10:
            ctx.moveTo(0, 400);
            ctx.lineTo(200, 400);
            ctx.stroke();
            break;
        case 9:
            ctx.moveTo(0, 400);
            ctx.lineTo(0, 0);
            ctx.stroke();
            break;
        case 8:
            ctx.moveTo(75, 400);
            ctx.lineTo(0, 325);
            ctx.stroke();
            break;
        case 7:
            ctx.moveTo(0, 0);
            ctx.lineTo(300, 0);
            ctx.stroke();
            break;
        case 6:
            ctx.moveTo(300, 0);
            ctx.lineTo(300, 25);
            ctx.stroke();
            break;
        case 5:
            ctx.arc(300,55,30,0,2*Math.PI);
            ctx.stroke();
            break;
        case 4:
            ctx.moveTo(300, 85);
            ctx.lineTo(300, 230);
            ctx.stroke();
            break;
        case 3:
            ctx.moveTo(300, 100);
            ctx.lineTo(275, 200);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(300, 100);
            ctx.lineTo(325, 200);
            ctx.stroke();
            break;
        case 1:
            ctx.moveTo(300, 230);
            ctx.lineTo(275, 340);
            ctx.stroke();
            break;
        case 0:
            ctx.moveTo(300, 230);
            ctx.lineTo(325, 340);
            ctx.stroke();
            break;
    }
}

export default (new GameRound());