//скрипт управления формой логина
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  if (email === "" || password === "") {
    return alert("Fill in all the fields!");
  }
  alert(`email: ${this.email.value}, password: ${this.password.value}`);
}
