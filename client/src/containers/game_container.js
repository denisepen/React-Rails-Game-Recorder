import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'
import {  addGame, fetchGames, deleteGame} from '../actions/index'
import { authenticate } from '../actions/actions_users'


class GameContainer extends Component {


  //
  componentDidMount(){
    if(localStorage.getItem('jwtToken')){
      this.props.fetchGames()
    }

    this.props.authenticate()
  }


  render (){
    console.log("Container Props: ", this.props);

    if (localStorage.getItem('jwtToken')){
      return(
        <div>
          <div className="input">
            <GameInput
              addGame={this.props.addGame}
              />
          </div>
        </div>
      )
    }

      else {
        return (
          <div className="input">
          <h1>Please Login To Begin Saving Your Games </h1>
        </div>
      )
      }
  }
}

// const mapStateToProps = ({ games }) => ({ games })

const mapStateToProps = (state) => {
  console.log("propsstate:", state)
  return {games: state.games, current_user: state.user};
}


const mapDispatchToProps = dispatch => {
  return {
    addGame: (game) => {
      dispatch(addGame(game))
    },
    fetchGames: () => {
      dispatch(fetchGames())
    },
    // delete: (game) => dispatch({type: 'DELETE_GAME', payload: game })
    deleteGame: (game) => {
      dispatch(deleteGame(game))
    },
    authenticate: () => {
      dispatch(authenticate())
      },
  }
}
// ({
//   addGame: game => {
//      debugger;
//   dispatch({ type: "ADD_GAME", game })
// }
//  })

export default connect (mapStateToProps, mapDispatchToProps)(GameContainer)




// function mapDispatchToProps(dispatch) {
//   return {
//     addGame: function(game) {
//       return dispatch({ type: "ADD_GAME", game });
//     }
//   };
// }

// <div className="sideBar">
//   <Games games={this.props.games}/>
// </div>
