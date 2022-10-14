import './css/style.css';

import getScores from './js/showScores.js';
import addScores from './js/addScores.js';
//import './js/createGame'

const refreshBtn = document.querySelector('.scores__btn');
refreshBtn.addEventListener('click', getScores);

const addScorehBtn = document.querySelector('.formscore__btn');
addScorehBtn.addEventListener('click', addScores);





//document.addEventListener('DOMContentLoaded', getScores);
