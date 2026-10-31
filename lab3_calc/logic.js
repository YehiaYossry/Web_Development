const keypad=document.getElementById("keypad");
const display=document.getElementById("display");
let first_operand=null;
let operator=null;


keypad.addEventListener("click",(e)=>{
    const button = e.target.closest("button");
     if (!button || !keypad.contains(button)) return;
})

function changeDisplay(display){
display.textContent = value
}

