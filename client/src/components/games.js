import React, { Component } from 'react';
import Game from './game';
// import { authenticate } from '../actions/users'


// const Games = props => {

// console.log("inside games - propobj", props);

class Games extends Component {

  componentDidMount(){
    if(this.props.fetchGames){
      // this.props.authenticate()
      this.props.fetchGames();
    }
  }




render () {
  let games;
  if (!this.props && this.props.games.length > 0){
    return  games = (<p>Please Add a game</p>)
  } else {
    // this.props.authenticate
   games = this.props.games.map((game, index) => {

    return (<Game  current_user={this.props.current_user}
              user={game.user}
      id={game.id} key={index} date={new Date(game.date).toLocaleDateString()} mode={game.mode} max_kills={game.max_kills} final_place={game.final_place}  comments={game.comments} game={game} deleteGame={this.props.deleteGame}/>)
    }
  );
  }
  return (
    <div>
      <table >
      <thead>
          <tr>
            <th>Date</th>
            <th>Player</th>
            <th>Game Mode</th>
            <th>Total Kills</th>
            <th>Place</th>
            <th>Comments</th>
            <th>Likes</th>


            {(localStorage.getItem('jwtToken')) ?   <th>Delete</th> : "" }

          </tr>
        </thead>
        <tbody>
          {games}

        </tbody>
      </table>

    </div>
  );
}

};

export default Games;

// <li key={index}>{game.mode} Kills:{game.max_kills} {game.comments}</li>;
// <ul>
//   {games}
// </ul>
