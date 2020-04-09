import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCollapse, Button, CardBody, Card, Table } from 'reactstrap';
import '../scss/_adminView.scss'


export default function AdminView(props) {
  //Using state of masterEmployeeFeedbackList from App.js and storing in new variable
  const feedback = props.masterEmployeeFeedbackList;
  
  // console.log(feedback[0].feedbackid)

  // Checks if feedback array is empty or not
  const isFeedbackPresent = (feedback.length > 0) ? true : false;
  

  return (
    // Short circuit evaluation displays corresponding div depending on result of feedback condition
    <div>
      {/* Displays if feedback is present */}
      {isFeedbackPresent && <Table hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Messages: {feedback.length}</th>
            <th></th>
          </tr>
        </thead>
        {feedback.map((item, index) => {
          return <tbody key={index}>
            <tr>
              <td>{item.subject}</td>
              <td>{item.date.toString().slice(0, 21)}</td>
              <td><Button className="toggleButton" id={`item${item.feedbackid}`}>View Content</Button></td>
              <td><Button className="deleteButton" onClick={props.onHandleDelete}>Delete</Button></td>
            </tr>
            <span>
            <tr>
              <UncontrolledCollapse toggler={`#item${item.feedbackid}`}>
                <Card>
                  <CardBody>
                    <p>{item.content}</p>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              </tr>
            </span>
          </tbody>
        })}
      </Table>}
      {/* Displays if there is no feedback */}
      {!isFeedbackPresent && <Table>
        <thead>
          <tr>
            <th>Employee Feedback</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>There is currently no employee feedback.</td>
          </tr>
        </tbody>
      </Table>}
    </div>
  );
}

AdminView.propTypes = {
  masterEmployeeFeedbackList: PropTypes.array,
  onHandleDelete: PropTypes.func,
};


