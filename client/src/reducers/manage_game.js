
// const initState = {games: []};

const initState = {games: [], users:[], user: {}};
export default function manageGame(state = initState, action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
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
        console.log("Fetch Action:", action);
        // return {...state, games: state.games.concat(action.game) };
        return { ...state, games: state.games.concat(action.games)};
        // return [...state, action.newGame]

        case 'ADD_USER':
          console.log("User state:", state)
          console.log("Add User Action:", action);

          return { ...state, users: state.users.concat(action.newUser)};

          case 'FETCH_USERS':
              console.log("Fetch User State:", state);
              // return {...state, games: state.games.concat(action.game) };
              return { ...state, users: state.users.concat(action.users)};

          case 'FIND_USER':
                console.log("Finding UserState in Reducer: ", state);
                console.log("Finding UserAction in Reducer: ", action);

                return { ...state, user: action.newUser};



    default:
      return state;
  }
};
