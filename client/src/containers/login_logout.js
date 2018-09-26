import React, { Component } from 'react';
import  SignIn  from '../components/signin';
import  NewUser  from '../components/new_user';
import  Logout  from '../components/logout';
import { authenticate } from '../actions/actions_users'
import { connect } from 'react-redux';
// import { Redirect } from 'react-router'

class LoginLogout extends Component{

  render(){
    if (localStorage.getItem('jwtToken')){
      this.props.authenticate()
      return (<div><Logout /></div>)
    } else {
      return (<div><NewUser /> <SignIn /></div>)
    }
      // localStorage.getItem('jwtToken') ? return (<div><Logout /></div>) : return (<div><NewUser /> <SignIn /></div>)

  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {
      dispatch(authenticate())
    },
  }
}

export default connect(null, mapDispatchToProps)(LoginLogout)
