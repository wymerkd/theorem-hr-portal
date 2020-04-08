import React from 'react';
import '../scss/_header.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Login Status Header Components

import LoggedInHeader from './LoggedInHeader';
import LoggedOutHeader from './LoggedOutHeader';

//need to add a log out button

export default function Header(props){


  function logoutCallback(){
    props.onLogout();
  }

  if (props.login){
    return <LoggedInHeader copyOnLogout = {props.onLogout}/>
  }
  else {
    return <LoggedOutHeader/>
  }
}

Header.propTypes = {
  onLogout: PropTypes.func,
  login: PropTypes.bool
};
