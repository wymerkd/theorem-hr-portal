import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../scss/_adminView.scss'


export default function AdminView(props) {
  //Reactstrap properties for toggle viewing message content
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //Using state from App.js
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
            <Button className="toggleButton" onClick={toggle}>Toggle</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  <p>{key.content}</p>
                </CardBody>
              </Card>
            </Collapse>
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
