const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {

    evt.preventDefault();

    const { password, email } = evt.currentTarget.elements;

    if (!password.value || !email.value) {
        alert("Усі поля повинні бути заповнені!");
        return;
    }

    const date = {
        password: password.value,
        email: email.value,
    };

    console.log(date);

    evt.currentTarget.reset();
}