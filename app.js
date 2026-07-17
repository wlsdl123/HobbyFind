let currentLeftBoxPosition = 100
let numberofstep = 10
let direction = "yes"
let box

function boxProgram() {
 numberofstep = prompt("몇 걸음 걸을까요?")
direction = prompt("왼쪽으로 갈까요?")

let movestep = 1

if (direction === "yes") {
    while (movestep <= numberofstep) {
box.style.left = (currentLeftBoxPosition - movestep) + "px"
    movestep++
}

 currentLeftBoxPosition = currentLeftBoxPosition - movestep
} else{
    while (movestep <= numberofstep) {
box.style.left = (currentLeftBoxPosition + movestep) + "px"
    movestep++
}
 currentLeftBoxPosition = currentLeftBoxPosition + movestep
}
}

function main() {
    
box = document.querySelector("#box")

box.style.left = currentLeftBoxPosition + "px"

box.addEventListener("click", boxProgram)
}

document.addEventListener("DOMContentLoaded", main)
