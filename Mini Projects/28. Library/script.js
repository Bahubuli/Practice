let myLibrary = [
    {
           id:2,
        name: "house of dragon",
        Author: "George RR Martin",
        Pages: 220,
        status: "Not read"
    },
    {   id:6,
        name: "Song of ice and fire",
        Author: "George RR Martin",
        Pages: 200,
        status: "Not read"
    },
    {   id:32,
        name: "Song of fire and blood",
        Author: "George RR Martin",
        Pages: 200,
        status: "Not read"
    },
    {   id:4,
        name: "The Hobbit",
        Author: "JRR tolkin",
        Pages: 250,
        status: "Not read"
    },
    {   id:12,
        name: "Rudest book ever",
        Author: "shwetabh",
        Pages: 200,
        status: "Not read"
    },
];

// book objects will be stored
// here in this array

function Book()
{

}

function addBookToLibrary()
{

}

const shelf = document.querySelector(".shelf");

function resetLibrary() {

    myLibrary.forEach((book, idx) => {

        const child = document.createElement("div");

        child.innerHTML =`

        <p class="name">${ book.name }</p>
        <p class="author">${ book.Author }</p>
        <p class="Page count">${ book.Pages }</p>
        <button class="read_status not_read" data-idx = ${ book.id }>${ book.status }</button>
        <button class = "close" data-idx = ${ book.id }>Close</button>

    `
        child.classList.add("book");

        child.classList.add(`${book.id}`);
        shelf.appendChild(child);

    })
}

resetLibrary();

const read_status = document.querySelectorAll(".read_status");

read_status.forEach((btn) => {

    btn.addEventListener("click", ()=>{

        btn.classList.remove("not_read");
        btn.classList.add("read");
        btn.textContent = "Read";
        const idx = btn.datase
        btn.parentElement.status = "Read";
        console.log(myLibrary);

    })
 })

const close = document.querySelectorAll(".close");

close.forEach(btn => {

    btn.addEventListener("click", () => {

        // finding index of the object in the array
        // using data attribute
        const idx = btn.dataset.idx;
        const pos = myLibrary.findIndex(btn => btn.id === idx);
        myLibrary.splice(pos, 1);
        btn.parentElement.remove();

     })
 })


const add_book = document.querySelector(".add_book");
const input_form = document.querySelector(".input_form");
add_book.addEventListener("click", () => {

    const form = document.createElement("form");

    // add_sign.style.height = "0px"



})

const allinputs = document.querySelectorAll("input_form");

allinputs.forEach(form => {
    console.log(form);
 })
