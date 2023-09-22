buttons = document.querySelectorAll(".btn_onclick");
buttons.forEach(function (button) {
    button.onclick = changeBackground;  
})

function changeBackground() {
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
}