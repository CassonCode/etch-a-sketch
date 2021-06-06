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
const clearButton = document.querySelector(".clear-button");

let colorChoiceColorWheel = "on";
let colorChoiceRainbow = "off";
let isSelectedFadeToBlack = "off";

colorInputColorWheel.value = "rgb(0,0,0)";


function selectColorWheel() {
    colorInputRainbowButton.style.boxShadow = "none";
    colorInputRainbowButton.style.border = "3px solid black";
    colorInputRainbowButton.style.color = "black";
    colorInputColorWheel.style.boxShadow = "0 0 6px 3px white";
    colorInputColorWheel.style.border = "3px solid white";
    colorChoiceColorWheel = "on";
    colorChoiceRainbow = "off";
}
function selectRainbowButton() {
    colorInputColorWheel.style.boxShadow = "none";
    colorInputColorWheel.style.border = "3px solid black";
    colorInputRainbowButton.style.boxShadow = "0 0 6px 3px white";
    colorInputRainbowButton.style.border = "3px solid white";
    colorInputRainbowButton.style.color = "white";
    colorChoiceColorWheel = "off";
    colorChoiceRainbow = "on";
}

function selectFadeToBlack() {
    if (isSelectedFadeToBlack === "off") {
        fadeToBlackButton.style.boxShadow = "0 0 6px 3px white";
        fadeToBlackButton.style.border = "3px solid white";
        fadeToBlackButton.style.color = "white";
        isSelectedFadeToBlack = "on";
    }
    else {
        fadeToBlackButton.style.boxShadow = "none";
        fadeToBlackButton.style.border = "3px solid black";
        fadeToBlackButton.style.color = "black";
        isSelectedFadeToBlack = "off";
    }
}

// bodyContainer.style.height = window.innerHeight;
menu.style.height = window.innerHeight + "px"; 
// clearButtonContainer.style.height = bodyContainer.clientHeight - gridContainer.clientHeight - header.clientHeight;
menuOptionsContainer.style.height = ((window.innerHeight) - (0.1 * window.innerWidth) - (0.165 * window.innerHeight)) + "px";


// function makePixelDarker(tempColor) {
//     // let tempColor = this.style.backgroundColor;
//     if (tempColor[tempColor.length - 2] === "1") {
//         let slicedColor = tempColor.slice(0, -2);
//         slicedColor += "0.9)";
//         tempColor = slicedColor;
//         return tempColor;
//     }
//     else {
//         let slicedAValueUnder1 = parseInt(tempColor.slice(-4));
//         let slicedColorUnder1 = tempColor.slice(0, -4);
//         if (slicedAValueUnder1 >= 0.1) {
//             slicedAValueUnder1 -= 0.1;
//             slicedColorUnder1 += slicedAValueUnder1 + ")";
//             tempColor = slicedColorUnder1;
//             return tempColor;
//         }
//     }
// }

function colorPixel() {
    // if (isSelectedFadeToBlack === "off") {
        if (colorChoiceRainbow === "on") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            console.log(this.style.backgroundColor);
        }
        else {
            // this.style.backgroundColor = colorInputColorWheel.value + "";
            // let color = colorInputColorWheel.value + "";
            // new_col = color.replace(/rgb/i, "rgba");
            // new_col = new_col.replace(/\)/i,',1)');
            // this.style.backgroundColor = new_col + "";
            this.style.backgroundColor = colorInputColorWheel.value + "";
            console.log(this.style.backgroundColor);
        }
    // }
    // else {
    //     if (colorChoiceRainbow === "on" && (this.style.backgroundColor === "rgba(255,255,255,1)" || this.style.backgroundColor === "rgb(255, 255, 255)")) {
    //         let color = `rgba(${Math.random() * 254},${Math.random() * 254},${Math.random() * 254},1)`;
    //         this.style.backgroundColor = color;
    //         console.log(this.style.backgroundColor);
    //     }
    //     else if (colorChoiceRainbow === "on" && (this.style.backgroundColor !== "rgba(255,255,255,1)" || this.style.backgroundColor !== "rgb(255, 255, 255)")) {
    //         // let color = ;
    //         // // new_col = color.replace(/rgb/i, "rgba");
    //         // // new_col = new_col.replace(/\)/i,',0.75)');
    //         // // this.style.backgroundColor = new_col + "";
    //         // this.style.backgroundColor = color + "";
    //         makePixelDarker(this.style.backgroundColor);
    //         console.log(this.style.backgroundColor);
    //     }
    //     else if (colorChoiceRainbow === "off" && (this.style.backgroundColor === "rgba(255,255,255,1)" || this.style.backgroundColor === "rgb(255, 255, 255)") && colorInputColorWheel.value !== "rgb(255, 255, 255") {
    //         let color = colorInputColorWheel.value + "";
    //         new_col = color.replace(/rgb/i, "rgba");
    //         new_col = new_col.replace(/\)/i,',1)');
    //         this.style.backgroundColor = new_col + "";
    //         console.log(this.style.backgroundColor);
    //     }
    //     else  {
    //         makePixelDarker(this.style.backgroundColor);
    //         console.log(this.style.backgroundColor);
    //     }
    // }
}

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
        newGridDiv.style.backgroundColor = "rgba(255,255,255,1)";
    }
    let gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('click', colorPixel));
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
    if (gridLinesButton.classList.contains("grid-lines-on")) {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "1px solid black";
          }
    }
    else {
        for (let i = 0; i < gridContainer.children.length; i++) {
            gridContainer.children[i].style.border = "none";
          }
    }
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

function clearGrid() {
    let gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "white");
}


fadeToBlackButton.addEventListener("click", selectFadeToBlack);
colorInputColorWheel.addEventListener("input", selectColorWheel);
colorInputRainbowButton.addEventListener("click", selectRainbowButton);
let gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('click', colorPixel));
clearButton.addEventListener("click", clearGrid);
hamburgerIcon.addEventListener("click", displayMenu);
xHamburgerIcon.addEventListener("click", closeMenu);