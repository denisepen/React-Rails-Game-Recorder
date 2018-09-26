import React, { Component } from 'react';import {  addGame, fetchGames, deleteGame} from '../actions/index'
import Games from './games'
import { connect } from 'react-redux';


 class AllGames extends Component {

  render () {
    return(
      <div className="sideBar">
        <Games games={this.props.games}
        current_user={this.props.current_user}
        deleteGame={this.props.deleteGame}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("ALLUSERGAMESstate:", state)
  return {games: state.allUserGames, current_user: state.user};
}

const mapDispatchToProps = dispatch => {
  return {
      deleteGame: (game) => {
        dispatch(deleteGame(game))
      }
  }
}

// const mapStateToProps = dispatch => {
//   return {
//     getAllGames: () => {
//     dispatch(getAllGames())
//     },
//   }
// }


export default connect(mapStateToProps)(AllGames)