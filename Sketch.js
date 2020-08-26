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

const getDOMElements = () => {
    pencilColorInput = document.getElementById(DOMElementsGrabbers.pencilColorInput);
    backgroundColorInput = document.getElementById(DOMElementsGrabbers.backgroundColorInput);
    pencilSizeInput = document.getElementById(DOMElementsGrabbers.pencilSizeInput);
    clearBtn = document.querySelector(DOMElementsGrabbers.clearBtn);
    saveBtn = document.querySelector(DOMElementsGrabbers.saveBtn);
    upperNav = document.querySelector(DOMElementsGrabbers.sketchMenu);
}

document.addEventListener('DOMContentLoaded', getDOMElements())

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


let pencilSize = pencilSizeInput.value
let pencilColor = pencilColorInput.value
let colorOfTheBackground = backgroundColorInput.value;

pencilSizeInput.addEventListener('input', (e) => {
    pencilSize = e.target.value
})

backgroundColorInput.addEventListener('input', (e) => {
    colorOfTheBackground = e.target.value;
    background(colorOfTheBackground);
})

pencilColorInput.addEventListener('input', (e) => {
    pencilColor = e.target.value;
})

function setup() {
    const upperNavHeight = upperNav.getBoundingClientRect().height;
    createCanvas(window.innerWidth, window.innerHeight - upperNavHeight);
    background(colorOfTheBackground);
}

const paint = ()=>{
    draw = () => {
        if (mouseIsPressed) {
            point(mouseX, mouseY); 
            stroke(pencilColor)
            strokeWeight(pencilSize)
        }
        
    }
}

document.addEventListener('mousemove', paint())