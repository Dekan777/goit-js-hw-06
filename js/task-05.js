const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
// console.log(input);
// console.log(output);

input.addEventListener("input", function (event) {
  if (event.target.value === "") {
    event.target.value = "Anonymous";
  }
  output.textContent = event.target.value;
});
