const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const decrement = () => {
    document.querySelector('#value').textContent = counterValue -= 1;
};

const increment = () => {
    document.querySelector('#value').textContent = counterValue += 1;
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);



