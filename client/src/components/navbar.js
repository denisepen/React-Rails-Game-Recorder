import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navbar = (props) => {

 

  props.authenticate
 return(
  <div>
  <ul className="nav">
    <li>
        <NavLink
          to="/"
          /* add prop for activeStyle */

          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }} exact
        >  Home  </NavLink>
      </li>
      <li>
        <NavLink
          to="/allgames"
          /* add prop for activeStyle */
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >  All Games  </NavLink>
        </li>
        <li>
        <NavLink
          to="/new"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >  New  </NavLink>
        </li>
        <li>
        <NavLink
          to="/stats"
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
          >Stats</NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            >{localStorage.getItem("jwtToken") ? props.authenticate && props.user.name : "Login"}</NavLink>
          </li>
        </ul>
  </div>)}

  export default Navbar
