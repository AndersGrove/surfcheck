document.addEventListener("DOMContentLoaded", initSlider, false);
document.addEventListener("DOMContentLoaded", initTides, false);




// Initialise Flickety slider
function initSlider() {
  var elem = document.querySelector(".main-carousel");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false
  });

}



// Initialise Tides canvas
function initTides() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);

}







const RADIUS = 200;
const X_CIRCLE_CENTER =300;
const Y_CIRCLE_CENTER =300;

let canvas;
let ctx;

class MousePosition{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

let mousePos = new MousePosition(0,0);


document.addEventListener('DOMContentLoaded', setupCanvas, false);

function setupCanvas() {
  canvas = document.getElementById('my-canvas');
  ctx = canvas.getContext('2d');
  drawCanvas();
  canvas.addEventListener("mousemove", reDrawCanvas);

}

function drawCanvas() {
  drawRectangle("#333", 5, 0, 0, 600, 600);
  drawCircle("#333", 1, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0, 2 * Math.PI);
  drawLine("#333", 1, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
  drawLine("#333", 1, 0, Y_CIRCLE_CENTER, 600, Y_CIRCLE_CENTER);

}

function reDrawCanvas(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvas();
  getMousPosition(evt);
  drawTextAtPoint("X: " + mousePos.x, 15, 25);
  drawTextAtPoint("Y: " + mousePos.y, 15, 45);


}

function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY) {
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(startX, startY, endX, endY);
}

function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd) {
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd);
  ctx.stroke();
}

function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd) {
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
}

function drawTextAtPoint(text, x, y) {
  ctx.font = "15px Arial";
  ctx.fillText(text, x, y);
}

function getMousPosition(evt) {
  let canvasDimensions = canvas.getBoundingClientRect();
  mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
  mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
  mousePos.x -= 300;
  mousePos.y = -1 * (mousePos.y - 300);
  return mousePos;
}

function getAngleUsingXandY(x,y) {
}

function radiansToDegrees(rad) {
  if(rad < 0){
    return (360.0 + (rad * (180/Math.PI))).toFixed(2);
  } else {
    return (rad * (180/Math.PI)).toFixed(2);
  }
}

function degreesToRadians(degree) {
  return degree * (Math.PI / 180);
}

function drawTriangle() {
}

function getLineLength() {
}
