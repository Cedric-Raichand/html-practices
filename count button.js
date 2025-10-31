const decrease = document.getElementById("decreasebtn");
const increase = document.getElementById("increasebtn");
const reset = document.getElementById("resetbtn");
const countlabel = document.getElementById("n01");

let count = 0;

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
    
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
    
}

increase.onclick = function(){
    count++;
    countlabel.textContent = count;
    
}