//скрипт управления формой логина
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  if (email === "" || password === "") {
    registerForm.elements.email.value = "";
    registerForm.elements.password.value = "";
    
    return console.log("Fill in all the fields!");
  }
  console.log(`email: ${this.email.value} \npassword: ${this.password.value}`);
  registerForm.elements.email.value = "";
  registerForm.elements.password.value = "";
}

//8ме - при сабміті форма повинна чиститись. Також виводити данні з форми треба у вигляді об'єкту у консоль
