
let countEl = document.getElementById("counter");
let prevEl = document.getElementById("prev");
let count = 0;
function increment(){
    console.log("increment");
    count=count+1;
    countEl.innerText = count; 
}

function save(){
    console.log(prevEl.innerText);
    prevEl.textContent += count + " - " ;
    countEl.textContent = 0;
    count = 0;
}