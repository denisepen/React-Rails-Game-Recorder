const initState = {users: []};

export default function manageUsers(state = initState, action) {
   console.log("User Action:", action)
   console.log("User State:", state)

  switch (action.type) {
    case 'ADD_USER':
      console.log("User state:", state)
      console.log("Add User Action:", action);

      return { ...state, users: state.users.concat(action.newUser)};

  }
}
