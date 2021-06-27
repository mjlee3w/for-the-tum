/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

function makeMarquee() {
  const title = "click anywhere for tasty foods";
  const marqueeText = new Array(300).fill(title).join(" 🍒 ");
  const marquee = document.querySelector(".marquee span");
  marquee.innerHTML = marqueeText;
}

makeMarquee();

const aboutLink = document.querySelector(".about");
const aboutModal = document.querySelector(".about-modal");
const close = document.querySelector(".close");
const foodsLink = document.querySelector(".foods");
const foodsList = document.querySelector(".foods-list");
const closeFoods = document.querySelector(".close-foods");

foodsList.style.display = "none";
foodsLink.onclick = function() {
  foodsList.style.display = "block";
};

closeFoods.onclick = function() {
  foodsList.style.display = "none";
};

aboutModal.style.display = "none";
aboutLink.onclick = function() {
  aboutModal.style.display = "block";
};
close.onclick = function() {
  aboutModal.style.display = "none";
};
