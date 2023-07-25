// let string="";
// let buttons=document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         console.log(e.target);
//         string=string+e.target.innerHTML;
//         document.querySelector('input').value=string;
//     })
// })
let display = document.getElementById("disp");

function push(value) {
  display.value += value;
}
function del(){
    display.value=display.value.slice(0,-1);
}
function pop() {
  display.value = "";
}

function solve() {
  try {
    display.value = eval(display.value);
  } 
  catch (error) {
    display.value ="Error";
}
}