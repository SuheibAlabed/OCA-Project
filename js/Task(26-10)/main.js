function hideShape_1() {
  var shape1 = document.querySelector(".shape_1");
  //var hiddenBtn = document.getElementById("hiddenBtn");
  // var showBtn = document.getElementById("showBtn");
  if (shape1.style.visibility != "hidden") {
    shape1.style.opacity = "0";
    shape1.style.visibility = "hidden";
    // fadeInEntrance(shape_1, 15);
  } else {
    shape1.style.visibility = "visible";
    shape1.style.opacity = "1";
  }
}
function hideShape_2() {
  var shape2 = document.querySelector(".shape_2");
  if (shape2.style.visibility != "hidden") {
    shape2.style.opacity = "0";
    shape2.style.visibility = "hidden";
  } else {
    shape2.style.visibility = "visible";
    shape2.style.opacity = "1";
  }
}
