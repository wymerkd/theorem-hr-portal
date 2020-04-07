import React from 'react';
import '../scss/_header.scss'
import { Link } from 'react-router-dom';

//need to add a log out button

function Header(){

  return(
  <div>
    <div className='header'>
      <Link to="/feedback"> Submit Feedback</Link>
      <Link to="/adminview"> Admin View</Link>
      <Link to="/employeehome"> Employee Home </Link>
      <Link> Log Out </Link>
    </div>

    <div className='theoremLogoWrapper'>
      <img className='logo' src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
    </div>
  </div>


  )
}

export default Header
