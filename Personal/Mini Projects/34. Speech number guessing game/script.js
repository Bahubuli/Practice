const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition;

recognition.start();

function getRandomNumber()
{
    return Math.floor(Math.random()*100)+1;
}

// Capture use speak
function onSpeak(e)
{
    const message = e.results[0][0].transcript;
    console.log(message);
    checkMessage(message)
}


function writeMessage(msg)
{
    msgEl.innerHTML = `
    <div>You Said: </div>
    <span>class = "box">${msg}</span>

    `
}

// validate

function checkMessage(msg)
{
    const num = +msg;
    if(Number.isNaN(msg))
    {
    msgEl.innerHTML = `<div></div>`
    return;
    }

    if(num>100 || num<1)
    {
        msgEl.innerHTML += `<div>Number must be between 1 and 100</div>`
        return;
    }

    if(num===randomNum)
    {
        document.body.innerHTML = `
        <h2>Congrats you have gusses the number! <br><br>
        It was ${num}</h2>
        <buttom class = "play-again" id = "play-again">Play Again</button>`
    }
    else if(num>randomNum)
    {
        msgEl.innerHTML = `<div> Go Lower</div>`
    }
    else
    {
        msgEl.innerHTML = `<div>Go Higher</div>`
    }
}


recognition.addEventListener('result', onSpeak);

// End event for SR

recognition.addEventListener("end", ()=> recognition.start());

document.body.addEventListener("click", (e)=>{
    if(e.target.id==="play-again")
    window.location.reload();
})
