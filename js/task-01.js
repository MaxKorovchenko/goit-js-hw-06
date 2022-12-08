const listEl = document.querySelector("#categories");
const itemsEl = document.querySelectorAll(".item");

const numberOfCategories = listEl.children.length;
console.log("Number of categories :", numberOfCategories);

const itemsContent = itemsEl.forEach((item) => {
  console.log("Category :", item.firstElementChild.textContent);
  console.log("Elements :", item.lastElementChild.children.length);
});
