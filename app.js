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
const gridLinesButton = document.querySelector(".grid-lines-button");
const fadeToBlackButton = document.querySelector("#fade-to-black-button");
const gridPieces = document.querySelector(".grid-pieces");
const gridBoxesInput = document.querySelector("#grid-boxes-input");



function selectColorWheel() {
    colorInputRainbowButton.style.boxShadow = "none";
    colorInputRainbowButton.style.border = "3px solid black";
    colorInputRainbowButton.style.color = "black";
    colorInputColorWheel.style.boxShadow = "0 0 6px 3px white";
    colorInputColorWheel.style.border = "3px solid white";
}
function selectRainbowButton() {
    colorInputColorWheel.style.boxShadow = "none";
    colorInputColorWheel.style.border = "3px solid black";
    colorInputRainbowButton.style.boxShadow = "0 0 6px 3px white";
    colorInputRainbowButton.style.border = "3px solid white";
    colorInputRainbowButton.style.color = "white";
}
colorInputColorWheel.addEventListener("input", selectColorWheel);
colorInputRainbowButton.addEventListener("click", selectRainbowButton);

// bodyContainer.style.height = window.innerHeight;
menu.style.height = window.innerHeight + "px"; 
// clearButtonContainer.style.height = bodyContainer.clientHeight - gridContainer.clientHeight - header.clientHeight;
menuOptionsContainer.style.height = ((window.innerHeight) - (0.1 * window.innerWidth) - (0.165 * window.innerHeight)) + "px";


function resetGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(gridSize) {
    resetGrid(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const newGridDiv = document.createElement("div");
        newGridDiv.classList = "grid-pieces";
        gridContainer.appendChild(newGridDiv);
        if (gridLinesButton.classList.contains("grid-lines-on")) {
            newGridDiv.style.border = "1px solid black";
        }
        else {
            newGridDiv.style.border = "none";
        }
    }
}

function changeGridSize() {
    let userBoxesNumber = parseInt(gridBoxesInput.value);
    if (userBoxesNumber > 100) {
        userBoxesNumber = 100;
    }
    else if (userBoxesNumber < 1) {
        userBoxesNumber = 1;
    }
    makeGrid(userBoxesNumber);
}

function selectGridLines() {
    let userBoxesNumber = parseInt(gridBoxesInput.value);
    if (userBoxesNumber > 100) {
        userBoxesNumber = 100;
        gridBoxesInput.value = "100";
    }
    else if (userBoxesNumber < 1) {
        userBoxesNumber = 1;
        gridBoxesInput.value = "1";
    }
    if (gridLinesButton.classList.contains("grid-lines-on")) {
        gridLinesButton.classList.remove("grid-lines-on");
        gridLinesButton.style.color = "black";
        gridLinesButton.style.border = "3px solid black";
        gridLinesButton.style.boxShadow = "none";
    }
    else {
        gridLinesButton.classList.add("grid-lines-on");
        gridLinesButton.style.color = "white";
        gridLinesButton.style.border = "3px solid white";
        gridLinesButton.style.boxShadow = "0 0 6px 3px white";
    }
    makeGrid(userBoxesNumber);
}

gridBoxesInput.addEventListener("change", changeGridSize);
gridLinesButton.addEventListener("click", selectGridLines);


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