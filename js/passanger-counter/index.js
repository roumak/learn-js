
let countEl = document.getElementById("counter");
let count = 0;
function increment(){
    console.log("increment");
    count=count+1;
    countEl.innerText = count 
}

function reset(){
    console.log("reset")
    countEl.innerText = 0;
}