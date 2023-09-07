const menu = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("fa-xmark");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-xmark");
  nav.classList.remove("active");
});
