import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  addUser, authenticate } from '../actions/actions_users'
import { Redirect } from 'react-router-dom'

class NewUser extends Component {
  constructor (props) {
    super (props)

    this.state={
      name: '',
      gamer_tag: '',
      email: '',
      password: '',
      games: []
    }
  }



  handleUserSubmit = event => {
  event.preventDefault();
  const user = this.state

  if ((this.state.name === "") || (this.state.email === "") || (!this.state.email.includes("@")) || (this.state.password === "") || (this.state.password.length < 6)){

    alert("Please Sign In. Password Name, Email, & Password Required. Password Must be at least 6 characters.")
    // console.log("onsubmit user state:", this.state);
  } else {

    this.props.addUser(user)
    this.setState({
      name: '',
      gamer_tag: '',
      email: '',
      password: '',
    })
  }


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
    if (localStorage.getItem('jwtToken')) {
      // this.setState({jwt: localStorage.getItem('jwtToken')})
      return <Redirect to='/' />
    } else {
    return (
      <div>

    <form onSubmit={(event) => this.handleUserSubmit(event)} className="input right" >
      <h2> Please Sign Up </h2>
      Name: <input type="text" value={this.state.name} onChange={(e) => this.handleNameChange(e)}/>{/*this.state.name*/}<br/>


      Gamer Tag: <input type="text" value={this.state.gamer_tag} onChange={(e) => this.handleTagChange(e)}/>{/*this.state.gamer_tag*/}<br/>

      Email:<input value={this.state.email} type="text" onChange={(e) => this.handleEmailChange(e)}/>{/*this.state.email*/}<br/>

      Password: <input value={this.state.password} type="password" onChange={(e) => this.handlePasswordChange(e)}/>{/*this.state.password*/}<br/>


      <input type="submit" value="Create Account" />
    </form><br/>
    </div>

    )
  }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      dispatch(addUser(user))
    },
    authenticate: () => {
      dispatch(authenticate())
    },
  }
}

export default connect(null, mapDispatchToProps)(NewUser);
