import React, { Component } from 'react';
import  SignIn  from '../components/signin';
import  NewUser  from '../components/new_user';
import  Logout  from '../components/logout';
import { authenticate, logout } from '../actions/actions_users'
import { connect } from 'react-redux';
import Player from '../components/player'
import { deleteGame } from '../actions/index';
import Games from '../components/games'

// import { Redirect } from 'react-router'

class LoginLogout extends Component{

  render(){
    // this.props.authenticate
    if (localStorage.getItem('jwtToken')){
      return (
        <div>{this.props.authenticate}
          <Logout logout={this.props.logout} />
          <Player user={this.props.user}/>

        </div>)
    } else {
      return (<div><NewUser /> <SignIn /></div>)
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      dispatch(authenticate())
    },
    logout: () => {
      dispatch(logout())
    },
    deleteGame: (game) => {
      dispatch(deleteGame(game))
    }}

}

function mapStateToProps(state){
  // debugger;
  return {games: state.games, user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout)

// <Games games={this.props.games}
// deleteGame={this.props.deleteGame}
// current_user={this.props.current_user}
// />
