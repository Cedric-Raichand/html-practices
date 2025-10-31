const number1 = document.getElementById("roll");
const number2 = document.getElementById("target");
let number3;

number1.onclick = function(){
    number3 = Math.round(Math.random()*5)+1;
    number2.textContent = number3;


}