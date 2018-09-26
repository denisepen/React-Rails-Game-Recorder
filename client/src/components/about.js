import React, { Component } from 'react';
import AllGames from './allgames'
import { deleteGame } from '../actions/index';
import { authenticate } from '../actions/actions_users'
import { connect } from 'react-redux';

 class About extends Component {

   // constructor(props){
   //   super(props)
   // }

   componentDidMount(){
    this.props.authenticate();
   }


  render (){
    return (
      <div className="about">
        <h1> Welcome</h1>
          <p>
          This application allows you to record the data for each of your Fortnite games.  This data will then be collected so you can track your progress. After adding your games, please check out the stats tab to see your progress over time.
          </p>
          {<AllGames deleteGame={this.props.deleteGame} games={this.props.games}/>}
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
    },
    authenticate: () => {
      dispatch(authenticate())
      },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
