const box = document.querySelector("#container");

let boxSize= 500;
let squareTimes=16;

for (let a = 0; a<squareTimes; a++){
 for(let i = 0; i<squareTimes; i++){
    const square = document.createElement("div");
    box.style.width= boxSize+"px";
    box.style.height = box.style.width;
    square.style.width= (boxSize/squareTimes)+"px";
    square.style.height= square.style.width;
    square.classList.toggle("square");
    square.addEventListener("mouseover",()=>{
        square.classList.add("highlight");
    })
    box.appendChild(square);
 }}


