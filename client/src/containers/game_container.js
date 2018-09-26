import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'
import {  addGame, fetchGames, deleteGame} from '../actions/index'


class GameContainer extends Component {


  //
  componentDidMount(){
    localStorage.getItem('jwtToken') ? this.props.fetchGames() : <h2> XXXXXXXX </h2>

       // this.props.fetchGames()

  }
  //
  // componentWillUnmount(){
  //   this.props.games = []
  // }


  render (){
    console.log("Container Props: ", this.props);
    if (this.props){
      return(
        <div>
          <div className="input">
            <GameInput
              addGame={this.props.addGame}
              />
          </div>


        <div className="sideBar">
          <Games games={this.props.games}
          deleteGame={this.props.deleteGame}
          current_user={this.props.current_user}
          />
        </div>

        </div>
      )
    }

      else {
        return (
          <div className="input">
          <GameInput
            addGame={this.props.addGame}
            />
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
