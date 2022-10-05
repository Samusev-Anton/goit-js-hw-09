import Notiflix from 'notiflix';

const form = document.querySelector('.form');


  function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  
}

form.addEventListener('submit', onBtnSubmit); 

function onBtnSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount  }
  } = event.currentTarget;
  
   let startDelay = Number(delay.value);
  const amountNum = Number(amount.value);
  let stepDelay = Number(step.value);
  if (startDelay < 0 || amountNum < 0 || stepDelay < 0) {
     Notiflix.Notify.failure(
          `Значение не может быть отрицательным`
     );
    return;
  }


 for (let i = 0; i < amountNum; i += 1) {
    createPromise(1 + i, startDelay + i * stepDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `💹 Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `⛔ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  
}



