scrollUp = document.getElementById("scrollUp");

var showScrollUp = function() {
  var y = window.scrollY;
  var windowH = window.innerHeight;
  if (y >= windowH) {
    document.getElementById("scrollUp").className = "scrollUp show"
  } else {
    document.getElementById("scrollUp").className = "scrollUp hide"
  }
};

window.addEventListener("scroll", showScrollUp);