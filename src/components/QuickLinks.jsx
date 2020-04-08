import React from 'react';
import '../scss/_quickLinks.scss';
import { Link } from 'react-router-dom';

function QuickLinks(){ 
  return(
    <div className='quickLinks'>
      <h3>Quick Links</h3>
      <p>Holiday PTO Calendar</p>
      <p>Policies & Procedures</p>
      <p>401k Documentation</p>
      <Link className='feedbackLink' to="/feedback"> Submit Feedback</Link>
    </div>
  )
}

export default QuickLinks;


