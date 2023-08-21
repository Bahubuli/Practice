

const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach((panel) =>
    {
    panel.addEventListener('click' ,()=> {
        removeActiveClasses();
        console.log("2");
        panel.classList.add('active');

    })

})

function removeActiveClasses() {

    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
