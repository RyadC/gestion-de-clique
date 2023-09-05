/*** RECUPERATION DES ELEMENTS HTML ***/
const el_Counter = document.querySelector('.counter');

const el_BtnInc = document.querySelector('.counter-increment__btn');
const el_InputInc = document.querySelector('.counter-increment__input');

const el_BtnDec = document.querySelector('.counter-decrement__btn');
const el_InputDec = document.querySelector('.counter-decrement__input');

const el_ResetBtn = document.querySelector('.reset');

const el_AreaClick = document.querySelector('.click-area');

const el_ErrorMessageContainer = document.querySelector('.error-message__container');
const el_ErrorMessageContainerLimit = document.querySelector('.error-message__container__limit');
const el_ErrorMessageContainerText = document.querySelector('.error-message__container__text');


const el_HighLimitInput = document.querySelector('.high-limit__input');
const el_LowLimitInput = document.querySelector('.low-limit__input');



/*** VARIABLES GLOBALES ***/
let counterValue = Number(el_Counter.textContent);
let highLimitPreviousValue = Number(el_HighLimitInput.value); 
let lowLimitPreviousValue = Number(el_LowLimitInput.value);


/*** FONCTIONS ***/
/**
 * Decrement the counter with the input decrement value
 */
function decrementCount() {
  let decValue = Number(el_InputDec.value);
  let lowLimitValue = Number(el_LowLimitInput.value);
  // debugger;

  // Regarder si le compteur est supérieur à la limite basse 
  if(counterValue > lowLimitValue) {
    el_Counter.classList.contains('shake-count') ? el_Counter.classList.remove('shake-count') : ''; 
    counterValue -= decValue;
    el_Counter.textContent = counterValue;
  };
  
  // Regarder si le compteur est inférieur ou égal à la limite basse
  if(counterValue <= lowLimitValue) {
    counterValue = lowLimitValue;
    el_Counter.textContent = counterValue;
    displayErrorMessageReachedLimit(el_LowLimitInput.value, 'decrement')
    shakeCount();
  };

  
}

/**
 * Increment the counter with the input decrement value
 * 
 */
function incrementCount() {
  let incValue = Number(el_InputInc.value);
  let highLimitValue = Number(el_HighLimitInput.value);
  let lowLimitValue = Number(el_LowLimitInput.value);

  // debugger;
  
  // Regarder si le compteur est initialisé en dessous de la limite basse
  if(counterValue < lowLimitValue) {
    counterValue =  lowLimitValue;
    el_Counter.textContent = counterValue;

    // Regarder si le compteur est inférieur à la limite haute
  } else if(counterValue < highLimitValue) {
    el_Counter.classList.contains('shake-count') ? el_Counter.classList.remove('shake-count') : ''; 
    counterValue += incValue;
    el_Counter.textContent = counterValue;
  };
  
  // Regarder si le compteur est supérieur ou égal à la limite haute
  if(counterValue >= highLimitValue) {
    counterValue = highLimitValue;
    el_Counter.textContent = counterValue;
    displayErrorMessageReachedLimit(el_HighLimitInput.value, 'increment');
    shakeCount();
  };
}

/**
 * Faire afficher le message d'erreur et le faire disparaître au bout d'une seconde
 */
function displayErrorMessage() {
  el_ErrorMessageContainer.classList.add('displayError');
  setTimeout(() => {
    el_ErrorMessageContainer.classList.remove('displayError');
  }, 1500); 
}


/**
 * Faire afficher le message d'erreur en fonction des deux limites atteintes
 */
function displayErrorMessageReachedLimit(limitValue, action) {
  switch (action) {
    case 'increment':
        console.log('limite haute atteinte');
        el_ErrorMessageContainerText.textContent = `Limite haute ${el_HighLimitInput.value} atteinte.`
        displayErrorMessage();
    break;

    case 'decrement':
        console.log('limite basse atteinte');
        el_ErrorMessageContainerText.textContent = `Limite basse ${el_LowLimitInput.value} atteinte.`
        displayErrorMessage();
    break;

    default:
      break;
  };
}

/**
 * Faire afficher un message d'erreur si l'utilisateur essaye de changer une des limites de manière incohérente
 */
function displayErrorMessageForImpossibleLimit(typeLimit) {
  switch (typeLimit) {
    case 'highLimit':
      el_ErrorMessageContainerText.textContent = `La limite haute ne peut être inférieure à la limite basse.`
    break;

    case 'lowLimit':
      el_ErrorMessageContainerText.textContent = `La limite basse ne peut être supérieur à la limite haute.`
    break;
  
    default:
      console.error('ErrorMessage: ')
      break;
  };

  displayErrorMessage();
}

/**
 * Secouer le compteur pour signaler qu'une limite est atteinte
 */
function shakeCount() {
  el_Counter.classList.add('shake-count');
}

/******************************COOOOOOODE***********************************************/

/* Incrémentation du compteur */
el_BtnInc.addEventListener('click', incrementCount);

/* Décrémentation du compteur */
el_BtnDec.addEventListener('click', decrementCount);

/* Remettre le compteur à 0 avec le bouton "Reset" */
el_ResetBtn.addEventListener('click', () => {
  el_Counter.textContent = 0;
});

/* Décrémenter au clique droit sur la zone de cliques */
el_AreaClick.addEventListener('contextmenu', (e) => {
  // Annuler l'affichage du menu contextuel
  e.preventDefault();
  decrementCount();
});

/* Incrémenter au clique gauche sur la zone de cliques */
el_AreaClick.addEventListener('click', incrementCount);

/* Bloquer les limites si le sup est inf au sup ou l'inf est sup au sup */
el_HighLimitInput.addEventListener('change', (e) => {
  let highLimitValue = Number(el_HighLimitInput.value);  
  let lowLimitValue = Number(el_LowLimitInput.value);


  if(highLimitValue <= lowLimitValue) {
    highLimitValue = lowLimitValue;
    el_HighLimitInput.value = highLimitValue;
  };

  if(highLimitPreviousValue === highLimitValue) {
    // Affichage du message d'erreur
    displayErrorMessageForImpossibleLimit('highLimit');
  };

  highLimitPreviousValue -= highLimitPreviousValue - highLimitValue;
});

el_LowLimitInput.addEventListener('change', (e) => {
  let lowLimitValue = Number(el_LowLimitInput.value);
  let highLimitValue = Number(el_HighLimitInput.value);  
  
  if(lowLimitValue >= highLimitValue) {
    lowLimitValue = highLimitValue;
    el_LowLimitInput.value = lowLimitValue;
  };

  if(lowLimitPreviousValue === lowLimitValue) {
    // Affichage du message d'erreur
    displayErrorMessageForImpossibleLimit('lowLimit');
  };
  
  lowLimitPreviousValue -= lowLimitPreviousValue - lowLimitValue;
});

