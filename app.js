// const actualHeight = window.innerHeight;
// const elementHeight = document.getElementById('control-height').clientHeight;

// const barHeight = elementHeight - actualHeight;

const bodyContainer = document.querySelector(".container-body");
const clearButtonContainer = document.querySelector(".container-clear-button");
const gridContainer = document.querySelector(".container-grid");
const header = document.querySelector("header");


bodyContainer.style.height = window.innerHeight;
// clearButtonContainer.style.height = bodyContainer.clientHeight - gridContainer.clientHeight - header.clientHeight;


// function makeInitialGrid() {
//     makeGrid(16);
// }

// makeInitialGrid();


function makeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newGridDiv = document.createElement("div");
        newGridDiv.classList = "grid-pieces";
        gridContainer.appendChild(newGridDiv);
    }
}

window.addEventListener("load", makeGrid(16));