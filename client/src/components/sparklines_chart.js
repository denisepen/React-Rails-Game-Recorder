import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const SparkChart = (props) => {

  return(
    <Sparklines data={props.soloData, props.duoData, props.fiftyData, props.squadData, props.playgroundData} width={100} height={20}>
      <SparklinesLine color="blue" />
    </Sparklines>
  )
}

export default SparkChart
