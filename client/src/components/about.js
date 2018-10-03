import React, { Component } from 'react';
// import AllGames from './allgames'
// import { deleteGame } from '../actions/index';
// import { authenticate } from '../actions/actions_users'
// import { connect } from 'react-redux';

 class About extends Component {

   // constructor(props){
   //   super(props)
   // }

   // componentDidMount(){
   //  this.props.authenticate();
   // }


  render (){
    return (
      <div className="about">
        <h1> Welcome Fortnite Lovers!</h1>
          <h3>
          Record Games, Review Your Stats and Compare Your Progess To Others
          </h3>
          {/*<AllGames deleteGame={this.props.deleteGame} games={this.props.games}/>*/}
          <img src="https://i0.wp.com/wallpapersfortech.com/wp-content/uploads/2018/01/2844B874-67B0-4E1D-969D-C614C125259C.jpeg?ssl=1" className="w3-round" alt="Fortnite" />
      </div>
    )
  }
}

export default About

// const mapStateToProps = (state) => {
//   console.log("ALLUSERGAMESstate:", state)
//   return {games: state.allUserGames, current_user: state.user};
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//       deleteGame: (game) => {
//       dispatch(deleteGame(game))
//     },
//     authenticate: () => {
//       dispatch(authenticate())
//       },
//
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(About)
