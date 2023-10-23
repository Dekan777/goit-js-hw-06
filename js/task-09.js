const elementButton = document.querySelector(".change-color");
elementButton.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  //получение ссылки на первый елемент колекции тега body
  const elementBody = document.querySelector("body");

  //получение ссыылки елемента span
  const elementSpan = document.querySelector(".color");

  elementBody.style.backgroundColor = randomColor;
  elementSpan.textContent = randomColor;
}

//функция генератора цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}