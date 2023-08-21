const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");


const animated_bgs  = document.querySelectorAll(".animated-bg");
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text");



function getData()
{
    header.innerHTML = `<img src = "https://source.unsplash.com/random/900x700/?fruit" />`
    title.innerHTML = ` Lorem ipsum dolor sit amet`
    excerpt.innerHTML =    `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos modi odit necessitatibus praesentium fugit.`;

    profile_img.innerHTML =`   <img src = "https://randomuser.me/api/portraits/men/45.jpg">`
    name.innerHTML = "john done";
    date.innerHTML = "Oct 23 2022";

    animated_bgs.forEach( bg => bg.classList.remove("animated-bg"))
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg-text'))
}

setTimeout(getData, 1500);
