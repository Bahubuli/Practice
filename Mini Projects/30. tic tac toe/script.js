
function game()
{
    const boxes = document.querySelectorAll(".box");
    const playerturn = document.querySelector(".turn");
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");
    let board = ["", "", "", "", "", "", "", "", ""];

    let turn = ["X", "O"][Math.floor(Math.random() * 2)];

    function move(player, pos)
    {
        board[pos] = player;
    }

    function validMove(pos)
    {
        return board[pos] === "";
    }

    function resetGame()
    {
        turn = ["X", "O"][Math.floor(Math.random() * 2)];
        board = ["", "", "", "", "", "", "", "", ""];
        boxes.forEach(box => { box.textContent = ""; })
        playerturn.textContent = "Let's start the game"
        result.textContent = "";
    }
    function checkWinner()
    {
        if (board[0] === board[1] && board[1] === board[2] && board[2]!=="")
        {
            result.textContent = `Player ${ turn } Won 🎉`
            return true;
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[5]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[8]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
         else if (board[0] === board[3] && board[3] === board[6] && board[6]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[7]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
         else if (board[2] === board[5] && board[5] === board[8] && board[8]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[8]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[6]!=="")
        {
            result.textContent = `Player ${turn} Won 🎉`
            return true;
        }

        return false;
    }

    function startGame()
    {
        boxes.forEach(box => {

            box.addEventListener("click", function ()
            {

                playerturn.textContent = `Player ${turn==="X" ? "O" : "X"}'s turn now`
                const idx = box.dataset.id;
                if (validMove(idx))
                {
                    box.textContent = turn;
                    board[idx] = turn;

                    if (checkWinner())
                    {
                        setTimeout(() => { resetGame() },3000 );
                    }
                    turn = turn == "X" ? "O" : "X";

                }
                else
                {
                    alert("Invalid Move")
                }


             })
         })
    }

    reset.addEventListener("click", () => {
    resetGame();
    })

    return {
        startGame
    }

}


const newgame = game();
newgame.startGame();
