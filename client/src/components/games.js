import React from 'react';
import Game from './game'

let games;
const Games = props => {

  // const shouldComponentUpdate = (props) => {
  //   return (props.games.filter(game => {
  //     return game.id === (undefined || null)
  //   })
  //   )
  // }

  if (!props.games){
    return  games = (<p>Please Add a game</p>)
  } else {
  // debugger;
  const onHandleDelete = (game) => props.deleteGame(game)
   games = props.games.map((game, index) => {
     // console.log("inside games - propobj", props);
    return (<Game  id={game.id} key={index} date={game.date} mode={game.mode} max_kills={game.max_kills} final_place={game.final_place}  comments={game.comments} game={game} deleteGame={props.deleteGame}/>)
  }

//
  // console.log(game);
      // <tr key={index}>
      //   <td> {game.date} </td>
      //   <td> {game.mode} </td>
      //   <td> {game.max_kills} </td>
      //   <td> {game.final_place} </td>
      //   <td> {game.victory} </td>
      //   <td> {game.comments}</td>
      // </tr>
  );
}

  return (
    <div>
      <table>
      <thead>
          <tr>
            <th>Date</th>
            <th>Game Mode</th>
            <th>Total Kills</th>
            <th>Place</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {games}

        </tbody>
      </table>

    </div>
  );

};

export default Games;

// <li key={index}>{game.mode} Kills:{game.max_kills} {game.comments}</li>;
// <ul>
//   {games}
// </ul>
