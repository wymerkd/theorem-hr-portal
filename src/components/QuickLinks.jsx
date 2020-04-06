import React from 'react';
import '../scss/_quickLinks.scss';
import { Link } from 'react-router-dom';

function QuickLinks(){ 
  return(
    <div className='quickLinksWrapper'>
      <h3>Quick Links</h3>
      <p>Holiday PTO Calendar</p>
      <p>Policies/Procedures</p>
      <Link to="/feedback"> Submit Feedback</Link>
    </div>
  )
}

export default QuickLinks;


