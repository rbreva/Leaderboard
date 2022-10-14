import msgAccion from './msg_accion.js';

const addScores = async (e) => {
  e.preventDefault();
  const user = document.querySelector('.user').value;
  const score = document.querySelector('.score').value;
  if (user === '' || score === '') {
    msgAccion('Missing data');
  } else {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BQBJ1veNR8vZ1UCuYD3v/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      msgAccion('Score added successfully');
    } else {
      msgAccion('Error adding score');
    }
    document.querySelector('.user').value = '';
    document.querySelector('.score').value = '';
    // const json = await response.json();
    // console.log(json);
    // getScores();
  }
};

export default addScores;