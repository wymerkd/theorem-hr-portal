import React from 'react';
import '../scss/_employeeHome.scss'
import Header from './Header'
import QuickLinks from './QuickLinks'
import EmployeeDetail from './EmployeeDetail';

function EmployeeHome(props){

  return(
    <div className='employeeHome row'>
      <div className="headerWrapper col-12">
        <Header selectedEmployee = {props.selectedEmployee}/>
      </div>
      <div className='col-3'></div>
      <div className="employeeNameWrapper col-9">
        <h1>{props.selectedEmployee.fullName}</h1>
      </div>
      <div className='quickLinksWrapper col-3'>
        <QuickLinks />
      </div>
      <div className='employeeDetailWrapper col-9'>
        <EmployeeDetail selectedEmployee = {props.selectedEmployee}/>
      </div>
    </div>
  )
}

export default EmployeeHome;
