import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButton = document.querySelector('button');
const timeNow = Date.now();
let chooseDate = 0;

console.log(timeNow);
// const newTime = document.querySelector('input');
// console.log(newTime);
// const nothing = document.querySelector('.field');
// console.log(nothing);
const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    }
    
});


startButton.addEventListener('click', () => {
        chooseDate = fp.selectedDates[0].getTime();

    setInterval(() => {
     overTime = chooseDate - timeNow;
    console.log('over', overTime);
    }, 1000);

    if (chooseDate < timeNow) {
        alert('"Please choose a date in the future"');
        return;
    }

})


// console.log(fp); 
// console.log(fp.selectedDates[0]);
// console.log(fp.latestSelectedDateObj);
