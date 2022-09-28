const btnStartColors = document.querySelector('button[data-start]');
const btnStopColors = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
btnStopColors.disabled = true;


btnStartColors.addEventListener('click', onClickBtnStart);
btnStopColors.addEventListener('click', onClickBtnStop)
let timerId = null;

function onClickBtnStart() {
    timerId = setInterval(() => {
    const randomColors = getRandomHexColor();
        console.log(randomColors);
            body.style.backgroundColor = randomColors;
    }, 1000);
    btnStartColors.disabled = true;
    btnStopColors.disabled = false;
}

function onClickBtnStop() {
    clearInterval(timerId);
    btnStartColors.disabled = false;
    btnStopColors.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};