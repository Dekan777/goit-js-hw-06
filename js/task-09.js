const elementButton = document.querySelector(".change-color");
// console.log("elementButton", elementButton);
elementButton.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  // console.log(randomColor);

  //получение ссылки на первый елемент колекции тега body
  const elementBody = document.getElementsByTagName("body")[0];
  // console.log(elementBody);

  //получение ссыылки елемента span
  const elementSpan = document.querySelector(".color");
  // console.log(elementSpan);

  elementBody.style.backgroundColor = randomColor;

  elementSpan.textContent = randomColor;
}

//функция генератора цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

