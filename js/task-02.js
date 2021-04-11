const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
console.log(ingredients);

const makeList = array => {
    array.forEach(item => {
        const ingredientsListRef = document.querySelector('#ingredients');
        const ingredientRef = document.createElement('li');
        ingredientRef.textContent = item;
        return ingredientsListRef.appendChild(ingredientRef);
    });
};
makeList(ingredients);

