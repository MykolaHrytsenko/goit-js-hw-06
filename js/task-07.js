const refs = {
    inputFontSize: document.querySelector('#font-size-control'),
    textSize: document.querySelector('#text')
}


function onInputControl() {
    refs.textSize.style.fontSize = `${refs.inputFontSize.value}px`;
};

refs.inputFontSize.addEventListener('input', onInputControl);

