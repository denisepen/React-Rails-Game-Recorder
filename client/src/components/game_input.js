import React, { Component } from 'react';

export default class GameInput extends Component {
  constructor(props){
    super(props);

    this.state={
      date: '',
      mode: '',
      max_kills: '',
      final_place: '',
      comments: ''
    }
  }

  handleSubmit = event => {
  event.preventDefault();
  const game = this.state
  this.props.addGame(game)
  console.log("onsubmit state:", this.state);

  this.setState({
    gameId: '',
    date: '',
    mode: '',
    max_kills: '',
    final_place: '',
    comments: ''
  })

  // below was created before ading api
  // this.props.addGame(this.state)
  console.log("state:", this.state)

}

handleDateChange = (e) => {
  this.setState({
    date: e.target.value.toLocaleString('en-US')
  })
}

handleModeChange = (e) => {
  this.setState({
    mode: e.target.value
  })
}

handleKillsChange = (e) => {
  this.setState({
    max_kills: e.target.value
  })
}


handlePlaceChange = (e) => {
  this.setState({
    final_place: e.target.value
  })
}

handleCommentsChange = (e) => {
  this.setState({
    comments: e.target.value
  })
}



  render(){
    // console.log(this.state);
    return(
      <div >

        <form onSubmit={(event) => this.handleSubmit(event)} className="input">
          <h2> Please Add Your Game </h2>
          Date: <input type="date" onChange={(e) => this.handleDateChange(e)}/>{this.state.date}<br/>


          <div>
            <p className="gameMode">Game Mode</p>
              <ul className="form">
                <li>
                  <label>
                  Solo
                    <input type="radio"
                    onChange={(e) => this.handleModeChange(e)}
                    value="Solo"
                    checked={this.state.mode === "Solo"}
                    className="radio"
                    /> <br/>
                  </label>
                  </li>
                  <li>
                    <label>
                     Duo
                      <input type="radio"
                      onChange={(e) => this.handleModeChange(e)}
                      value="Duos"
                      checked={this.state.mode === "Duos"}
                      className="radio"
                      /> <br/>
                    </label>
                  </li>
                  <li>
                    <label>
                      Squads
                        <input type="radio"
                        onChange={(e) => this.handleModeChange(e)}
                        value="Squads"
                        checked={this.state.mode === "Squads"}
                        /> <br/>
                      </label>
                  </li>
                  <li>
                    <label>
                    50v50
                      <input type="radio"
                      onChange={(e) => this.handleModeChange(e)}
                      value="50v50"
                      checked={this.state.mode === "50v50"}
                      /> <br/>
                    </label>
                  </li>
                  <li>
                    <label>
                    Playground Mode
                      <input type="radio"
                      onChange={(e) => this.handleModeChange(e)}
                      value="Playground"
                      checked={this.state.mode === "Playground"}
                      /> <br/>
                    </label>
                  </li>
                </ul>

          Max Kills: <input type="number" value={this.state.max_kills} onChange={(e) => this.handleKillsChange(e)}/>{this.state.max_kills}<br/>

          Final Place:<input value={this.state.final_place} type="number" onChange={(e) => this.handlePlaceChange(e)}/>{this.state.final_place}<br/>

          Comments: <input value={this.state.comments} type="text" onChange={(e) => this.handleCommentsChange(e)}/>{this.state.comments}<br/>
          </div>

          <input type="submit" value="Add Game" />
        </form><br/>
      </div>
    )
  }
}
