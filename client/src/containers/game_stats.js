import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class GameStats extends Component {

componentDidMount () {
  this.renderCharts()
}


 renderCharts(){
   // debugger;
   if (this.props.games === []){
     return <div>Loading </div>
   } else {
     console.log("This.props:", this.props.games);

     // const solo = []
    const soloGames = this.props.games.filter(game =>
      {
      return (game.mode === 'Solo')
    })

    const squadGames = this.props.games.filter(game =>
      {
      return (game.mode === 'Squads')
    })

    const fiftyvGames = this.props.games.filter(game =>
      {
      return (game.mode === '50v50')
    })

    const duosGames = this.props.games.filter(game =>
      {
      return (game.mode === 'Duos')
    })

    const playgroundGames = this.props.games.filter(game =>
      {
      return (game.mode === 'Playground')
    })


    debugger;
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
             <Chart  data={overallKills} color="green" svgWidth={25} svgHeight={20} />
           </td>

           <td>
             <Chart  data={overallFinalPlace} color="blue" svgWidth={25} svgHeight={20} />
           </td>
         </tr>
      </tbody>
   )
 }
}

  render () {
    return (
      <table>
        <thead>
          <th> Total Kills Overall</th>
          <th> Final Place Over Time </th>
        </thead>
          {this.renderCharts()}
      </table>
      // <table className="table table-hover">
      //   <thead>
      //     <tr>
      //       <th> Game Mode</th>
      //       <th> Total Kills </th>
      //       <th> Final Position</th>
      //       <th> Comments</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //   {this.renderCharts()}
      //   </tbody>
      // </table>
    );
  }


}

function mapStateToProps(state){
  // debugger;
  return {games: state.games}
}
export default connect (mapStateToProps)(GameStats);
