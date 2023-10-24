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

// const imageGallery = document.querySelector(".gallery");

// console.log(lists);

// images.forEach((images) => {
// console.log(images);

//   const imageList = document.createElement("li");
// console.log(imageList);

//   imageGallery.insertAdjacentHTML(
//     "beforeend",
//     `<li class= "list"><img  src = "${images.url}" alt = "${images.alt}"  width = "400" height = "220" /></li>`
//   );
// });



const imageGallery = document.querySelector('.gallery');
const image = images.reduce(
  (cont, item) => cont + `<img src = "${item.url}" alt = "${item.alt}"  width = "400" height = "220" />`,
  ""
);

imageGallery.innerHTML = image;



imageGallery.style.display = "flex";
imageGallery.style.listStyleType = "none";
imageGallery.style.flexDirection = "row";
imageGallery.style.flexWrap = "wrap";
imageGallery.style.justifyContent = "space-around";
imageGallery.style.justifyContent = "space-around";
imageGallery.style.gap = "10px";
imageGallery.style.paddingLeft = "0px";
imageGallery.style.margin = "20px";