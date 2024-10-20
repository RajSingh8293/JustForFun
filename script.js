const btn = document.querySelector("#menu");
const navlinks = document.querySelector(".navlinks");
btn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

const filterIcon = document.querySelector(".filterIcon");
const filters = document.querySelector(".filters");

filterIcon.addEventListener("click", () => {
  filters.classList.toggle("active");
  console.log("hello");
});
