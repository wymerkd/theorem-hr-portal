import React from 'react';
import '../scss/_adminView.scss'
import PropTypes from 'prop-types';


export default function AdminView(props) {
  const feedback = props.masterEmployeeFeedbackList;
  
  // Checks if feedback object is empty or not
  const isFeedbackPresent = (feedback.length > 0) ? true : false;

  return (
    // Short circuit evaluation displays corresponding div depending on result of feedback condition
    <div>
      {isFeedbackPresent && <div>
        {feedback.map((key, index) => {
          return <div key={index}>
            <p>Subject: {key.subject}</p>
            <p>Date: {key.date.toString()}</p>
            <p>Content: {key.content}</p></div>;
        })}
      </div>}
      {!isFeedbackPresent && <div>
        <p>There is currently no employee feedback.</p>
      </div>}
    </div>
  );
}

AdminView.propTypes = {
  masterEmployeeFeedbackList: PropTypes.array
};