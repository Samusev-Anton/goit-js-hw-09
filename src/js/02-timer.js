import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startButton = document.querySelector('button');
const timeNow = Date.now();
let chooseDate = 0;
const timeSpans = document.querySelectorAll('.value');
startButton.disabled = true;


const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
            chooseDate = fp.selectedDates[0].getTime();

        if (chooseDate < timeNow) {
                Notiflix.Notify.failure('"Please choose a date in the future"');
        // alert('"Please choose a date in the future"');
        return;
        };
    startButton.disabled = false;

    }
    
});


startButton.addEventListener('click', () => {
    

    setInterval(() => {
       let overTime = chooseDate - Date.now();
        // const objOverTime = convertMs(overTime);
        // console.log('over', objOverTime);
        const { days, hours, minutes, seconds } = convertMs(overTime);
        timeSpans[0].textContent = `${days}`;
        timeSpans[1].textContent = `${hours}`;
        timeSpans[2].textContent = `${minutes}`;
        timeSpans[3].textContent = `${seconds}`;
    }, 1000);

});

function pad(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
