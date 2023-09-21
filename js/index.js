console.log("hello");
const menu = document.getElementById("menu-icon");
const nav = document.getElementById("unordered-list");
menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("header-active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("header-active");
});
