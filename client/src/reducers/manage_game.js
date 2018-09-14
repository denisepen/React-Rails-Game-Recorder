export default function manageGame(state = {games: [],}, action) {
  switch (action.type) {

    case 'ADD_GAME':
    // debugger;
      console.log("state:", state);
      return {...state, games: state.games.concat(action.game) };

    default:
      return state;
  }
};
