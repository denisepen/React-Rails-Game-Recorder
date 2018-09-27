export function authenticate() {
  return function (dispatch){
    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    };
    // debugger;
    console.log("Authenticate: ", request);
     return fetch('/authenticate', request)
           .then(response => response.json())
           // .then(res => console.log("Game just fetched:", res))
            .then(user => {
              dispatch({ type: 'AUTH_USER', user})
          })
          .catch(err => alert("Enjoy Your Day!"))
        }
      }

  export function logout() {
    return ({ type: 'LOGOUT_USER', user: {}})
  }



export function fetchUsers() {
  return function (dispatch){
    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
      }
    };
    // debugger;
    console.log(request);
     return fetch('/users', request)
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
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
        }
      };
// console.log("req body", request.body);
      return (dispatch) => {
        console.log("Dispatched user", user);
        return fetch('/users', request )
                 .then(response => response.json())
                 // .then(response => console.log("api response",response.json()))
                 //  .then(res => console.log("User just added to db:", res))
                 .then(newUser => {
                   localStorage.setItem("jwtToken", newUser.jwt)
                   dispatch({ type: 'ADD_USER', newUser} )
                 })
                 .catch(err => alert("Please  Try Again "))

                  // .catch(error => console.error('Error:', error))
                 // .then(newUser => dispatch({ type: 'ADD_USER', newUser} )
      }
    }

    export function userLogin(user) {

        const request = {
          method: 'post',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
          }
        };

        return (dispatch) => {
          // console.log(" local storage", localStorage.jwt);
          return fetch('/login', request )
                   .then(response => response.json())
                   // .then(response => console.log("api response",response))
                    // .then(res => console.log("Game just added to db:", res))
                   .then(newUser => {
                     localStorage.setItem("jwtToken", newUser.jwt)
                    dispatch({ type: 'FIND_USER', newUser})
                  })
                  .catch(err => alert("Incorrect User Name or Password "))

        }
      }
