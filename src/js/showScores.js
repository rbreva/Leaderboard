import msgAccion from './msg_accion';

const getScores = async () => {

  const scoresContainer = document.querySelector('.scores__ul');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BQBJ1veNR8vZ1UCuYD3v/scores/');

  const json = await response.json();

  scoresContainer.innerHTML = '';

  const dataScores = json.result.sort((a, b) => b.score - a.score);

  console.log(dataScores.length);

  if (dataScores == 0) {
    scoresContainer.innerHTML = `<li class='scores__li__noscores'>No scores yet</li>`;
  } else {
    dataScores.forEach((score) => {
      scoresContainer.innerHTML += `<li class='scores__li'> ${score.user}: ${score.score}</li>`;
  });
  }

  

};

export default getScores;
