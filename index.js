
const barsIcon = document.querySelector(".bars");
const navUl = document.querySelector("nav .container ul");

barsIcon.addEventListener("click", () => {
  navUl.classList.toggle("show-menu");
});
     