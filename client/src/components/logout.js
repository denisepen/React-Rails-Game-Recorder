import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticate } from '../actions/actions_users'
import { connect } from 'react-redux';

class Logout extends Component {


  log = () => {localStorage.removeItem("jwtToken")
                this.props.authenticate();
                <Redirect to="/"/>}

render () {
  return (
    <div className="logout">
      <button onClick={this.log}>
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
  }
}


export default connect(null, mapDispatchToProps)(Logout)
