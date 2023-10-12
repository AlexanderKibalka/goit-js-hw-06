const symbolInput = document.querySelector('#validation-input');

symbolInput.addEventListener('blur', checkingNumber);

function checkingNumber(evt) {

const validLength = parseInt(symbolInput.getAttribute('data-length'));
const input = evt.currentTarget.value;

if (input.length === validLength) {
    symbolInput.classList.remove('invalid');
    symbolInput.classList.add('valid');
} else {
    symbolInput.classList.remove('valid');
    symbolInput.classList.add('invalid');
    }
}