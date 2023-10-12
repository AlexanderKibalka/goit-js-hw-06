const controler = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controler.addEventListener('input', fontSizeControl);

function fontSizeControl(evt) {
    const value = evt.currentTarget.value;
    text.style.fontSize = `${value}px`;
};
