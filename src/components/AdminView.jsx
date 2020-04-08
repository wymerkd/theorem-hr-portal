import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import '../scss/_adminView.scss'


export default function AdminView(props) {
  //Using state of masterEmployeeFeedbackList from App.js and storing in new variable
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
            <div>
              <Button className="toggleButton" id={`key${key.feedbackid}`}>Toggle</Button>
              <UncontrolledCollapse toggler={`#key${key.feedbackid}`}>
              <Card>
                <CardBody>
                  <p>{key.content}</p>
                </CardBody>
              </Card>
              </UncontrolledCollapse>
            </div>
          </div>
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
