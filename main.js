var box = document.querySelector(".box"),
    main = document.querySelector("main"),
    filter1 = document.querySelector(".filer1"),
    filer2 = document.querySelector(".filer2"),
    text1 = document.querySelector(".text1"),
    text2 = document.querySelector(".text2")
    h1 = document.querySelector("h1"),
    h2 = document.querySelector("h2"),
    screenWidth = window.innerWidth,
    demiScreenWidth = screenWidth / 2;

main.addEventListener("click", mainSec);
box.addEventListener("drag", dragOver);
box.addEventListener("dragend", dragEnd);
box.addEventListener("dragstart", imageGhost, false);

function mainSec(e) {

  var left = e.clientX - 50 + "px",
      width2 = screenWidth - e.pageX,
      width = e.pageX;
  box.style.left = left;
  filter1.style.width = e.pageX+"px";
  filer2.style.width = screenWidth - e.pageX + "px";
  text1.style.width = e.pageX  - 70 + "px";
  text2.style.width = width2-60 +"px";


  if (width2 < demiScreenWidth) {
    text2.style.opacity = "0";
    text2.style.top = "80px"
  }
  else {
    text2.style.opacity = "1"
    text2.style.top = "0px"
  }

  if (width < demiScreenWidth) {
    text1.style.opacity = "0";
    text1.style.visibility = "hidden"
    text1.style.top = "80px"

  }
  else {
    text1.style.opacity = "1"
    text1.style.visibility = "visible";
    text1.style.top = "0px";

  }

}







function dragOver(e) {
  var width = e.pageX,
      width2 = screenWidth - e.pageX;
  h1.innerHTML = width + " " + width2+ " "+ screenWidth + " " + demiScreenWidth;

  box.style.left = e.pageX - 50 +"px";
  filter1.style.width = e.pageX+"px";
  filer2.style.width = screenWidth - e.pageX + "px";
  text1.style.width = e.pageX  - 70 + "px";
  text2.style.width = width2-60 +"px";

  if (width2 < demiScreenWidth) {
    text2.style.opacity = "0";
    text2.style.top = "80px"
  }
  else {
    text2.style.opacity = "1"
    text2.style.top = "0px"
  }

  if (width < demiScreenWidth) {
    text1.style.opacity = "0";
    text1.style.visibility = "hidden"
    text1.style.top = "80px"

  }
  else {
    text1.style.opacity = "1"
    text1.style.visibility = "visible";
    text1.style.top = "0px";

  }
}





function dragEnd(e) {
  var width = e.pageX,
      width2 = screenWidth - e.pageX;
  h1.innerHTML = width + " " + width2 + " " + demiScreenWidth;

  if (width2 < demiScreenWidth) {
    text2.style.opacity = "0";
    text2.style.top = "80px"
  }
  else {
    text2.style.opacity = "1"
    text2.style.top = "0px"
  }

  if (width < demiScreenWidth) {
    text1.style.opacity = "0";
    text1.style.visibility = "hidden"
    text1.style.top = "80px"
  }
  else {
    text1.style.opacity = "1"
    text1.style.visibility = "visible";
    text1.style.top = "0px";
  }
  box.style.left = e.pageX - 50 +"px";
  filter1.style.width = e.pageX+"px";
  filer2.style.width = screenWidth - e.pageX + "px";
  text1.style.width =e.pageX  - 70 + "px";
  text2.style.width = screenWidth - e.pageX -60 +"px"
}

function imageGhost(e) {
  var crt = this.cloneNode(true);
  crt.style.backgroundColor = "blue";
  e.dataTransfer.setDragImage(crt, 0, 0);
}
