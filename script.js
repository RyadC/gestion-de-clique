/*** RECUPERATION DES ELEMENTS HTML ***/
const el_Counter = document.querySelector('.counter');

const el_BtnInc = document.querySelector('.counter-increment__btn');
const el_InputInc = document.querySelector('.counter-increment__input');

const el_BtnDec = document.querySelector('.counter-decrement__btn');
const el_InputDec = document.querySelector('.counter-decrement__input');

const el_ResetBtn = document.querySelector('.reset');

const el_AreaClick = document.querySelector('.click-area');


/*** VARIABLES GLOBALES ***/
let counterValue = Number(el_Counter.textContent);



/*** FONCTIONS ***/
/**
 * Decrement the counter with the input decrement value
 */
function decrementCount() {
  counterValue -= el_InputDec.value;
  el_Counter.textContent = counterValue;
}

/**
 * Increment the counter with the input decrement value
 */
function incrementCount() {
  counterValue += Number(el_InputInc.value);
  el_Counter.textContent = counterValue;
}


/*** COOOOOOODE ***/

/* Incrémentation du compteur */
el_BtnInc.addEventListener('click', incrementCount());

/* Décrémentation du compteur */
el_BtnDec.addEventListener('click', decrementCount());

/* Remettre le compteur à 0 avec le bouton "Reset" */
el_ResetBtn.addEventListener('click', () => {
  el_Counter.textContent = 0;
})

/* Décrémenter au clique droit sur la zone de cliques */
el_AreaClick.addEventListener('contextmenu', (e) => {
  // Annuler l'affichage du menu contextuel
  e.preventDefault();
  decrementCount();
});

/* Incrémenter au clique gauche sur la zone de cliques */
el_AreaClick.addEventListener('click', incrementCount());

