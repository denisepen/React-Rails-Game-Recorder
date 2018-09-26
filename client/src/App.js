import React, { Component } from 'react';
import GameContainer from './containers/game_container'
// import GameService from './actions/actions_games';
// import Games from './components/games'
import About from './components/about'
import GameStats from './containers/game_stats'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import { connect } from 'react-redux';
import {  fetchGames, getAllGames } from './actions/index'
import NewUser from './components/new_user'
import SignIn from './components/signin';
import Logout from './components/logout'
import { authenticate } from './actions/actions_users'

// import GameInput from './components/game_input'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   games: [],
    //   allUserGames: []
    // }
  }


  componentDidMount () {
     this.props.getAllGames();
     this.props.authenticate()
     // if(localStorage.getItem('jwtToken')){
       // this.props.fetchGames()
     // }
  }



  render() {
    // console.log("Games:", this.state.games);
    return (

      <Router>
        <React.Fragment>
            <Navbar />
            <Route exact path="/" render={About} />
            <Route exact path="/new" component={GameContainer} />
            <Route exact path="/stats" component={GameStats} />
            <Route exact path="/signup" component={NewUser} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/logout' component={Logout} />


        </React.Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => {
      dispatch(fetchGames())
    },
    getAllGames: () => {
      dispatch(getAllGames())
    },
    authenticate: () => {
      dispatch(authenticate())
    },
  }
}

export default connect (null, mapDispatchToProps)(App);

// <Route exact path='/logout' render={this.logout()} />
