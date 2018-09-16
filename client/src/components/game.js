import React from 'react';

export default (props) => {
  console.log('inside game', props);
  // const deleteGame = props.deleteGame;
  return (<tr >


    <td> {props.date} </td>
    <td> {props.mode} </td>
    <td> {props.max_kills} </td>
    <td> {props.final_place} </td>
    <td> {props.comments}</td>
    <td><button onClick={ () => props.deleteGame(props.game) }>Delete</button></td>
  </tr>)
}

// <td><button onClick={() => props.deleteGame(props.id)}>DELETE</button></td>
