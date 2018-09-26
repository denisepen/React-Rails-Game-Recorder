import React from 'react';

const  Game = (props) => {
  // console.log('inside game', props);
  // const deleteGame = props.deleteGame;

  // console.log("GameProps: ", props);
  console.log("Inside Game: ", (props.current_user.id === props.game.user.id));
// debugger
  const onClickHandler = (e) => {
    e.preventDefault();
    // console.log(this);
     props.deleteGame(props.game)
  }

  return (<tr >

    <td> {props.date} </td>
    <td> {props.user.name} </td>
    <td> {props.mode} </td>
    <td> {props.max_kills} </td>
    <td> {props.final_place} </td>
    <td> {props.comments}</td>

    {(localStorage.getItem('jwtToken') && (props.current_user.id === props.game.user.id)) ?
      // this.setState({jwt: localStorage.getItem('jwtToken')})
      <td><button onClick={ (e) => onClickHandler(e) }>Delete</button></td> : ""
     }
  </tr>)
}

export default Game;
// <td><button onClick={() => props.deleteGame(props.id)}>DELETE</button></td>
