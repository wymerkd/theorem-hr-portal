import React from 'react';
import '../scss/_employeeDetail.scss';

function EmployeeDetail(props){ 
  console.log('props inside EmployeeDetail: ', props);
  return(
    <div className='employeeDetail'>
      <h3 className='detailTitle'>Employee Personal Information</h3>
      <h4>Role: <span className='employeeAttribute'>{props.selectedEmployee.role}</span></h4>
      <h4>Start Date: <span className='employeeAttribute'>{props.selectedEmployee.startDate}</span></h4>
      <h4>Vacation Hours Remaining: <span className='employeeAttribute'>{props.selectedEmployee.vacationHoursRemaining}</span></h4>
      <h4>Health Care Plan: <span className='employeeAttribute'>{props.selectedEmployee.healthPlanName}</span></h4>
      <h4>Direct Manager: <span className='employeeAttribute'>{props.selectedEmployee.directManager}</span></h4>
      <img className='triangle' src='https://theoremadvertising.com/wp-content/uploads/2019/05/media-planning.gif' />
    </div>
  )
}

export default EmployeeDetail;