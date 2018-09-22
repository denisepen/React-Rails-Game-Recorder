// import thunk from 'redux-thunk';

export function fetchGames() {
  console.log("headers", localStorage.jwtToken);
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

      const request = {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        }
      };

      return (dispatch) => {
        console.log("Dispatched game", game);
        return fetch('/games', request )
                 .then(response => response.json())
                 // .then(response => console.log("api response",response))
                 //  .then(res => console.log("Game just added to db:", res))
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
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
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
