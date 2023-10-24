const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const lists = document.querySelector(".gallery");

// console.log(lists);

images.forEach((images) => {
  // console.log(images);

  const imageList = document.createElement("li");
  // console.log(imageList);

  lists.insertAdjacentHTML(
    "beforeend",
    `<li class= "list"><img  src = "${images.url}" alt = "${images.alt}"  width = "400" height = "220" /></li>`
  );
});




lists.style.listStyleType = "none";
lists.style.display = "flex";
lists.style.flexDirection = "row";
lists.style.flexWrap = "wrap";
lists.style.justifyContent = "space-around";
lists.style.justifyContent = "space-around";
lists.style.gap = "10px";
lists.style.paddingLeft = "0px";
lists.style.margin = "20px";