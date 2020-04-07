import React from 'react';
import '../scss/_employeeDetail.scss';

function EmployeeDetail(props){ 
  console.log('props inside EmployeeDetail: ', props);
  return(
    <div className='employeeDetail'>
      <h3 className='detailTitle'>Employee Personal Information</h3>
      <h4>Role: {props.selectedEmployee.role}</h4>
      <h4>Start Date: {props.selectedEmployee.startDate}</h4>
      <h4>Vacation Hours Remaining: {props.selectedEmployee.vacationHoursRemaining}</h4>
      <h4>Health Care Plan: {props.selectedEmployee.healthPlanName}</h4>
      <h4>Direct Manager: {props.selectedEmployee.directManager}</h4>
    </div>
  )
}

export default EmployeeDetail;