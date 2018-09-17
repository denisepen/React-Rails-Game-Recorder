
const initState = {games: []};
export default function manageGame(state = initState, action) {
  console.log("Action:", action)
  // console.log("Games:", state)
  switch (action.type) {

    case 'ADD_GAME':

      console.log("Add Action:", action);

      return { ...state, games: state.games.concat(action.newGame)};

    case 'DELETE_GAME':
       // debugger;
        console.log("DeletedGames:", action);
        // return {...state, games: state.games.concat(action.game) };
        return {games: state.games.filter(game => game.id !== action.game.id) }

    case 'FETCH_GAMES':
        console.log("Fetch State:", state);
        // return {...state, games: state.games.concat(action.game) };
        return { ...state, games: state.games.concat(action.games)};

    default:
      return state;
  }
};
