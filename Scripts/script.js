const menuToggle = document.querySelector(".menu-toggle");
const menuArea = document.querySelector(".menu-area");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-toggle-show");
  menuArea.classList.toggle("menu-area-show");
});
