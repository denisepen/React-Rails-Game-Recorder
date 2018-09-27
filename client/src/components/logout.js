import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { authenticate } from '../actions/actions_users'
import { connect } from 'react-redux';

class Logout extends Component {

  componentDidMount(){
    this.props.authenticate()
  }


  log = () => {localStorage.removeItem("jwtToken")
                this.props.authenticate();
              return  <Redirect to="/"/>}

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
