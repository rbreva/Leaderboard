import dataScores from './dataScores.js';

const scoresContainer = document.querySelector('.scores__ul');

const showScores = () => {
  scoresContainer.innerHTML = '';
  dataScores.forEach((score) => {
    const scoreLi = document.createElement('li');
    scoreLi.className = 'scores__li';
    scoreLi.innerHTML = `${score.name}: ${score.score}`;
    scoresContainer.appendChild(scoreLi);
  });
};

export default showScores;
