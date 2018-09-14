import React, { Component } from 'react';
import GameContainer from './containers/game_container'
 import GameService from './actions/actions_games';
import Games from './components/games'
import About from './components/about'
import GameStats from './containers/game_stats'
// import GameInput from './components/game_input'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      games: []
    }
  }

  componentDidMount () {
    GameService.fetchGames().then(games => this.setState({ games }) )
  }

  addGame= (game) => {
     // debugger;
    GameService.addGame(game).then(game =>
       // console.log("Created Game: ", game)
       this.setState({
       games: this.state.games.concat(game)})
      // [...this.state.games, game]
    )
  }

  render() {
    // console.log("Games:", this.state.games);
    return (
      <div className="App">
        <div className="navBar"><p>NavBar</p></div>
        Game Recorder
        <div className="main-content">
        <p> This receives the data from the API</p>
          <GameContainer />
        </div>

        <div className="charts">
          <GameStats />
        </div>


        <div className="sideBar" >
          {/*<Games games={this.state.games} />*/}
          <About />
        </div>
      {/*  <div className="main-content"> Main Content
        <p> This receives the data from the API</p>
          <GameContainer  />
        </div>*/}
      </div>
    );
  }
}

export default App;
