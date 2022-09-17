

const container = document.querySelector(".container");


const p = document.createElement("p");
const data = document.createTextNode("Hey! i am red");
p.style.color = "red";
p.appendChild(data);
container.appendChild(p);



const h3 = document.createElement("h3");
const h3_data = document.createTextNode("I'm a blue h3!");
h3.style.color = "blue";
h3.appendChild(h3_data);
container.appendChild(h3);

const div = document.createElement("div");
const h1 = document.createElement("h1");
const h1_data = document.createTextNode("I'm in a div");
h1.appendChild(h1_data);

const p2 = document.createElement("p");
const p2_data = document.createTextNode("ME TOO!");
p2.appendChild(p2_data);

div.appendChild(h1);
div.appendChild(p2);

div.style.backgroundColor = "pink";
div.style.border = "2px solid";


container.appendChild(div);
