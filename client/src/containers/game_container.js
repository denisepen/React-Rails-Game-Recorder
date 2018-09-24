import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'
import {  addGame, fetchGames, deleteGame} from '../actions/index'


class GameContainer extends Component {

  // componentWillMount () {
  //   // GameService.fetchGames().then(games => this.setState({ games }) )
  //   this.props.fetchGames();
  // }
  //
  // componentDidUpdate(){
  //   this.props.fetchGames();
  // }

  render (){
     console.log("GameProps",this.props)
    return(
      <div>
      {(localStorage.getItem('jwtToken')) ?
        <div className="input">
          <GameInput
            addGame={this.props.addGame}
            />
        </div>
       : <h3 className="input"> Please Sign In to Add Create Your Account </h3> }

      <div className="sideBar">
        <Games games={this.props.games}
        deleteGame={this.props.deleteGame}
        />
      </div>

      </div>
    )
  }
}

// const mapStateToProps = ({ games }) => ({ games })

const mapStateToProps = (state) => {
  console.log("propsstate:", state)
  return {games: state.games, user: state.user};
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
