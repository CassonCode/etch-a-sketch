// const actualHeight = window.innerHeight;
// const elementHeight = document.getElementById('control-height').clientHeight;

// const barHeight = elementHeight - actualHeight;

const bodyContainer = document.querySelector(".container-body");
const clearButtonContainer = document.querySelector(".container-clear-button");
const gridContainer = document.querySelector(".container-grid");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const hamburgerIcon = document.querySelector(".hamburger-button");
const xHamburgerIcon = document.querySelector(".x-hamburger-button");
const menuOptionsContainer = document.querySelector(".container-menu-options");
const colorInputColorWheel = document.querySelector("#input-color");
const colorInputRainbowButton = document.querySelector("#rainbow-button");
const gridLinesButton = document.querySelector("#grid-lines-button");
const fadeToBlackButton = document.querySelector("#fade-to-black-button");




function selectGridLines() {
    if (gridLinesButton.checked) {
        // gridLinesButton.checked = false;
        gridLinesButton.style.boxShadow = "none";
        gridLinesButton.style.height = "10px";
    }
    else {
        // gridLinesButton.checked = true;
        gridLinesButton.style.boxShadow = "0 0 4px 4px white";
        gridLinesButton.style.height = "100px";
    }
}
gridLinesButton.addEventListener("change", selectGridLines);


function selectColorWheel() {
    colorInputRainbowButton.style.boxShadow = "none";
    colorInputRainbowButton.style.border = "3px solid black";
    colorInputRainbowButton.style.color = "black";
    colorInputColorWheel.style.boxShadow = "0 0 6px 6px white";
    colorInputColorWheel.style.border = "3px solid white";
}
function selectRainbowButton() {
    colorInputColorWheel.style.boxShadow = "none";
    colorInputColorWheel.style.border = "3px solid black";
    colorInputRainbowButton.style.boxShadow = "0 0 6px 6px white";
    colorInputRainbowButton.style.border = "3px solid white";
    colorInputRainbowButton.style.color = "white";
}
colorInputColorWheel.addEventListener("input", selectColorWheel);
colorInputRainbowButton.addEventListener("click", selectRainbowButton);

// bodyContainer.style.height = window.innerHeight;
menu.style.height = window.innerHeight + "px"; 
// clearButtonContainer.style.height = bodyContainer.clientHeight - gridContainer.clientHeight - header.clientHeight;
menuOptionsContainer.style.height = ((window.innerHeight) - (0.1 * window.innerWidth) - (0.175 * window.innerHeight)) + "px";


function makeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newGridDiv = document.createElement("div");
        newGridDiv.classList = "grid-pieces";
        gridContainer.appendChild(newGridDiv);
    }
}

window.addEventListener("load", makeGrid(16));

function displayMenu() {
        menu.classList.add("showMenu");
        menu.classList.remove("hideMenu");
        return;
}

function closeMenu() {
    menu.classList.add("hideMenu");
    menu.classList.remove("showMenu");
    bodyContainer.style.filter = "none";
    return;
}

hamburgerIcon.addEventListener("click", displayMenu);
xHamburgerIcon.addEventListener("click", closeMenu);