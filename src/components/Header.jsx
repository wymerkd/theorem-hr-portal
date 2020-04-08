import React from 'react';
import '../scss/_header.scss'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//need to add a log out button

export default function Header(props){


  function logoutCallback(){
    props.onLogout();

  }

  return(
  <div>
    <div className='header'>
      <Link className="noUnderline" to="/feedback"> Submit Feedback</Link>
      <Link className="noUnderline" to="/adminview"> Admin View</Link>
      <Link className="noUnderline" to="/employeehome"> Employee Home </Link>
      <Link className="noUnderline" to="/login"> Log Out </Link>
      <button onClick={logoutCallback}> Log Out Real </button>
    </div>

    <div className='theoremLogoWrapper'>
      <img className='theoremLogo' src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
    </div>
  </div>


  )
}

Header.propTypes = {
  onLogout: PropTypes.func,
};
