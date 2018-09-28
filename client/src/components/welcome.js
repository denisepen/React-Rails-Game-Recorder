import React from 'react';

class Welcome extends React.Component {

  render (props){
    this.props.authenticate
    return(
      <div>
      <h2>Welcome {this.props.user.name ? this.props.user.name : ""} </h2>
      </div>
    )
  }
}


export default Welcome
