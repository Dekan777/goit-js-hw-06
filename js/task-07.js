//получили ссылку на инпут
const rangeInput = document.querySelector('#font-size-control');
//получили ссылку на спан
const spanInput = document.querySelector('#text');
//делаем обработчик для изменения размера шрифта при изменении ползунка
rangeInput.addEventListener('input', function()  {
    spanInput.style.fontSize = rangeInput.value  + "px" ;
    console.log(rangeInput.value);
  });

