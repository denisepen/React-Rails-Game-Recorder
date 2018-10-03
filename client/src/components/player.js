import React from 'react';

// const Player = (props) => {

class Player extends React.Component {
    render () {
      // const user = this.props
  return(
    <div className="player">
      <h2>Player Information </h2>
      <h3>Player: {this.props.user.name} </h3>
      <h3>Gamer Tag: {this.props.user.gamer_tag} </h3>
      <h3>Gamer Email: {this.props.user.email} </h3>
      <h3>Total Games Played: {this.props.user.games ? this.props.games.length : 0} </h3>
    </div>
    )
  }
}


export default Player
