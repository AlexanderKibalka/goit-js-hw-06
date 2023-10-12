const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrement.addEventListener('click', clicDecrement);

function clicDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

increment.addEventListener('click', clicIncrement);

function clicIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
};
