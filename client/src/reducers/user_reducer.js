// const initState = {users: []};

export default function manageUser(state = {}, action) {
  console.log("User Action:", action)
  console.log("User State:", state)
  switch (action.type) {

    case 'ADD_USER':
      return { ...state, users: state.users.concat(action.newUser), user: Object.assign({}, state.user, action.newUser.user) };

    case 'FIND_USER':

    return { ...state, user: Object.assign({}, state.user, action.newUser) };

    case 'AUTH_USER':
      console.log("Auth User state:", state)
      console.log("Auth User Action:", action);

    return { ...state, user: Object.assign({}, state.user, action.user) };

    case 'LOGOUT_USER':
      console.log("LOGOUT state:", state)
      console.log("LOGOUT Action:", action);

      return { ...state, user: Object.assign({}, state.user, action.user) };

    // case 'FETCH_USERS':
    //     console.log("Fetch User State:", state);
    //     // return {...state, games: state.games.concat(action.game) };
    //     return { ...state, users: state.users.concat(action.users)};



    default:
      return state;
  }}
