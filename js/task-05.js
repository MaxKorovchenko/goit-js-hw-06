const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  span.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
