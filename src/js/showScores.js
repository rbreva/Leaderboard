const getScores = async () => {
  const scoresContainer = document.querySelector('.scores__ul');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zO7qhdWTc0xF07y62lTL/scores/');
  const json = await response.json();
  scoresContainer.innerHTML = '';
  const dataScores = json.result.sort((a, b) => b.score - a.score);
  if (dataScores.length === 0) {
    scoresContainer.innerHTML = '<li class="scores__li__noscores">No scores yet</li>';
  } else {
    dataScores.forEach((score, index) => {
      if (index === 0) {
        scoresContainer.innerHTML += `<li class='scores__li first'><div>${index + 1}</div> <div>${score.user}</div> <div> ${score.score}</div></li>`;
      } else if (index === 1) {
        scoresContainer.innerHTML += `<li class='scores__li second'><div>${index + 1}</div> <div>${score.user}</div> <div> ${score.score}</div></li>`;
      } else {
        scoresContainer.innerHTML += `<li class='scores__li'><div>${index + 1}</div> <div>${score.user}</div> <div> ${score.score}</div></li>`;
      }
    });
  }
};

export default getScores;
