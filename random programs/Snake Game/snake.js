//



function init()
{

    canvas = document.getElementById("mycanvas");
    w = h = canvas.height = canvas.width = 700;

    // pen is used to draw in canvas
    pen = canvas.getContext("2d");

    //cell size of snake
    cs = 50;
    gameover = false;
    food = getRandomFood();

    food_img = new Image();
    food_img.src = "mouse.png";


    snake = {
        init_len: 5,
        color: "blue",
        cells: [],
        direction: "right",

        createSnake: function () {

            for (var i = this.init_len; i > 0; i--)
                this.cells.push({ x: i, y: 0 });

        },

        drawSnake: function () {
            for (var i = 0; i < this.cells.length; i++)
            {
                pen.fillStyle = this.color;
                pen.fillRect(cs * this.cells[i].x, cs * this.cells[i].y, cs - 2, cs-2);
            }
        },

        updateSnake: function () {

            var headX = this.cells[0].x;
            var headY = this.cells[0].y;

            if (headX == food.x && headY == food.y)
            {
                console.log("Yum Yum");
                food = getRandomFood();

            }
            else
            {
                this.cells.pop();
            }



            var nextX, nextY;

            if (this.direction == "right")
            {
                nextX = headX + 1;
                nextY = headY;
            }
            else if (this.direction == "left")
            {
                nextX = headX - 1;
                nextY = headY;
            }
            else if (this.direction == "down")
            {
                nextX = headX ;
                nextY = headY + 1;
            }
             else
            {
                nextX = headX ;
                nextY = headY-1;
            }

            this.cells.unshift({ x: nextX, y: nextY });

            // logic for game over

            var lastx = Math.round(w / cs);
            var lasty = Math.round(h / cs);
            headX = this.cells[0].x;
            headY = this.cells[0].y;

            if (headX < 0 || headY < 0 || headX > lastx || headY > lasty)
            {
                gameover = true;
            }

        }

    };
    snake.createSnake();

    function keypressed(e) {
        if (e.key == "ArrowRight")
            snake.direction = "right";
        else if (e.key == "ArrowLeft")
            snake.direction = "left";
        else if (e.key == "ArrowDown")
            snake.direction = "down";
        else
            snake.direction = "up";
    }

    document.addEventListener('keydown', keypressed);

}


function getRandomFood()
{
    var foodx = Math.round(Math.random() * (w - cs) / cs);
    var foody = Math.round(Math.random() * (h - cs) / cs);

    var food = {
        x: foodx,
        y: foody,
        color:"red"
    }
    return food;
}
function draw() {
    // erase the old box
    pen.clearRect(0, 0, w, h);
    snake.drawSnake()

    pen.fillStyle = food.color;
    pen.drawImage(food_img,food.x*cs,food.y*cs,cs,cs);

}

function update() {
    snake.updateSnake();
}


function gameloop()
{
    if (gameover == true)
    {
        clearInterval(f);
        alert("Game Over");
        init();
    }
    draw();
    update();

}

init();
var f = setInterval(gameloop, 200);
