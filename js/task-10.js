// IN PROGRESS// бажано виконати так, щоб при кожному наступному натисканні на кнопку create розмір першого домальованого діва обчислювався виходячи з розмірів відрендереного останнього 😁😁😁😁

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

let amount = 1;

input.addEventListener("input", onInputAction);
btnCreate.addEventListener("click", onClickCreate);
btnDestroy.addEventListener("click", onClickDestroy);

function onInputAction(event) {
  amount = Number(event.currentTarget.value);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${i * 10 + 20}px`;
    div.style.height = `${i * 10 + 20}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function createNextBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${i * 10 + boxes.lastElementChild.scrollWidth}px`;
    div.style.height = `${i * 10 + boxes.lastElementChild.scrollHeight}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }
}

function onClickCreate() {
  if (boxes.children.length === 0) {
    createBoxes(amount);
  } else {
    createNextBoxes(amount);
  }
}

function onClickDestroy() {
  boxes.innerHTML = "";
}
