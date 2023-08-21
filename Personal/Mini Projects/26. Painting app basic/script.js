const container = document.querySelector(".container");

const btn_container = document.createElement("div");
const grid_container = document.createElement("div");

btn_container.classList.add("btn-container");
grid_container.classList.add("grid-container");

let color = "red";

for (let i = 1; i <= 60; i++)
{
    for (let j = 1; j <= 60; j++)
    {
        const box = document.createElement("div");
        box.style.width = "10px";
        box.style.height = "10px";
        box.classList.add("grid" + i.toString() + "-" + j.toString());
        box.classList.add("box");
        grid_container.appendChild(box);
    }

}

container.appendChild(btn_container);
container.appendChild(grid_container);

const boxes = document.querySelectorAll(".box");



// Creating and handling buttons
const erase_btn = document.createElement("button");
erase_btn.classList.add("eraser");
erase_btn.textContent = "Erase";
btn_container.appendChild(erase_btn);






erase_btn.addEventListener("click", () => {

    erase_btn.classList.add("Erase");
 })

 // buttons handled

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}




// handling painting event
boxes.forEach(box => {

    box.addEventListener("dragstart", ()=>{


        if (erase_btn.classList.contains("Erase"))
        {
            box.style['background-color'] = "white";
        }
        else
        {
            box.style['background-color'] = random_rgba();
        }

    })

 })

 boxes.forEach(box => {

    box.addEventListener("dragover", ()=>{


         if (erase_btn.classList.contains("Erase"))
        {
            box.style['background-color'] = "white";
        }
        else
         {
             console.log(color)
            box.style['background-color'] = random_rgba();
        }

    })

 })
