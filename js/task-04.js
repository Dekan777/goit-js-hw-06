//доступ к button
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
//доступ к value
const valueId = document.querySelector("#value");

let counterValue = 0;

decBtn.addEventListener("click", () => {
  counterValue -= 1;
  //innerHTML вернули значение в HTML
  valueId.innerHTML = counterValue;

});

incBtn.addEventListener("click", () => {
  counterValue += 1;
  valueId.innerHTML = counterValue;
});
