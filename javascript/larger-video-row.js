const easyIcon = document.getElementById("easy-larger-icon");
const mediumIcon = document.getElementById("medium-larger-icon");
const hardIcon = document.getElementById("hard-larger-icon");
const easyRow = document.getElementById("easy-row");
const mediumRow = document.getElementById("medium-row");
const hardRow = document.getElementById("hard-row");
var clicked = false;

easyIcon.addEventListener("click", (event) => {
  if (clicked) {
    easyRow.style.height = "400px";
    easyIcon.style.transform = "rotate(0deg)";
    clicked = false;
  } else {
    easyRow.style.height = "1600px";
    easyIcon.style.transform = "rotate(180deg)";
    clicked = true;
  }
})

mediumIcon.addEventListener("click", (event) => {
  if (clicked) {
    mediumRow.style.height = "400px";
    mediumIcon.style.transform = "rotate(0deg)";
    clicked = false;
  } else {
    mediumRow.style.height = "1600px";
    mediumIcon.style.transform = "rotate(180deg)";
    clicked = true;
  }
})

hardIcon.addEventListener("click", (event) => {
  if (clicked) {
    hardRow.style.height = "400px";
    hardIcon.style.transform = "rotate(0deg)";
    clicked = false;
  } else {
    hardRow.style.height = "1600px";
    hardIcon.style.transform = "rotate(180deg)";
    clicked = true;
  }
})
