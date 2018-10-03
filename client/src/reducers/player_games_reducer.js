export default function playerGamesReducer(state = [], action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
  switch (action.type) {



    case 'FETCH_GAMES':
        console.log("Fetch Action:", action);
        return {...state,  games: action.games};




              // console.log("Added to user: ", state.user);
    default:
      return state;
  }
};
