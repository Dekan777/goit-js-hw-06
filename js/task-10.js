let width = 30;
let height = 30;

const controls = document.querySelector("controls");
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = input.value;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = parseInt(width) + i * 10 + "px";
    div.style.height = parseInt(height) + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
