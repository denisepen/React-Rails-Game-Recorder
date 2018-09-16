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

              // dispatch(receiveGames(json))
           // dispatch({ type: 'FETCH_GAME', game})
    }
  }


  // export function receiveGames(games) {
  //   return{
  //     type: 'RECEIVE_GAMES',
  //     games: games
  //   }
  // }


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
                 .then(game => console.log("Game just added to db:", game))
                 .then(newGame => dispatch({ type: 'ADD_GAME', game})
               )
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
            console.log("inside delete actions", game);
             fetch(`/games/${game.id}`, {method: 'DELETE'} )
                    // .then(response => response.json())
                     // .then(game => console.log("Inside Actions:", game))
                     .then(game => dispatch({ type: 'DELETE_GAME', game})
                   )
          }
        }

// export function  updatedGames () {
//       const request = fetch('/games')
//                         .then(response => response.json())
//         return {
//           type: 'GET_GAMES',
//           payload: request
//         }
//       }
