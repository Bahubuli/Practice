const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUl= document.getElementById("todos");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo()
 })


function addTodo(todo) {

    let todotext = input.value;

    if (todo) todotext = todo.text;

    if (todotext)
    {
        const todoEl = document.createElement("li");

        if (todo && todo.completed)
        {
            todoEl.classList.add("completed");
        }

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.classList.toggle("completed");

            todoEl.remove();
         })

        todoEl.innerText = todotext;

        todoUl.append(todoEl);
        input.value = '';
    }
}
