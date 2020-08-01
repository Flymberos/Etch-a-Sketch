let container = document.getElementById("container");
let button = document.getElementById("reset-button");
let rgbbutton = document.getElementById("rgb-button");
let blackbutton = document.getElementById("black-color-button")

let rows = prompt("Enter how many rows you want","");
let cols = prompt("Enter how many columns you want","");

if(isNaN(rows) || isNaN(cols)){
    alert("Enter correct numbers.");
}

function createGrid(rows,cols){
    container.style.setProperty("--rows",rows);
    container.style.setProperty("--cols",cols);

    for(let i=0;i<(rows*cols);i++){
        let cell = document.createElement("div");
        cell.setAttribute("class","single-item");
        cell.classList.add("cellGrid");
        cell.addEventListener("mouseenter",opa)
        container.appendChild(cell);
    }
}

function opa(){
    this.style.background="black";
}

button.addEventListener("click",function(){
    let allCells = document.querySelectorAll(".cellGrid");
    for(let i=0;i<allCells.length;i++){
        allCells[i].style.background="white";
        allCells[i].removeEventListener("mouseenter",opa);
        allCells[i].addEventListener("mouseenter",function(){
            allCells[i].style.background = "black";
        });
    }
});

rgbbutton.addEventListener("click",function(){
    let allCells = document.querySelectorAll(".cellGrid");
    for(let i=0;i<allCells.length;i++){
        allCells[i].removeEventListener("mouseenter",opa);
        allCells[i].addEventListener("mouseenter",function(){
            allCells[i].style.background = getRandomColor();
        });
    }
});

blackbutton.addEventListener("click",function(){
    let allCells = document.querySelectorAll(".cellGrid");
    for(let i=0;i<allCells.length;i++){
        allCells[i].removeEventListener("mouseenter",opa);
        allCells[i].addEventListener("mouseenter",function(){
            allCells[i].style.background = "black";
        });
    }
});

function getRandomColor() {
    let randomColor ="#"+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}




createGrid(rows,cols);
opa();