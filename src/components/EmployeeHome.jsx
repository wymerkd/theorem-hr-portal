import React from 'react';
import '../scss/_employeeHome.scss'
import Header from './Header'
import QuickLinks from './QuickLinks'
import EmployeeDetail from './EmployeeDetail';

function EmployeeHome(props){
  console.log('props inside EmployeeHome: ', props);

  return(
    <div className='EmployeeHome'>
      <Header selectedEmployee = {props.selectedEmployee}/>
      <div>
        <h2>Employee Name: {props.selectedEmployee.fullName}</h2>
      </div>
      <QuickLinks />
      <EmployeeDetail selectedEmployee = {props.selectedEmployee}/>
    </div>
  )
}

export default EmployeeHome;
