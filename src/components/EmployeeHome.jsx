import React from 'react';
import '../scss/_employeeHome.scss'
import Header from './Header'
import QuickLinks from './QuickLinks'
import EmployeeDetail from './EmployeeDetail';

function EmployeeHome(){
  return(
    <div className='EmployeeHome'>
      <Header />
      <div>
        <h2>Employee Name Goes Here</h2>
      </div>
      <QuickLinks />
      <EmployeeDetail />
    </div>
  )
}

export default EmployeeHome;
