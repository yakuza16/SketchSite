const DOMElementsGrabbers = {
    pencilColorInput: 'pencil',
    backgroundColorInput: 'colorBackground',
    pencilSizeInput: 'size',
    clearBtn: '[data-clear]',
    saveBtn: '[data-save]',
    sketchMenu: '[data-menu]',
}

let pencilColorInput = null;
let backgroundColorInput = null;
let pencilSizeInput = null;
let clearBtn = null;
let saveBtn = null;
let upperNav = null;
let colorOfTheBackground = null;
let pencilColor = null;
let pencilSize = null;

const getDOMElements = () => {
    pencilColorInput = document.getElementById(DOMElementsGrabbers.pencilColorInput);
    backgroundColorInput = document.getElementById(DOMElementsGrabbers.backgroundColorInput);
    pencilSizeInput = document.getElementById(DOMElementsGrabbers.pencilSizeInput);
    clearBtn = document.querySelector(DOMElementsGrabbers.clearBtn);
    saveBtn = document.querySelector(DOMElementsGrabbers.saveBtn);
    upperNav = document.querySelector(DOMElementsGrabbers.sketchMenu);
}

const initializeApp = () => {
    getDOMElements();
}



document.addEventListener('DOMContentLoaded', initializeApp())

pencilSizeInput.addEventListener('input', (e) => {
    pencilSize = e.target.value
})

backgroundColorInput.addEventListener('input', (e) => {
    colorOfTheBackground = e.target.value;
    draw = () => {
        background(colorOfTheBackground);
    }
})

pencilColorInput.addEventListener('input', (e) => {
    pencilColor = e.target.value;

    draw = () => {
        if (mouseIsPressed) {
            fill(pencilColor);
        }
        ellipse(mouseX, mouseY, pencilSize, pencilSize);
    }

})

function setup() {
    const upperNavHeight = upperNav.getBoundingClientRect().height;
    createCanvas(window.innerWidth, window.innerHeight - upperNavHeight);
}