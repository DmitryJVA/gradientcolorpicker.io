var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")


function setGradient ()
{
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    css.textContent = body.style.background + ";"
}


// click, mouseenter, mouseleave, mouseover, mouseout, mousemove, keydown, keyup, keypress

// an "oninput" event listener is added to the color1 and color2 input elements but this 
// can also be done in the HTML file
// but you need to seperate the function from the event listener

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)