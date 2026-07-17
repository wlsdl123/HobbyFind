let nomberofstep = 10
let direction = "yes"
let box
function boxProgram() {
 nomberofstep = prompt ("몇 걸음 걸을까요?")
direction = prompt ("왼쪽으로 갈까요?")
let movestep = 1

if (direction === "yes") {
    while (movestep <= numberofstep) {
box.style.left = "500px"
    movestep++
}
} else{
    while (movestep <= numberofstep) {
box.style.left = "500px"
    movestep++
}
}
}

function main() {
    
box = document.querySelector("#box")

box.addEventListener("click", boxProgram)
}

document.addEventListener("DOMContentLoaded", main)
