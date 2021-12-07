
const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColor(event) {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  textEl.textContent = bodyEl.style.backgroundColor;
}





