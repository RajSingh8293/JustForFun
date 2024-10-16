const btn = document.querySelector("#menu");
const navlinks = document.querySelector(".navlinks");
btn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});

// const images = document.querySelector(".hero .images img");

// const allImage = [];
// for (let i = 0; i < images.length; i++) {
//   const element = images[i].src;
//   allImage.push(element);
// }
// console.log("images :", allImage);
