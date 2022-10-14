fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    // 'name': 'hit the API'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json());
// .then((json) => console.log(json));

// "Game with ID: BQBJ1veNR8vZ1UCuYD3v added."
