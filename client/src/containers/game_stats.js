import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import { fetchGames } from '../actions/index'
import PieChart from '../components/pie_chart'

class GameStats extends Component {
  // constructor (props) {
  //   super(props)
  //
  //   // this.state = props
  //   // this.props.fetchGames();
  // }

// componentWillMount() {
//   // this.props.fetchGames();
//   this.renderCharts()
// }

componentWillUnmount () {
  this.props = {games: []}
}

createPieChart () {
  const total = this.props.games.length
  const soloGames =this.props.games.filter(game => (game.mode === 'Solo'))
  const squadGames = this.props.games.filter(game => (game.mode === 'Squads'))
  const fiftyvGames = this.props.games.filter(game => (game.mode === '50v50'))
  const duoGames = this.props.games.filter(game => (game.mode === 'Duos'))
  const playgroundGames = this.props.games.filter(game => (game.mode === 'Playground'))

  const pieData = [soloGames.length, squadGames.length, fiftyvGames.length, duoGames.length, playgroundGames.length]

  return (
    <PieChart  data={pieData} total={this.props.games.length}/>
  )


}


createModeCharts () {
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
     }
   );

// calc final place over time while playing duos
   const duoFinalPlace = duoGames.map(game => {
       return (game.final_place)
       });

  const playgroundGames = this.props.games.filter(game =>
    { return (game.mode === 'Playground') })

 //  const playgroundKills = [];
 //  const PlaygroundKills = playgroundGames.map(game => {
 //    return playgroundKills.push(game.max_kills)
 //   }
 // );

  const playgroundKills = playgroundGames.map(game => game.max_kills)


console.log("PG Games", playgroundGames);
console.log("PG Kills", playgroundKills);
//  to calc data for final position playing playground mode
 const pgFinalPlace = playgroundGames.map(game => {
     return (game.final_place)
     });

    // const  pieData = [soloGames.length, squadGames.length, fiftyvGames.length, duoGames.length, playgroundGames.length]

 return (
    <div>

       <tbody>
           <tr>
           <td> Total Kills </td>
             <td>

               <Chart  data={soloKills} color="red" mode={'Solo'} y={'Total Kills'} label={'Total Kills'}/>

             </td>
             <td>
               <Chart  data={duoKills} color="purple" mode={'Duos'} y={'Total Kills'} label={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={squadKills} color="orange"  mode={'Squads'} y={'Total Kills'} label={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={fiftyvKills} color="green"  mode={'50v50'} y={'Total Kills'} label={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={playgroundKills} color="blue" mode={'Playground'}  y={'Total Kills'} label={'Total Kills'}/>
             </td>
           </tr>
           <tr>
           <td> Final Position </td>
             <td>
               <Chart  data={soloFinalPlace} color="red" mode={'Solo'} y={'Final Position'} label={'Final Position'}/>
             </td>
             <td>
               <Chart  data={duoFinalPlace} color="purple" mode={'Duos'} y={'Final Position'} label={'Final Position'}/>
             </td>
             <td>
               <Chart  data={squadFinalPlace} color="orange" mode={'Squads'} y={'Final Position'} label={'Final Position'}/>
             </td>
             <td>
               <Chart  data={fiftyvFinalPlace} color="green" mode={'50v50'} y={'Final Position'} label={'Final Position'}/>
             </td>
             <td>
               <Chart  data={pgFinalPlace} color="blue" mode={'Playground'} y={'Final Position'} label={'Final Position'}/>
             </td>
           </tr>
        </tbody>
    </div>
 )

}

 renderCharts(){
   // debugger;
   if (this.props.games === []){
     return <div>Loading </div>
   } else {
     console.log("This.props:", this.props.games);

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
    return (
      <div>
        <div>
          {this.createPieChart()}
        </div>
          <br/>

       <table className="table table-hover">
         <thead>
           <tr>
            <th>  </th>
             <th> </th>
             <th>  </th>
             <th> </th>
             <th>  </th>
                <th>  </th>
           </tr>
         </thead>

         {this.createModeCharts()}

       </table>
      </div>
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
  return {games: state.games}
}
export default connect (mapStateToProps, mapDispatchToProps)(GameStats);

// <div>
//   <table>
//     <thead>
//       <th> Game Kills Over Time</th>
//       <th> Final Place Over Time </th>
//     </thead>
//       {this.renderCharts()}
//     </table>
//   </div>
