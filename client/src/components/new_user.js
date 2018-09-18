import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  addUser } from '../actions/actions_users'

class NewUser extends React.Component {
  constructor () {
    super ()

    this.state={
      name: '',
      gamer_tag: '',
      email: '',
      password: '',
    }
  }



  handleUserSubmit = event => {
  event.preventDefault();
  const user = this.state
  this.props.addUser(user)
  console.log("onsubmit user state:", this.state);

  this.setState({
    name: '',
    gamer_tag: '',
    email: '',
    password: '',
  })


  // console.log("state:", this.state)

}

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleTagChange = (e) => {
    this.setState({
      gamer_tag: e.target.value
    })
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

    <form onSubmit={(event) => this.handleUserSubmit(event)} className="input">
      <h2> Please Sign Up </h2>
      Name: <input type="text" value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>{this.state.name}<br/>


      Gamer Tag: <input type="text" value={this.state.gamer_tag} onChange={(e) => this.handleTagChange(e)}/>{this.state.gamer_tag}<br/>

      Email:<input value={this.state.email} type="text" onChange={(e) => this.handleEmailChange(e)}/>{this.state.email}<br/>

      Password: <input value={this.state.password} type="text" onChange={(e) => this.handlePasswordChange(e)}/>{this.state.password}<br/>


      <input type="submit" value="Create Account" />
    </form><br/>
    </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    }
  }
}

export default NewUser;
