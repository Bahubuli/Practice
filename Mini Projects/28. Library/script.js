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

read_status.forEach(btn => {

    btn.addEventListener("click", ()=>{

        btn.classList.remove("not_read");
        btn.classList.add("read");
        btn.textContent = "Read";

        btn.parentElement.status = "Read";

        const idx = btn.dataset.idx;
        const pos = myLibrary.findIndex(btn => btn.id == idx);

        myLibrary[pos].status = "Read";

        console.log(myLibrary);

    })
 })


let close = document.querySelectorAll(".close");
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





const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const newbook = {
        id: Math.random() * 500,
         name: bookname.value,
        Author: authorname.value,
        Pages: pagecount.value,
        status: checkbox.checked ? "Read" : "Not read"

    }
    myLibrary.push(newbook);

    console.log(newbook);
    const child = document.createElement("div");

        child.innerHTML =`

        <p class="name">${ newbook.name }</p>
        <p class="author">${ newbook.Author }</p>
        <p class="Page count">${ newbook.Pages }</p>
        <button class="read_status not_read" data-idx = ${ newbook.id }>${ newbook.status }</button>
        <button class = "close" data-idx = ${ newbook.id }>Close</button>

    `
        child.classList.add("book");
        child.classList.add(`${newbook.id}`);

    shelf.appendChild(child);
    resetread();
    resetclose();
    clearform();
})

function resetread()
{
    const read_status = document.querySelectorAll(".read_status");

    read_status.forEach(btn => {

    btn.addEventListener("click", ()=>{

        btn.classList.remove("not_read");
        btn.classList.add("read");
        btn.textContent = "Read";

        btn.parentElement.status = "Read";

        const idx = btn.dataset.idx;
        const pos = myLibrary.findIndex(btn => btn.id == idx);

        myLibrary[pos].status = "Read";

        console.log(myLibrary);

    })
 })

}

function resetclose()
{
    let close = document.querySelectorAll(".close");
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


}

function clearform()
{
    const form = document.querySelector(".form");
    bookname.value = '';
    authorname.value = '';
    pagecount.value = '';
    checkbox.checked = false;
}
