
//select the canvas
const canvas = document.querySelector('#draw');
//we draw on the canvas context, not the canvas, select 2d
const ctx = canvas.getContext('2d');
//resize the canvas to fit the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set up our line, need colour, line end etc. Check on mdn
//TODO - review canvas
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.lineWidth = 50;

//Don't want to draw on mousemove, set flag
let isDrawing = false;
//Needs a start and stop point
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

//Using arrow fn instead, don't like that these don't hoist however
// function draw (e) {
//     console.log(e);
// }

letsDraw = (e) => {

    if (!isDrawing) return;
    ctx.strokeStyle = (`hsl(${hue}, 100%, 50%)`);
    ctx.beginPath();
    //start with an x and y an move to an x and y
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //update x and y when we're done drawing
    //TODO ES6 destructuring an array
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    
    if (hue > 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
     ctx.lineWidth++;   
    }
    else {
        ctx.lineWidth--;
    }
    
}

//before we start drawing (mousemove), update the x and y
canvas.addEventListener('mousedown', (e) => {
    
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', letsDraw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

