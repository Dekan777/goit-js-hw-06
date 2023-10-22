const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {

  const dataLength = Number(textInput.getAttribute('data-length'));
  const valueLength = textInput.value.trim().length;

  if (valueLength === dataLength ) {

    textInput.classList.add('valid');
    textInput.classList.remove('invalid');

  } else {
    
    textInput.classList.add('invalid');
    textInput.classList.remove('valid')
  }
})
  