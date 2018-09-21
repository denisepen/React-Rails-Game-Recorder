export function fetchUsers() {
  return function (dispatch){
    // debugger;
     return fetch('/users')
           .then(response => response.json())
           // .then(res => console.log("Game just fetched:", res))
            .then(users => {
              dispatch({ type: 'FETCH_USERS', users})
          })
    }
  }

export function addUser(user) {
  // console.log("Adding this user: ", user);
      const request = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      };
// console.log("req body", request.body);
      return (dispatch) => {
        console.log("Dispatched user", user);
        return fetch('/users', request )
                 .then(response => response.json())
                 // .then(response => console.log("api response",response.json()))
                 //  .then(res => console.log("User just added to db:", res))
                  .catch(error => console.error('Error:', error))
                 // .then(newUser => dispatch({ type: 'ADD_USER', newUser}))
      }
    }

    export function userLogin(user) {

        const request = {
          method: 'post',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        };

        return (dispatch) => {
          console.log(" User", user);
          return fetch('/login', request )
                   .then(response => response.json())
                   // .then(response => console.log("api response",response))
                   //  .then(res => console.log("Game just added to db:", res))
                   .then(user => {localStorage.setItem("jwtToken", user.jwt)})
                   .then(newUser => dispatch({ type: 'FIND_USER', newUser}))
        }
      }
