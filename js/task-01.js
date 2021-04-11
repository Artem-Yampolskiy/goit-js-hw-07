const allCategoriesRef = document.querySelectorAll('#categories .item');

console.log(`'В списке ${allCategoriesRef.length} категории.'`);

const getInfoFromCategory = list => {
    return list.forEach(item => {
        console.log(`- Категория: ${item.firstElementChild.textContent}`);

        console.log(`- Количество элементов: ${item.querySelectorAll('li').length}`);
    });
};

getInfoFromCategory(allCategoriesRef);