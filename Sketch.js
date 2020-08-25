class Sketch {

    pencilColorInput = null;
    backgroundColorInput = null;
    pencilSizeInput = null;
    clearBtn = null;
    saveBtn = null;
    canvas = null;
    canvasSizesInfo = null;


    DOMElements = {
        pencilColorInput: 'pencil',
        backgroundColorInput: 'background',
        pencilSizeInput: 'size',
        clearBtn: '[data-clear]',
        saveBtn: '[data-save]',
        canvas: '[data-canvas]',
    }
    initializeApp() {
        this.getDOMElements();
        this.getCanvasSizes();
        console.log(this.canvasSizesInfo);
    }
    getDOMElements() {
        this.pencilColorInput = document.getElementById(this.DOMElements.pencilColorInput);
        this.backgroundColorInput = document.getElementById(this.DOMElements.backgroundColorInput);
        this.pencilSizeInput = document.getElementById(this.DOMElements.pencilSizeInput);
        this.clearBtn = document.querySelector(this.DOMElements.clearBtn);
        this.saveBtn = document.querySelector(this.DOMElements.saveBtn);
        this.canvas = document.querySelector(this.DOMElements.canvas);
    }
    getCanvasSizes() {
        this.canvasSizesInfo = this.canvas.getBoundingClientRect()
    }
}

const sketch = new Sketch()
sketch.initializeApp()