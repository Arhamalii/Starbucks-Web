let nav = document.querySelector("nav");
let menu = document.querySelector("#menuicon");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("bx-x");
});
window.onscroll = () => {
  nav.classList.remove("active");
  menu.classList.remove("bx-x");
};

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: "2500",
  // reset: true,
});
sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".shop", { delay: 300 });
sr.reveal(".heading", {});

sr.reveal(".delivery-text", { delay: 300 });
sr.reveal(".delivery-img", {});
sr.reveal(".app-text", { delay: 300 });
sr.reveal(".app-img", {});
sr.reveal(".about-text", { delay: 300 });
sr.reveal(".about-img", {});
