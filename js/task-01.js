const numberOfCategories = document.querySelector('ul#categories').children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const categoryList = Array.from(document.querySelectorAll('li.item'));

categoryList.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemsLenght = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsLenght}`)
});

