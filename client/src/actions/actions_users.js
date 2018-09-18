

export function addUser(user) {

      const request = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return (dispatch) => {
        console.log("Dispatched user", user);
        return fetch('/games', request )
                 .then(response => response.json())
                 // .then(response => console.log("api response",response))
                 //  .then(res => console.log("Game just added to db:", res))
                 .then(newUser => dispatch({ type: 'ADD_USER', newUser}))
      }
    }
