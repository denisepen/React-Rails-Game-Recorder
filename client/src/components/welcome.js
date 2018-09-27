import React from 'react';

const Welcome = (props) => {
  return(
    <div>
    <h2>Welcome {props.user.name ? props.user.name : ""} </h2>
    </div>
  )
}


export default Welcome
