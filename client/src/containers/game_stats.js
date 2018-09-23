import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/newline_chart'
import { fetchGames } from '../actions/index'
import PieChart from '../components/pie_chart'
import SparkChart from '../components/sparklines_chart';

class GameStats extends Component {
  constructor (props) {
    super(props)
  //
  //   // this.state = props
  //   // this.props.fetchGames();
  }

// componentWillMount() {
//   this.props.fetchGames();
//   this.renderCharts()
// }

// componentWillUnmount () {
//   this.props = {games: []}
// }

// const total = this.props.games.length
// console.log(this.props.games.length);

createTotalGames(){
  const total = this.props.games.length;
  return (
    <div>
      <h2>Total Games Played: {total} </h2>
    </div>
  )
}

createPieChart () {
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


createModeCharts () {
  const gameIds = this.props.games.map(game => game.id)
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
      // return (game.max_kills)
      return [game.max_kills, game.date]
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

     // <SparkChart soloData={soloKills}  duoData={duoKills} squadData={squadKills} fiftyData={fiftyvKills} playgroundData={playgroundKills} />

    // Below is the data fot eh chartjs stacked chart
     // <Chart  soloData={soloKills}  duoData={duoKills} squadData={squadKills} fiftyData={fiftyvKills} playgroundData={playgroundKills}/>
 return (

   <div>
    <Chart  chartTitle={"Total Kills"} gameIds={gameIds} soloData={soloKills}  duoData={duoKills} squadData={squadKills} fiftyData={fiftyvKills} playgroundData={playgroundKills} />


   <Chart  chartTitle={"Final Position"} soloData={soloFinalPlace}  duoData={duoFinalPlace} squadData={squadFinalPlace} fiftyData={fiftyvFinalPlace} playgroundData={pgFinalPlace}/>
  </div>
    // <div>
    //
    //
    //    <tbody>
    //        <tr>
    //        <td> Total Kills </td>
    //          <td>
    //
    //            <Chart  data={soloKills} color="red" mode={'Solo'} y={'Total Kills'} label={'Total Kills'}/>
    //
    //          </td>
    //          <td>
    //            <Chart  data={duoKills} color="purple" mode={'Duos'} y={'Total Kills'} label={'Total Kills'}/>
    //          </td>
    //          <td>
    //            <Chart  data={squadKills} color="orange"  mode={'Squads'} y={'Total Kills'} label={'Total Kills'}/>
    //          </td>
    //          <td>
    //            <Chart  data={fiftyvKills} color="green"  mode={'50v50'} y={'Total Kills'} label={'Total Kills'}/>
    //          </td>
    //          <td>
    //            <Chart  data={playgroundKills} color="blue" mode={'Playground'}  y={'Total Kills'} label={'Total Kills'}/>
    //          </td>
    //        </tr>
    //        <tr>
    //        <td> Final Position </td>
    //          <td>
    //            <Chart  data={soloFinalPlace} color="red" mode={'Solo'} y={'Final Position'} label={'Final Position'}/>
    //          </td>
    //          <td>
    //            <Chart  data={duoFinalPlace} color="purple" mode={'Duos'} y={'Final Position'} label={'Final Position'}/>
    //          </td>
    //          <td>
    //            <Chart  data={squadFinalPlace} color="orange" mode={'Squads'} y={'Final Position'} label={'Final Position'}/>
    //          </td>
    //          <td>
    //            <Chart  data={fiftyvFinalPlace} color="green" mode={'50v50'} y={'Final Position'} label={'Final Position'}/>
    //          </td>
    //          <td>
    //            <Chart  data={pgFinalPlace} color="blue" mode={'Playground'} y={'Final Position'} label={'Final Position'}/>
    //          </td>
    //        </tr>
    //     </tbody>
    // </div>
 )

}

 renderCharts(){
   // debugger;
   if (this.props.games === []){
     return <div>Loading </div>
   } else {
     console.log("This.props.games:", this.props.games);

  const overallKills = [];
   const OverallKills = this.props.games.map(game => {
     return overallKills.push(game.max_kills)
    }
  );

  const overallFinalPlace = [];

    const OverallFinalPlace = this.props.games.map(game => {
      return overallFinalPlace.push(game.final_place)
      });

    const finalPosition = this.props.games.map(game =>
     game.final_place);

   return (
     <tbody>
         <tr>
           <td>
             <Chart  data={overallKills} color="green" mode={'All Games'} />
           </td>

           <td>
             <Chart  data={overallFinalPlace} color="blue" mode={'All Games'} />
           </td>
         </tr>
      </tbody>
   )
 }
}

// render () {
//   return (
//     <div>
//       {this.createModeCharts()}
//     </div>
//   )
//
// }

  render () {
    // debugger

    console.log("Game Charts User props ", this.props);
    return (

      <div>
      {this.createTotalGames()}
        <br/>
        {this.createPieChart()}
        <br/>
        {this.createModeCharts()}
      </div>


      // <div>
      //
      //
      //
      //   <div>
      //     {this.createPieChart()}
      //   </div>
      //     <br/>
      //
      //  <table className="table table-hover">
      //    <thead>
      //      <tr>
      //       <th>  </th>
      //        <th> </th>
      //        <th>  </th>
      //        <th> </th>
      //        <th>  </th>
      //           <th>  </th>
      //      </tr>
      //    </thead>
      //
      //    {this.createModeCharts()}
      //
      //  </table>
      // </div>
    );
  }


}

const mapDispatchToProps = dispatch => {
  return {

    fetchGames: () => {
      dispatch(fetchGames())
    }
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

// <div>
//   <table>
//     <thead>
//       <th> Game Kills Over Time</th>
//       <th> Final Place Over Time </th>
//     </thead>
//       {this.renderCharts()}
//     </table>
//   </div>
