// import thunk from 'redux-thunk';

export function fetchGames() {
  return function (dispatch){
    // debugger;
     return fetch('/games')
           .then(response => response.json())
           // .then(res => console.log("Game just fetched:", res))
            .then(games => {
              dispatch({ type: 'FETCH_GAMES', games})
          })
    }
  }


export function addGame(game) {
     // debugger;
      const request = {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return (dispatch) => {

        return fetch('/games', request )
                .then(response => response.json())
                // .then(response => console.log("api response",response))
                 // .then(game => console.log("Game just added to db:", game))
                 .then(newGame => dispatch({ type: 'ADD_GAME', newGame}))


      }
    }

    export function deleteGame(game) {
          // debugger;
          const request = {
            method: 'DELETE',
            // mode: 'no-cors',
            body: JSON.stringify(game),
            credentials: "same-origin",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          console.log(request);
          return (dispatch) => {
            // console.log("inside delete actions", game);
            return  fetch(`games/${game.id}`, {method: 'DELETE'} )
                    // .then(response => console.log(response.json()))
                     // .then(data => console.log("Inside Actions:", data))
                     .then(newGame => dispatch({ type: 'DELETE_GAME', game})
                   )
          }
        }
