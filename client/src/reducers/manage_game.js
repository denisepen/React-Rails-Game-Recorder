
// const initState = {games: []};

const initState = {games: [], users:[], user: {}, allUserGames: []};
export default function manageGame(state = initState, action) {
  console.log("Games Action:", action)
  console.log("Games State:", state)
  switch (action.type) {

    case 'GET_ALL_USER_GAMES':
      return {...state, allUserGames: state.allUserGames.concat(action.games)}

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

        // return { ...state, games: state.games.concat(action.games)};
        return {...state,  games: action.games};


        case 'ADD_USER':
          // console.log("User state:", state)
          // console.log(" User Action Signing up:", action);

          // return { ...state, users: state.users.concat(action.newUser), user: action.newUser.user };
          return { ...state, users: state.users.concat(action.newUser), user: action.newUser.user };
          // console.log("Just added user: ", state);



          case 'FIND_USER':
            console.log("Found User state:", state)
            console.log("Found User Action:", action);

            return { ...state, user: Object.assign({}, state.user, action.newUser) };

            case 'AUTH_USER':
              console.log("Auth User state:", state)
              console.log("Auth User Action:", action);

              return { ...state, user: Object.assign({}, state.user, action.user) };


          case 'FETCH_USERS':
              console.log("Fetch User State:", state);
              // return {...state, games: state.games.concat(action.game) };
              return { ...state, users: state.users.concat(action.users)};


              console.log("Added to user: ", state.user);
    default:
      return state;
  }
};
