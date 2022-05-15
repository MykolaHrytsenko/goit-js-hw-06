const refs = {
    inputCheck: document.querySelector('#validation-input'),
    dataLength: document.querySelector('input[data-length]')
}

function onInputCheck(event) {
    if (event.currentTarget.value.length === Number(refs.inputCheck.dataset.length)) {
        refs.inputCheck.classList.add('valid');
        refs.inputCheck.classList.remove('invalid');
        return
    }
    refs.inputCheck.classList.add('invalid');
    refs.inputCheck.classList.remove('valid');

};

refs.inputCheck.addEventListener('blur', onInputCheck);

