
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsMaker = ingredients => {

  return ingredients.map((ingredient) => {
    const ingredientElem = document.createElement('li');
    ingredientElem.textContent = ingredient;
    ingredientElem.classList.add("item");

    return ingredientElem;
  });
}

const ingredientList = ingredientsMaker(ingredients);
  
const ingredientListContainer = document.querySelector('#ingredients');
ingredientListContainer.append(...ingredientList);
