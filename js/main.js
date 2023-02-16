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





