function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
