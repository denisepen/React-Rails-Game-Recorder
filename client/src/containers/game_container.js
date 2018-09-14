import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'
import { updatedGames, addGame, fetchGames} from '../actions/index'

class GameContainer extends Component {

  render (){
     console.log("Game",this.props)
    return(
      <div>

      <div className="input">
        <GameInput addGame={this.props.addGame}/>
      </div>
      <div className="sideBar">
        <Games games={this.props.games}/>
      </div>

      </div>
    )
  }
}

// const mapStateToProps = ({ games }) => ({ games })

const mapStateToProps = (state) => {
  console.log("propsstate:", state)
  return {games: state.games};
}

const mapDispatchToProps = dispatch => {
  return {
    addGame: (game) => {
      dispatch(addGame(game))
    },
    fetchGames: (game) => {
      dispatch(fetchGames())
    }
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
