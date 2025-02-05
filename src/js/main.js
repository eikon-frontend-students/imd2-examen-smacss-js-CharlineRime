var RedFlavour = document.querySelector(".flavors-red");
var GreenFlavour = document.querySelector(".flavors-green");
var BlueFlavour = document.querySelector(".flavors-blue");
var RedHiddenPart = document.querySelector(".flavors-redHidden");
var BlueHiddenPart = document.querySelector(".flavors-blueHidden");
var GreenHiddenPart = document.querySelector(".flavors-greenHidden");

function FirstColorChange() {
  RedFlavour.classList.toggle("redBackground");
  RedHiddenPart.classList.toggle("is-hidden");
}

RedFlavour.addEventListener("click", FirstColorChange);

function SecondColorChange() {
  BlueFlavour.classList.toggle("blueBackground");
  BlueHiddenPart.classList.toggle("is-hidden");
}

BlueFlavour.addEventListener("click", SecondColorChange);

function GreenHidden() {
  GreenHiddenPart.classList.toggle("is-hidden");
}

GreenFlavour.addEventListener("click", GreenHidden);

var header = document.querySelector(".l-header");
var headerTitle = document.querySelector("h1");

function HeaderColorChange() {
  header.classList.toggle("secondHeader");
  headerTitle.classList.toggle("secondHeader");
}

header.addEventListener("click", HeaderColorChange);
