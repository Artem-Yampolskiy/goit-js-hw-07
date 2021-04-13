const inputForm = document.getElementById('validation-input');
const dataLength = document.querySelector('[data-length="6"]')
console.log(inputForm);

inputForm.addEventListener('blur', onCheckValidityBlur);

function onCheckValidityBlur (event) {
    if (event.currentTarget.value.length === +dataLength.dataset.length) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    }
    else  inputForm.classList.add('invalid');  
};

