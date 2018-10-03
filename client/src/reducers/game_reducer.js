const initState = {games: [],  allUserGames: []};
export default function manageGame(state = initState, action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
  switch (action.type) {

    // case 'GET_ALL_USER_GAMES':
    //   return {...state, allUserGames: state.allUserGames.concat(action.games)}

    case 'ADD_GAME':
      console.log("Add Action:", action);
      return { ...state, games: state.games.concat(action.newGame), allUserGames: state.allUserGames.concat(action.newGame) };

    case 'DELETE_GAME':
       // debugger;
        console.log("DeletedGames:", action);
        // return {...state, games: state.games.concat(action.game) };
        return {...state, games: state.games.filter(game => game.id !== action.game.id), allUserGames: state.allUserGames.filter(game => game.id !== action.game.id) }

    // case 'FETCH_GAMES':
    //     console.log("Fetch Action:", action);
    //
    //     // return { ...state, games: state.games.concat(action.games)};
    //     return {...state,  games: action.games};




              // console.log("Added to user: ", state.user);
    default:
      return state;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function manageUsers(state = {users:[], user: {}}, action) {
//   console.log("User Action:", action)
//   console.log("User State:", state)
//   switch (action.type) {
//
//     case 'ADD_USER':
//       return { ...state, users: state.users.concat(action.newUser), user: Object.assign({}, state.user, action.newUser.user) };
//
//     case 'FIND_USER':
//
//     return { ...state, user: Object.assign({}, state.user, action.newUser) };
//
//     case 'AUTH_USER':
//       console.log("Auth User state:", state)
//       console.log("Auth User Action:", action);
//
//     return { ...state, user: Object.assign({}, state.user, action.user) };
//
//     case 'LOGOUT_USER':
//       console.log("LOGOUT state:", state)
//       console.log("LOGOUT Action:", action);
//
//       return { ...state, user: Object.assign({}, state.user, action.user) };
//
//     case 'FETCH_USERS':
//         console.log("Fetch User State:", state);
//         // return {...state, games: state.games.concat(action.game) };
//         return { ...state, users: state.users.concat(action.users)};
//
//
//
//     default:
//       return state;
//   }}
