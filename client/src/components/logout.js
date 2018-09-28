import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticate, logout } from '../actions/actions_users'
import { connect } from 'react-redux';

class Logout extends Component {

  componentDidMount(){
    this.props.authenticate()
  }


  log = () => {localStorage.removeItem("jwtToken")
                this.props.logout();
              }

render () {
  return (
    <div className="logout">
      <button onClick={this.log} className="logout">
        Logout
      </button>
    </div>
   )
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
  }
}


export default connect(null, mapDispatchToProps)(Logout)
