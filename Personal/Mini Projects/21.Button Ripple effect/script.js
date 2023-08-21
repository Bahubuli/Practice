const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log(xInside, yInside)

        const circle = document.createElement("span")
        circle.classList.add("circle")

        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        this.appendChild(circle)

        setTimeout(()=> circle.remove(),500)
    })
})

//1. this will now work with arrow function
//2. we need to remove the added spans from the dom
