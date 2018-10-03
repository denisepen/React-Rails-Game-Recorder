export default function manageUsers(state = [], action) {
  console.log("User Action:", action)
  console.log("User State:", state)
  switch (action.type) {

    case 'FETCH_USERS':
        console.log("Fetch User State:", state);
        // return {...state, games: state.games.concat(action.game) };
        return { ...state, users: state.users.concat(action.users)};
    default:
      return state;
  }}
