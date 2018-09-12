import React from 'react';
import Game from './game'

const Games = props => {
  // debugger;
  const games = props.games.map((game, index) => {
    return (<Game  key={index} date={game.date} mode={game.mode} max_kills={game.max_kills} final_place={game.final_place}  comments={game.comments} />)

  }


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

  return (
    <div>
      <table>
      <thead>
          <tr>
            <th>Date</th>
            <th>Game Mode</th>
            <th>Max Kills</th>
            <th>Place</th>
            <th>Comments</th>
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
