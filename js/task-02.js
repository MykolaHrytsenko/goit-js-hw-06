const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('ul#ingredients');

const elements = ingredients.map(option => {
  const ingrElement = document.createElement('li');
  ingrElement.textContent = option;
  ingrElement.classList.add('item');

  return ingrElement;
})

ingredientsContainer.append(...elements);

console.log(elements);


