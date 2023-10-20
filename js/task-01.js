
const listCategories = document.querySelectorAll("li.item");
// console.log("Number of categories: ", listCategories); 
console.log("Number of categories: ", listCategories.length); 
console.log("");

listCategories.forEach(function (listCategories) {
    // listCategories.lastElementChild - выберет последний дочерний узел-элемент внутри listCategories.
    // listCategories.firstElementChild.textContent возвращает текстовый контент внутри элемента.
  const categoryTitle = listCategories.firstElementChild.textContent;
  console.log("Category:", categoryTitle);

  const elementsList = listCategories.querySelectorAll("li").length;
  console.log("Elements:", elementsList);
  console.log("");

});

//   Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
