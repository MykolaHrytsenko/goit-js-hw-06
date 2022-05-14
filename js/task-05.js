const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
}

function onInputChange(event) {

    if (event.currentTarget.value === '') {
        refs.nameOutput.textContent = 'Anonymous';
        return
    }
    refs.nameOutput.textContent = event.currentTarget.value;
}

refs.nameInput.addEventListener('input', onInputChange);