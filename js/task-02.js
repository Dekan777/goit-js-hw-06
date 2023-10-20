const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];




console.log(ingredients);

const list = document.querySelector("#ingredients");
console.log(list);

ingredients.forEach(function (ingredients) {

  const ingredientsList = document.createElement("li"); //создаем li для каждого елемента.
  ingredientsList.textContent = ingredients;            //присваиваем название из массива.
  ingredientsList.classList.add("item");                // добавляем class item.
  list.append(ingredientsList);                         //добавляем елементы после #ingredients.

  console.log(ingredientsList);
});
