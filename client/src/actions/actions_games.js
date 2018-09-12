// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);
const API_URL = '/api/games'


const GameService = {
  fetchGames: () => {
    // return fetch(`${API_URL}`)
    return fetch('/games')
             .then(response => response.json())
            // .then(res => res.text())
            // .then(text => console.log("Text: ", text))
              // .then(resp =>  {console.log("Resp: ", resp)})
  },
  addGame: (game) => {
    const request = {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-Type': 'application/json'
      }

    };

    return fetch(`/games`, request )
    .then(response => response.json())

  }
}



export default GameService;
