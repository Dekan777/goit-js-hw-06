let width = 30;
let height = 30;

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");


const amount = input.value;
console.log(amount);











  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);

    width += 10;
    height += 10;
  }




  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }