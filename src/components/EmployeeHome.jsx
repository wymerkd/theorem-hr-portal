import React from 'react';
import '../scss/_employeeHome.scss'
import Header from './Header'
import QuickLinks from './QuickLinks'

function EmployeeHome(){
  return(
    <div className='EmployeeHome'>
      <Header />
      <div>
        <h2>Employee Name Goes Here</h2>
      </div>
      <QuickLinks />
    </div>
  )
}

export default EmployeeHome;
