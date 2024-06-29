const box = document.querySelector("#container");
const userAsk = document.querySelector("#girdSizer");
const userDelete = document.querySelector("#girdDelete");

let boxSize= 500;
let squareTimes=16;

function gridMaker(size){
    for (let a = 0; a<size; a++){
    for(let i = 0; i<size; i++){
        const square = document.createElement("div");
        box.style.width= boxSize+"px";
        box.style.height = box.style.width;
        square.style.width= (boxSize/size)+"px";
        square.style.height= square.style.width;

        square.classList.toggle("square");
        square.addEventListener("mouseover",()=>{
            square.classList.add("highlight");
        });
        box.appendChild(square);
    }}
}

gridMaker(squareTimes);

function checkNewSize(){
    squareTimes= parseInt(prompt("how big should the grid be?"));
    if(squareTimes>100 ||isNaN(squareTimes)){
        console.log(squareTimes);
        console.log(typeof squareTimes);
        checkNewSize();

    }
}

function changeGrid(){
    const squareAll = document.querySelectorAll(".square");
    checkNewSize();
    squareAll.forEach((div) =>{
    box.removeChild(div); 
    });

   
   gridMaker(squareTimes);
}


function resetGrid(){
    const squareAll = document.querySelectorAll(".square");
    squareAll.forEach((div) =>{
    div.classList.remove("highlight"); 
    });
}

userAsk.addEventListener("click",changeGrid);
userDelete.addEventListener("click",resetGrid);


