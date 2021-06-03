// setup nav
const navBtn = document.getElementById("navBtn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("navClose");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
