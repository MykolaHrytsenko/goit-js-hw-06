function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputBoxesQuantity: document.querySelector('#controls input'),
  createBoxesBTN: document.querySelector('[data-create]'),
  destroyBoxesBTN: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

function onInputChange(event) {
  refs.inputBoxesQuantity.setAttribute('count', event.currentTarget.value);
}

refs.inputBoxesQuantity.addEventListener('input', onInputChange);

let basicBoxSize = 30;

const createBoxes = () => {
  let countBox = refs.inputBoxesQuantity.getAttribute('count');

  for (let i = 0; i < countBox; i++) {
    basicBoxSize += 10;
    const newBox = document.createElement('div');
    newBox.style.background = getRandomHexColor();
    newBox.style.width = basicBoxSize + 'px';
    newBox.style.height = basicBoxSize + 'px';
    newBox.classList.add("new-box");
    refs.boxes.append(newBox);
  };
};

refs.createBoxesBTN.addEventListener('click', createBoxes)

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.destroyBoxesBTN.addEventListener('click', destroyBoxes)
