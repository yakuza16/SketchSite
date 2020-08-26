const DOMElementsGrabbers = {
    pencilColorInput: 'pencil',
    backgroundColorInput: 'colorBackground',
    pencilSizeInput: 'size',
    clearBtn: '[data-clear]',
    saveBtn: '[data-save]',
    sketchMenu: '[data-menu]',
}

const pencilColorInput = document.getElementById(DOMElementsGrabbers.pencilColorInput);
const backgroundColorInput = document.getElementById(DOMElementsGrabbers.backgroundColorInput);
const pencilSizeInput = document.getElementById(DOMElementsGrabbers.pencilSizeInput);;
const clearBtn = document.querySelector(DOMElementsGrabbers.clearBtn);
const saveBtn = document.querySelector(DOMElementsGrabbers.saveBtn);
const upperNav = document.querySelector(DOMElementsGrabbers.sketchMenu);

let pencilSize = pencilSizeInput.value
let pencilColor = pencilColorInput.value
let colorOfTheBackground = backgroundColorInput.value;

function setup() {
    const upperNavHeight = upperNav.getBoundingClientRect().height;
    createCanvas(window.innerWidth, window.innerHeight - upperNavHeight);
    background(colorOfTheBackground);
}

pencilColorInput.addEventListener('input', (e) => {
    pencilColor = e.target.value;
})

pencilSizeInput.addEventListener('input', (e) => {
    pencilSize = e.target.value
})

backgroundColorInput.addEventListener('input', (e) => {
    colorOfTheBackground = e.target.value;
    background(colorOfTheBackground);
})

const paint = () => {
    draw = () => {
        if (mouseIsPressed) {
            point(mouseX, mouseY);
            stroke(pencilColor)
            strokeWeight(pencilSize)
        }
    }
}

document.addEventListener('mousemove', paint())

clearBtn.addEventListener('click', () => background(colorOfTheBackground))

saveBtn.addEventListener('click', () => saveCanvas('mySketch', 'jpg'))

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(colorOfTheBackground);
}