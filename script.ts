const btnElem = document.querySelector('.sum-btn') as HTMLButtonElement;
const numInput = document.querySelector('.num-input') as HTMLInputElement;

function sum(a, b) {
  console.log(a + b);
}

btnElem.addEventListener('click', () => {sum(5, numInput.value)});