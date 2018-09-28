import React, { Component } from 'react';
import  SignIn  from '../components/signin';
import  NewUser  from '../components/new_user';
import  Logout  from '../components/logout';
import { authenticate, logout } from '../actions/actions_users'
import { connect } from 'react-redux';

// import { Redirect } from 'react-router'

class LoginLogout extends Component{

  render(){
    // this.props.authenticate
    if (localStorage.getItem('jwtToken')){
      return (
        <div>{this.props.authenticate}
          <Logout logout={this.props.logout} />

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
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginLogout)
