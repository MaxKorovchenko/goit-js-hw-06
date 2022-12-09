// IN PROGRESS//

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

let amount = 10;

input.addEventListener("input", onInputAction);
btnCreate.addEventListener("click", onClickCreate);
btnDestroy.addEventListener("click", onClickDestroy);

function onInputAction(event) {
  amount = Number(event.currentTarget.value);
  console.log(amount);
}

function createBoxes(amount) {
  console.log(amount);

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${i * 10 + 20}px`;
    div.style.height = `${i * 10 + 20}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function onClickCreate() {
  createBoxes(amount);
}

function onClickDestroy() {
  boxes.innerHTML = "";
}
