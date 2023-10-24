const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients');
const ingredientlist = ingredients.reduce((cont, elementIngr) => cont + `<li class="item">${elementIngr}</li>`, []);

list.innerHTML = ingredientlist;
console.log(list);


// const list = document.querySelector("#ingredients");
// ingredients.forEach(function (ingredients) {
//   const ingredientsList = document.createElement("li"); //создаем li для каждого елемента ul ingredients.
//   ingredientsList.textContent = ingredients;            //присваиваем название из массива.
//   ingredientsList.classList.add("item");                // добавляем class item.
// list.append(ingredientsList);                           //добавляем елементы после #ingredients.
// });
// console.log(list);

