
const refs = {
    decrementBtn: document.querySelector('button[data-action= "decrement"]'),
    incrementBtn: document.querySelector('button[data-action= "increment"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementButton);
refs.incrementBtn.addEventListener('click', onIncrementButton);


function onDecrementButton() {
    refs.value.textContent = counterValue -=1;
};

function onIncrementButton() {
    refs.value.textContent = counterValue +=1;
}

