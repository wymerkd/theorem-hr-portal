import React from 'react';
import '../scss/_adminView.scss'

//comment about functionality

const feedbackList = {
  feedback: [{subject: 'No more bog roll in the loo!'}],
  displayFeedback: function () {
    if (this.feedback.length === 0) {
      console.log('There is currently no employee feedback.')
    } else {
      console.log('Employee Feedback:');
      for (let i = 0; i < this.feedback.length; i++) {
        console.log(this.feedback[i].subject);
      }
    }
    this.displayFeedback();
  }
};

const AdminView = () => {
  return (
    <p>heyo</p>
  );
}

export default AdminView;