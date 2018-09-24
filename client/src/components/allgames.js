import React, { Component } from 'react';import {  addGame, fetchGames, deleteGame} from '../actions/index'
import Games from './games'
import { connect } from 'react-redux';


 class AllGames extends Component {
   // constructor(){
   //   super()
   // }




  render () {
    return(
      <div className="sideBar">
        <Games games={this.props.games}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("ALLUSERGAMESstate:", state)
  return {games: state.allUserGames};
}

// const mapStateToProps = dispatch => {
//   return {
//     getAllGames: () => {
//     dispatch(getAllGames())
//     },
//   }
// }


export default connect(mapStateToProps)(AllGames)
