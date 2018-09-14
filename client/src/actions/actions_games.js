
// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);
// const API_URL = '/games'


const GameService = {

  updatedGames: () => {
    const request = fetch('/games')
                      .then(response => response.json())
      return {
        type: 'GET_GAME',
        payload: request
      }
                    },
  fetchGames: () => {
    // debugger;
    // const request = fetch('/games')
    //                   .then(response => response.json())
    return fetch('/games')
             .then(response => response.json())

    // return {
    //   type: 'ADD_GAME',
    //   payload: request
    // }
  },
  addGame: (game) => {

    const request = {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-Type': 'application/json'
      }
    };
     // debugger;
    // return fetch(`/games`, request )
    // .then(response => response.json())

    return{

      type: 'ADD_GAME',
      payload: fetch(`/games`, request )
                .then(response => response.json())
    }

  }
}



export default GameService;
