import React from 'react';
import '../scss/_header.scss'
        
function Header(props){ 
  
  return(
    <div className='header'>

      <div className='theoremLogoWrapper'>
        <img src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
      </div>

      <div className='headerTitleWrapper'>
        <h1 className='headerTitle'>Human Resources</h1>
      </div>

      <div className='headerUserInfo'>
        <p>{props.selectedEmployee.fullName}</p>
        <p>LogIn/Out</p>
      </div>
    </div>
  )
}

export default Header

