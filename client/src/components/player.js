import React from 'react';

const Player = (props) => {
  return(
    <div className="player">
      <h2>Player Information </h2>
      <h3>Player: {props.user.name} </h3>
      <h3>Gamer Tag: {props.user.gamer_tag} </h3>
      <h3>Gamer Email: {props.user.email} </h3>
      <h3>Total Games Played: {props.user.games ? props.user.games.length : 0} </h3>
    </div>
  )
}


export default Player
