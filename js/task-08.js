//скрипт управления формой логина
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  if (email === "" || password === "") {

    registerForm.reset();
    return alert("Fill in all the fields!");

  } else {

    const form = { email: email, password: password };
    console.log(form);
    
  }
  registerForm.reset();
}
