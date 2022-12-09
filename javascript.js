/*This code allows the active drawing screen to take mouse input to draw within the container by changing the color of the pixels.
It will also include a "clear" method that will allow the grid to be reset to all white.
Pseudocode:
create grid using HTML and CSS flexbox
have grid square color change to black after hover
have it stay black after done hovering to maintain shapes
clear button turns all of the grid parts back to white */

const gridContainer = document.querySelector(".screen-container");
const clearButton = document.querySelector(".button");

function createGrid(rows, columns){
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', columns);
    for (let i = 0; i < (rows * columns); i++){
        let cell = document.createElement("div");
        cell.style.backgroundColor = "white";
        cell.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black"
        })
        gridContainer.appendChild(cell).className = "grid-item";
    }
    
}

function clearGrid(rows,columns){
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', columns);
    for (i = 0; i < (rows * columns); i++){
        let resetCell = document.querySelectorAll(".grid-item")[i];
        resetCell.style.backgroundColor = "white";
    }
}


createGrid(16,16);