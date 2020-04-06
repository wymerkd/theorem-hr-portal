import React from 'react';
import '../scss/_quickLinks.scss';
import { Link } from 'react-router-dom';

function QuickLinks(){ 
  return(
    <div className='quickLinksWrapper'>
      <p>quickLinks go here</p>
      <Link to="/feedback"> Submit Feedback</Link>
    </div>
  )
}

export default QuickLinks;


