import React, { Component } from 'react';
import GameContainer from './containers/game_container'
// import GameService from './actions/actions_games';
// import Games from './components/games'
import About from './components/about'
import GameStats from './containers/game_stats'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar'
import { connect } from 'react-redux';
import {  fetchGames } from './actions/index';
import NewUser from './components/new_user';
import Auth from './modules/Auth';
// import GameInput from './components/game_input'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      games: [],
      auth: Auth.isUserAuthenticated(),
    }
  }

  // componentWillMount () {
  //   GameService.fetchGames().then(games => this.setState({ games }) )
  // }

  componentWillMount () {
     this.props.fetchGames();
  }

  // addGame= (game) => {
  //    // debugger;
  //   GameService.addGame(game).then(game =>
  //      // console.log("Created Game: ", game)
  //      this.setState({
  //      games: this.state.games.concat(game)})
  //     // [...this.state.games, game]
  //   )
  // }

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
  }
}

export default connect (null, mapDispatchToProps)(App);
