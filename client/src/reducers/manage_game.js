
const initState = {games: []};
export default function manageGame(state = initState, action) {
  console.log("Action:", action)
  // console.log("Games:", state)
  switch (action.type) {

    case 'ADD_GAME':

     action.game.gameId = Math.random()*10000000000000000

      console.log("Add Action:", action);
    
      return { ...state, games: state.games.concat(action.game)};

      case 'DELETE_GAME':
       // debugger;
        console.log("DeletedGames:", action);
        // return {...state, games: state.games.concat(action.game) };
        return {games: state.games.filter(game => game.id !== action.game)}

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
