import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from '../components/game_input'
import Games from '../components/games'

class GameContainer extends Component {

  render (){
    return(
      <div>

      <div className="input">
        <GameInput addGame={this.props.addGame}/>
      </div>


      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

const mapDispatchToProps = dispatch => ({ addGame: game => dispatch({ type: "ADD_GAME", game }) })

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
