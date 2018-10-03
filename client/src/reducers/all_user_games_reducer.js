// const initState = {games: [],  allUserGames: []};
export default function allUserGamesReducer(state = [], action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
  switch (action.type) {

    case 'GET_ALL_USER_GAMES':
      return {...state, allUserGames: state.concat(action.games)}

    // case 'ADD_GAME':
    //   console.log("Add Action:", action);
    //   return { ...state, games: state.games.concat(action.newGame), allUserGames: state.allUserGames.concat(action.newGame) };
    //
    // case 'DELETE_GAME':
    //    // debugger;
    //     console.log("DeletedGames:", action);
    //     // return {...state, games: state.games.concat(action.game) };
    //     return {...state, games: state.games.filter(game => game.id !== action.game.id), allUserGames: state.allUserGames.filter(game => game.id !== action.game.id) }

    // case 'FETCH_GAMES':
    //     console.log("Fetch Action:", action);
    //
    //     // return { ...state, games: state.games.concat(action.games)};
    //     return {...state,  games: action.games};

    default:
      return state;
  }
};
