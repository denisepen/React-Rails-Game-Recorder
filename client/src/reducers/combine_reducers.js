import { combineReducers } from "redux";
import manageGame from './manage_game';
import manageUsers from './manage_users'

const rootReducer = combineReducers({

  games: manageGame,
  users: manageUsers

});

export default rootReducer;
