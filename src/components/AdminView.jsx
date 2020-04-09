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
    <div className= "containFeedback">
      <div className="container-flex inbox">
      {/* Displays if feedback is present */}
        <div className="row feedback">
          <div className="col-sm">Subject</div>
          <div className="col-sm">Date</div>
          <div className="col-sm">Inbox: {feedback.length}</div>
          <div className="col-sm"></div>
        </div>
      {isFeedbackPresent && <div>
        {feedback.map((item, index) => {

          return <div>
              <div className="row feedbackBody" key={index}>
                <div className="col-sm">{item.subject}</div>
                <div className="col-sm">{item.date.toString().slice(0, 21)}</div>
                <div className="col-sm"><button className="toggleButton" id={`item${item.feedbackid}`}>View Content</button></div>
                <div className="col-sm"><button className="deleteButton" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.onHandleDelete(item.feedbackid)}} >Delete</button></div>
              </div>
              <div className="row dropdown">
                <div className="col-xl-12 noPadding">
                  <UncontrolledCollapse toggler={`#item${item.feedbackid}`}>
                    <Card>
                      <CardBody>
                      <p>{item.content}</p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </div>
            </div>
          })}
        </div>}
        {/* Displays if there is no feedback */}
        {!isFeedbackPresent && <div>
          <div className="row feedbackBody">
            <div className="col-xl">There is currently no employee feedback.</div>
          </div>
        </div>}
      </div>
    </div>
  );
}

AdminView.propTypes = {
  masterEmployeeFeedbackList: PropTypes.array,
  onHandleDelete: PropTypes.func,
};


// <button style={buttonStyle} onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.onDeleteAPost(props.id)}}>Delete Post</button>
