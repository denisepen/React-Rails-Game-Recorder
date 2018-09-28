import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/newline_chart'
import { fetchGames } from '../actions/index'
import PieChart from '../components/pie_chart'
import { authenticate } from '../actions/actions_users'


class GameStats extends Component {

componentDidMount(){
 this.props.fetchGames()
 this.props.authenticate()
 }

createTotalGames(){
  const total = this.props.games.length;
  return (
    <div>
      <h2>Total Games Played: {total} </h2>
    </div>
  )
}

createPieChart () {
  if (this.props.games.length > 0){
  const total = this.props.games.length;
  const soloGames =this.props.games.filter(game => (game.mode === 'Solo'))
  const squadGames = this.props.games.filter(game => (game.mode === 'Squads'))
  const fiftyvGames = this.props.games.filter(game => (game.mode === '50v50'))
  const duoGames = this.props.games.filter(game => (game.mode === 'Duos'))
  const playgroundGames = this.props.games.filter(game => (game.mode === 'Playground'))

  const pieData = [soloGames.length, squadGames.length, fiftyvGames.length, duoGames.length, playgroundGames.length]

  return (
    <PieChart  data={pieData} total={total}/>
  )
 }
}


createModeCharts () {
  if (this.props.games.length > 0){
  const gameIds = this.props.games.map(game => game.id)
  console.log("game ids", gameIds);

  const soloGames = this.props.games.filter(game =>
    { return (game.mode === 'Solo') })

    const soloKills = soloGames.map(game => {
       return (game.max_kills)
      }
    );

    const soloFinalPlace = soloGames.map(game => {
        return (game.final_place)
        });

  const squadGames = this.props.games.filter(game =>
    { return (game.mode === 'Squads') })

    const squadKills = squadGames.map(game => {
      return (game.max_kills)
     }
   );

   const squadFinalPlace = squadGames.map(game => {
       return (game.final_place)
       });

  const fiftyvGames = this.props.games.filter(game =>
    { return (game.mode === '50v50') })

  const fiftyvKills = fiftyvGames.map(game => {
    return (game.max_kills)
   }
 );

 const fiftyvFinalPlace = fiftyvGames.map(game => {
     return (game.final_place)
     });

  const duoGames = this.props.games.filter(game =>
    { return (game.mode === 'Duos') })

    const duoKills = duoGames.map(game => {
      return (game.max_kills)
      // return [game.max_kills, new Date(game.date).toLocaleDateString()]
      // return {game.date: game.max_kills}
     }
   );
console.log("Duo Kills: ", duoKills, );
// calc final place over time while playing duos
   const duoFinalPlace = duoGames.map(game => {
       return (game.final_place)
       });

  const playgroundGames = this.props.games.filter(game =>
    { return (game.mode === 'Playground') })

  const playgroundKills = playgroundGames.map(game => game.max_kills)


console.log("PG Games", playgroundGames);
console.log("PG Kills", playgroundKills);
//  to calc data for final position playing playground mode
 const pgFinalPlace = playgroundGames.map(game => {
     return (game.final_place)
     });


 return (

   <div>
    <Chart  chartTitle={"Total Kills"} gameIds={gameIds} soloData={soloKills}  duoData={duoKills} squadData={squadKills} fiftyData={fiftyvKills} playgroundData={playgroundKills} />


   <Chart  chartTitle={"Final Position"} gameIds={gameIds} soloData={soloFinalPlace}  duoData={duoFinalPlace} squadData={squadFinalPlace} fiftyData={fiftyvFinalPlace} playgroundData={pgFinalPlace}/>
  </div>
 )
}}



  render () {
    // debugger
    if(this.props.user.name) {
      this.props.fetchGames;
    }
    console.log("Game Charts User props ", this.props);
    return (

      <div>
        <div className="totalGames">
        {this.createTotalGames()}
        </div>
        <br/>
        {this.createPieChart()}
        <br/>
        {this.createModeCharts()}
      </div>
    );
  }
  }


const mapDispatchToProps = dispatch => {
  return {

    fetchGames: () => {
      dispatch(fetchGames())
    },
    authenticate: () => {
      dispatch(authenticate())
    },
  }
}

function mapStateToProps(state){
  // debugger;
  return {games: state.games, user: state.user}
}
export default connect (mapStateToProps, mapDispatchToProps)(GameStats);

// if ( {this.props.user !== {}} ){
//   <h1> Welcome {this.props.games[0].user.name}</h1>
// } else {
//   <h1> Welcome </h1>
// }
