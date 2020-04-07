//this is going to be a portal where the user can submit anonymous feedback.
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/_loginPage.scss';



export default function FeedbackSubmit(props){

  let _email = null;
  let _password = null;

//callback function for the onFeedback submission function
//write handle login submission function similar to the one below

// function handleNewFeedbackSubmission(event) {
//   event.preventDefault();
//   props.onFeedbackSubmission({subject: _subject.value, date: new Date(), content: _content.value, feedbackid: v4(), completed: false});
//   _subject.value = '';
//   _content.value = '';
// }

  return(
    <div>
          <div className="container">
            <h2 className="loginHeader">Login</h2>

            <form>
              <div className="emailContainer">
                <input className="emailField"
                  type='text'
                  id='email'
                  placeholder='Your Theorem Email'
                  ref={(input) => {_email = input;}}/>
              </div>
              <div>
              <input className="passwordField"
                id='password'
                type='text'
                placeholder="Your Password"
                ref={(input) => {_password = input;}}/>
              </div>

              <div>  <button className="loginButton" type='submit'>Login</button> </div>
            </form>

          </div>
        </div>
  );
}

FeedbackSubmit.propTypes = {
  // onFeedbackSubmission: PropTypes.func
};

//need to import a function that sends feedback to email address, and to kyle's admin view component
