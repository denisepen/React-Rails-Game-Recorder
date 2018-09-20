import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  addUser } from '../actions/actions_users'
import { userLogin } from '../actions/actions_users'

class SignIn extends React.Component {
  constructor (props) {
    super (props)

    this.state={

      email: '',
      password: '',
    }
  }



  handleUserSignin = event => {
  event.preventDefault();
  const user = this.state
  this.props.userLogin(user)
  console.log("onsubmit user signin state:", this.state);

  this.setState({
    email: '',
    password: '',
  })


  // console.log("state:", this.state)

}


  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    return (
      <div>

    <form onSubmit={(event) => this.handleUserSignin(event)} className="input">
      <h2> Please Sign In </h2>


      Email:<input value={this.state.email} type="text" onChange={(e) => this.handleEmailChange(e)}/>{this.state.email}<br/>

      Password: <input value={this.state.password} type="password" onChange={(e) => this.handlePasswordChange(e)}/>{this.state.password}<br/>


      <input type="submit" value="Sign In" />
    </form><br/>
    </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (user) => {
      dispatch(userLogin(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
