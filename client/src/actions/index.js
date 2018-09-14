

export function fetchGames() {
  return fetch('/games')
           .then(response => response.json())
    }


export function addGame(game) {
    debugger;
      const request = {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-Type': 'application/json'
        }
      };
       // / debugger;
      // return fetch(`/games`, request )
      // .then(response => response.json())

      return{
        type: 'ADD_GAME',
        payload: fetch(`/games`, request )
                  .then(response => response.json())
      }
    }

export function  updatedGames () {
      const request = fetch('/games')
                        .then(response => response.json())
        return {
          type: 'GET_GAMES',
          payload: request
        }
      }
