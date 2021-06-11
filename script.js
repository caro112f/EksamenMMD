const menuknap = document.querySelector(".menuknap");
const menubar = document.querySelector(".menu_nav");
const lukmenu = document.querySelector(".luk");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  menubar.classList.add("hide");
  menuknap.addEventListener("mousedown", clickMenu);
}
function clickMenu() {
  console.log("click menu");
  menubar.classList.remove("hide");
  lukmenu.addEventListener("mousedown", closeMenu);
}
function closeMenu() {
  console.log("close menu");
  menubar.classList.add("hide");
  menuknap.addEventListener("mousedown", clickMenu);
}
