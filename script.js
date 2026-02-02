const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const question = document.querySelector(".question");

// Move NO using transform so it doesn't break flex
function teleportNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const margin = 20;

  const maxX = window.innerWidth - btnWidth - margin;
  const maxY = window.innerHeight - btnHeight - margin;

  const randomX = Math.random() * maxX - noBtn.getBoundingClientRect().left;
  const randomY = Math.random() * maxY - noBtn.getBoundingClientRect().top;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Teleport NO on hover
noBtn.addEventListener("mouseenter", teleportNoButton);

// YES click hides question
yesBtn.addEventListener("click", () => {
  yesBtn.parentElement.style.display = "none";
  question.style.display = "none";
  result.classList.remove("hidden");
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * (window.innerWidth - 20) + "px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
}

setInterval(createHeart, 300);
