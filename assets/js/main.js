document.addEventListener("DOMContentLoaded", initSlider, false);

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
