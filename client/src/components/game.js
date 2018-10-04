import React from 'react';

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: 0
    }
  }


// debugger
   onClickHandler = (e) => {
    e.preventDefault();
    // console.log(this);
     this.props.deleteGame(this.props.game)
  }

   onLike = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        likes: prevState.likes +1
      }
    })
  }

render (){
  return (<tr >
    <td> {this.props.date} </td>
    <td> {this.props.user.name} </td>
    <td> {this.props.mode} </td>
    <td> {this.props.max_kills} </td>
    <td style = {this.props.final_place == 1 ? {fontWeight: 'bold', color: 'orange', border: '2px solid red'} : {color: 'black'}}> {this.props.final_place} </td>
    <td> {this.props.comments}</td>
    <td><button onClick={ (e) => this.onLike(e) }>{this.state.likes}</button></td>

    {(localStorage.getItem('jwtToken') && (this.props.current_user.id === this.props.game.user.id)) ?
      // this.setState({jwt: localStorage.getItem('jwtToken')})
      <td><button onClick={ (e) => this.onClickHandler(e) }>Delete</button></td> : ""
     }
  </tr>)
}


}

export default Game;
// <td><button onClick={() => props.deleteGame(props.id)}>DELETE</button></td>
