
const userName = document.querySelector('#name-input');
let userNameOutput = document.querySelector('#name-output');


userName.addEventListener('input', handlerInput);

function handlerInput(event) {
    if (event.currentTarget.value === '') {
        return userNameOutput.textContent = "Anonymous";
    }
    userNameOutput.textContent = event.currentTarget.value;
};
