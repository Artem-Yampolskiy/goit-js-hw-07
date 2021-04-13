const inputRef = document.getElementById('font-size-control');
const nameLabelRef = document.getElementById('text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameLabelRef.style.fontSize = `${+event.currentTarget.value}px`;
};