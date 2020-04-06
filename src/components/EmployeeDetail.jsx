import React from 'react';
import '../scss/_employeeDetail.scss';

function EmployeeDetail(props){ 
  console.log('props inside EmployeeDetail: ', props);
  return(
    <div className='employeeDetailWrapper'>
      <h3>Employee Personal Information</h3>
      <h4>Role: {props.selectedEmployee.role}</h4>
      <h4>Health Care Plan: {props.selectedEmployee.healthPlanName}</h4>
    </div>
  )
}

export default EmployeeDetail;