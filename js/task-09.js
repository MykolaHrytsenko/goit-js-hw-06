function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyStyle: document.querySelector('body'),
  colorBTN: document.querySelector('.change-color'),
  currentColor: document.querySelector('.color')
}

function changeColor() {
  refs.bodyStyle.style.backgroundColor = getRandomHexColor();
  refs.currentColor.textContent = getRandomHexColor();
}

refs.colorBTN.addEventListener('click', changeColor)


