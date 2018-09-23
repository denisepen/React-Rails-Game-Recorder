
// const initState = {games: []};

const initState = {games: [], users:[], user: {}};
export default function manageGame(state = initState, action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
  switch (action.type) {

    case 'ADD_GAME':

      console.log("Add Action:", action);
      // debugger
      //   const game = action.newGame
      //   game.user_id = state.user.id

      return { ...state, games: state.games.concat(action.newGame)};
      // return { ...state, games: state.games.concat(game)};



    case 'DELETE_GAME':
       // debugger;
        console.log("DeletedGames:", action);
        // return {...state, games: state.games.concat(action.game) };
        return {games: state.games.filter(game => game.id !== action.game.id) }

    case 'FETCH_GAMES':
        console.log("Fetch Action:", action);
        // return {...state, games: state.games.concat(action.game) };
        return { ...state, games: state.games.concat(action.games)};


        case 'ADD_USER':
          // console.log("User state:", state)
          console.log(" User Action Signing up:", action);

          return { ...state, users: state.users.concat(action.newUser), user: action.newUser };

          case 'FIND_USER':
            console.log("Found User state:", state)
            console.log("Found User Action:", action);


            return { ...state, user: action.newUser.user };

          case 'FETCH_USERS':
              console.log("Fetch User State:", state);
              // return {...state, games: state.games.concat(action.game) };
              return { ...state, users: state.users.concat(action.users)};



    default:
      return state;
  }
};
