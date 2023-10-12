
const categories = document.getElementById('categories');

const collection = categories.children;
const list = Array.from(collection);
console.log(`Number of categories: ${list.length}`);

list.forEach((category) => {
  const title = category.children[0];
  const categoryItems = category.lastElementChild.childElementCount;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${categoryItems}`);
});







