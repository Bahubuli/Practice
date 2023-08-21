const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const results = document.querySelector(".results");

let result = "";

rock.addEventListener("click", () => {
    results.textContent = "";
    console.log("clicked");
    const options = ["paper", "scissors"]
    const res = options[Math.floor(Math.random() * 2)];
    if (res == "scissors") result = "lost"
    else result = "won";

    results.textContent = "You " + result;

});
scissor.addEventListener("click", () => {
    results.textContent = "";
    const options = ["paper", "rock"]
    const res = options[Math.floor(Math.random() * 2)];
    if (res == "paper") result = "lost"
    else result = "won";
    
    results.textContent = "You " + result;

});
paper.addEventListener("click", () => {
    results.textContent = "";
    const options = ["rock", "scissors"]
    const res = options[Math.floor(Math.random() * 2)];
    if (res == "rock") result = "lost"
    else result = "won";
    results.textContent = "You " + result;

});
