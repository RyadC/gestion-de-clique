/*** RECUPERATION DES ELEMENTS HTML ***/
const el_Counter = document.querySelector('.counter');

const el_BtnInc = document.querySelector('.counter-increment__btn');
const el_InputInc = document.querySelector('.counter-increment__input');

const el_BtnDec = document.querySelector('.counter-decrement__btn');
const el_InputDec = document.querySelector('.counter-decrement__input');

const el_ResetBtn = document.querySelector('.reset');


// console.log(el_BtnDec)


/* Incrémentation du compteur */
el_BtnInc.addEventListener('click', () => {
  // console.log(e)
  let counterValue = Number(el_Counter.textContent);
  let incrementValue = Number(el_InputInc.value);
  let newCounterValue = counterValue + incrementValue;
  el_Counter.textContent = newCounterValue;
});

/* Décrémentation du compteur */
el_BtnDec.addEventListener('click', () => {
  let counterValue = Number(el_Counter.textContent);
  let decrementValue = Number(el_InputDec.value);
  let newCounterValue = counterValue - decrementValue;
  el_Counter.textContent = newCounterValue;
});


/* Remettre le compteur à 0 avec le bouton "Reset" */
el_ResetBtn.addEventListener('click', () => {
  el_Counter.textContent = 0;
})
