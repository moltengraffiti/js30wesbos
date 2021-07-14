
//select the canvas
const canvas = document.querySelector('#draw');
const colourPick = document.querySelector('#picker');
const lineSize = document.querySelector('#lineSize');
//we draw on the canvas context, not the canvas, select 2d
const ctx = canvas.getContext('2d');

//set up our line, need colour, line end etc. Check on mdn
//TODO - review canvas
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
//ctx.lineWidth = 5;

//Don't want to draw on mousemove, set flag
let isDrawing = false;
//Needs a start and stop point
let lastX = 0;
let lastY = 0;

letsDraw = (e) => {

    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
}

colourPick.addEventListener('input', () => {
    ctx.strokeStyle = colourPick.value;
});

lineSize.addEventListener('input', () => {
    ctx.lineWidth = lineSize.value;
})

//before we start drawing (mousemove), update the x and y
canvas.addEventListener('mousedown', (e) => {  
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});



canvas.addEventListener('mousemove', letsDraw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




