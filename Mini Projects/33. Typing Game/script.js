const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgame = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultyEl = document.getElementById("difficulty");

const words = ["ask",
    "be",
    "become",
    "begin",
    "call",
    "can",
    "come",
    "could",
    "do",
    "feel",
    "find",
    "get",
    "give",
    "go",
    "have",
    "hear",
    "help",
    "keep",
    "know",
    "leave",
    "let",
    "like",
    "live",
    "look",
    "make",
    "may",
    "mean",
    "might",
    "move",
    "need",
    "play",
    "put",
    "run",
   "say",
    "see",
    "seem",
    "should",
    "show",
    "start",
    "take",
    "talk",
    "tell",
    "think",
    "try",
    "turn",
    "use",
    "want",
    "will",
    "work",
    "would"]

// Init word
let randomWord;

//Init score;
let score = 0;

//Init time
let time = 10;

let level = localStorage.getItem("level")!==null ? localStorage.getItem("level"):"medium"
text.focus();

difficultyEl.value = localStorage.getItem("level")!==null ? localStorage.getItem("level"):"medium"
// start counting down
console.log(level)
const timeInterval = setInterval(updateTime,1000);

function updateTime()
{
    time--;
    timeEl.innerHTML  = time+'s';

    if(time===0)
    {
        clearInterval(timeInterval);
        gameOver();
    }
}

function getRandomWord()
{
    return words[Math.floor(Math.random()*words.length)];
}

function addWordtoDom()
{
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
addWordtoDom();

function updateScore()
{
    score++;
    scoreEl.innerHTML = score
}

// Game over, show screen
function gameOver()
{
    endgame.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onClick = "location.reload()">Reload</button>`

    endgame.style.display = 'flex';
}

text.addEventListener("input", e=>{

    const insertedText = e.target.value;
    if(insertedText===randomWord)
    {
        addWordtoDom();
        e.target.value = "";
        updateScore()

        if(level==="Hard") time+=2;
        else if(level==="Medium") time+=5;
        else time+= 8;
    }
})


settingsBtn.addEventListener("click", ()=>{
    settings.classList.toggle("hide");
})

settingsForm.addEventListener("change",e=>{
    level = e.target.value;
    localStorage.setItem("level",level);
})
