const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
stopButton.disabled = true
let intervalId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 1677215).toString(16)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startColorSwitcher() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false
}

function stopColorSwitcher() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true
}

startButton.addEventListener('click', startColorSwitcher);

stopButton.addEventListener('click', stopColorSwitcher);

