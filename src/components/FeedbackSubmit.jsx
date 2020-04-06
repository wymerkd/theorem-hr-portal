//this is going to be a portal where the user can submit anonymous feedback.
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import '../scss/_feedbackSubmit.scss'


export default function FeedbackSubmit(props){

  let _subject = null;
  let _content = null;

//callback function for the onFeedback submission function

function handleNewFeedbackSubmission(event) {
  event.preventDefault();
  props.onFeedbackSubmission({subject: _subject.value, date: new Date(), content: _content.value, feedbackid: v4()});
  _subject.value = '';
  _content.value = '';
}

  return(
    <div>
          <div>
            <h2>Add Feedback </h2>

            <form onSubmit={handleNewFeedbackSubmission}>
              <input
                type='text'
                id='subject'
                placeholder='Feedback Subject'
                ref={(input) => {_subject = input;}}/>
              <textarea
                id='content'
                type='text'
                placeholder="Write feedback here"
                ref={(input) => {_content = input;}}/>

              <div>  <button type='submit'>Submit Feedback</button> </div>
            </form>

          </div>
        </div>
  );
}

FeedbackSubmit.propTypes = {
  onFeedbackSubmission: PropTypes.func
};

//need to import a function that sends feedback to email address, and to kyle's admin view component
