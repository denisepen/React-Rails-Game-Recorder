
const initState = {games: []};
export default function manageGame(state = initState, action) {
  console.log("Action:", action)
  // console.log("Games:", state)
  switch (action.type) {

    case 'ADD_GAME':
     // debugger;

      console.log("newState:", state);
      // return {...state, games: state.games.concat(action.game) };
      return { ...state, games: state.games.concat(action.game)};

      case 'FETCH_GAMES':
       // debugger;

        console.log("Fetch State:", state);
        // return {...state, games: state.games.concat(action.game) };
        return { ...state, games: state.games.concat(action.games)};

        case 'RECEIVE_GAMES':
          console.log("Received Games:", state);

          return { ...state, games: state.games.concat(action.games)};

    default:
      return state;
  }
};
