const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea");
tagsEl.innerHTML = '';
textarea.focus();

textarea.addEventListener("keyup", (e) => {

    createTags(e.target.value);

    if (e.key === "Enter")
    {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelector();
    }
});

function createTags(input) {

    const tags = input.split(",")
        .filter(tag => tag.trim() != '')
        .map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {

        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
     });
}


function randomSelector()
{
    const times = 30;

    const interval = setInterval(() => {

        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unhighlightTag(randomTag);
        },100);

    }, 100);

    setTimeout(() => {

        setTimeout(() => {

            const randomTag = pickRandomTag();
            highlightTag(randomTag);

        },100)

        clearInterval(interval);
     }, times*10);
}

function pickRandomTag()
{
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag)
{
    tag.classList.add("highlight");
}

function unhighlightTag(tag)
{
    tag.classList.remove("highlight");
}
