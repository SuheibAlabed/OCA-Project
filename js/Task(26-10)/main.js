function hide(shape) {
  var shape1 = document.getElementById(shape);
  opacity = Number(window.getComputedStyle(shape1).getPropertyValue("opacity"));
  if (opacity > 0) {
    opacity = opacity - 1;
    shape1.style.opacity = opacity;
    console.log(opacity);
  } else {
    opacity = opacity + 1;
    shape1.style.opacity = opacity;
    console.log(opacity);
  }
}
