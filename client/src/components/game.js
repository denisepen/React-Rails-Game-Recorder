import React from 'react';

export default (props) => {
  return (<tr >

    <td> {props.date} </td>
    <td> {props.mode} </td>
    <td> {props.max_kills} </td>
    <td> {props.final_place} </td>
    <td> {props.comments}</td>
  </tr>)
}
