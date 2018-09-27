import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navbar = (props) => {

 const componentDidMount = (props) => {
   props.authenticate()
 }
 return(
  <div>
    <NavLink
      to="/"
      /* add prop for activeStyle */
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }} exact
    >  Home  </NavLink>

    <NavLink
      to="/allgames"
      /* add prop for activeStyle */
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >  All Games  </NavLink>

    <NavLink
      to="/new"
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
    >  New  </NavLink>

    <NavLink
      to="/stats"
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: 'red'
      }}
      >Stats</NavLink>
      <NavLink
        to="/signin"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        >{localStorage.getItem("jwtToken") ? "Logout" : "Login"}</NavLink>

  </div>)}

  export default Navbar
