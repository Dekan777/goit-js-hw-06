const rangeInput = document.querySelector("#font-size-control");
const spanInput = document.querySelector("#text");
// spanInput.style.fontSize = "56px";
// rangeInput.value = 56;
rangeInput.value = Number(spanInput.style.fontSize = '56px');

rangeInput.addEventListener("input", function () {

  spanInput.style.fontSize = rangeInput.value + "px";
  console.log(spanInput.style.fontSize);

});

// 7ме- Пов'яжіть початкове значення розміру шрифта з значенням інпута https://prnt.sc/0bpkLoz83SP0
