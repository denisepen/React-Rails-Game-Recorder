import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'
import {  addGame, fetchGames, deleteGame} from '../actions/index'


class GameContainer extends React.Component {

  componentDidMount () {
    // GameService.fetchGames().then(games => this.setState({ games }) )
    this.props.fetchGames();
  }

  render (){
     console.log("GameProps",this.props)
    return(
      <div>

      <div className="input">
        <GameInput
          addGame={this.props.addGame}
          deleteGame={this.props.deleteGame}/>
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
    fetchGames: () => {
      dispatch(fetchGames())
    },
    // delete: (game) => dispatch({type: 'DELETE_GAME', payload: game })
      deleteGame: (game) => dispatch(deleteGame())
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
