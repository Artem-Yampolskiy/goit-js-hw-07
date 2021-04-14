const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.getElementById('ingredients');
//const ingredientsListRef = document.querySelector('#ingredients');

const makeList = array => {
    return array.map(item => {        
        const ingredientRef = document.createElement('li');
        ingredientRef.textContent = item;
        return ingredientRef;
    });
};

const ingredientsList = makeList(ingredients);
ingredientsListRef.append(...ingredientsList);