
const categories = document.getElementById('categories');

const list = categories.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

list.forEach((category) => {
  const title = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});







