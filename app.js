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

// bodyContainer.style.height = window.innerHeight;
menu.style.height = window.innerHeight + "px"; 
// clearButtonContainer.style.height = bodyContainer.clientHeight - gridContainer.clientHeight - header.clientHeight;
menuOptionsContainer.style.height = ((window.innerHeight) - (0.1 * window.innerWidth) - (0.15 * window.innerHeight)) + "px";


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
    return;
}

hamburgerIcon.addEventListener("click", displayMenu);
xHamburgerIcon.addEventListener("click", closeMenu);