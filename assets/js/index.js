const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".navbar__link").forEach(n => n.addEventListener("click", () => {
  navMenu.classList.remove("active");
}))