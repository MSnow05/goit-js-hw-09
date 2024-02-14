const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 1677215).toString(16)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorSwitcher() {
  intervalId = setInterval(changeBackgroundColor, 100);
  startButton.disabled = true;
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

startButton.addEventListener('click', startColorSwitcher);
stopButton.addEventListener('click', stopColorSwitcher);
 
