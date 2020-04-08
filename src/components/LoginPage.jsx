//this is going to be a portal where the user can submit anonymous feedback.
import React from 'react';
import PropTypes from 'prop-types';
import '../scss/_loginPage.scss';
import { Link } from 'react-router-dom';





export default function LoginPage(props){

  let _email = null;
  let _password = null;

function onHandleLoginCallback(event){
  event.preventDefault();
  props.onHandleLogin({email: _email.value, password: _password.value});

  _email.value = '';
  _password.value = '';
}


  return(
    <div>
          <div className="container">
            <h2 className="loginHeader">Login</h2>

            <form onSubmit={onHandleLoginCallback}>
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

              <div>

                  <button
                  className="loginButton"
                  type='submit'
                  >
                  Login
                  </button>


              </div>
            </form>

          </div>
        </div>
  );
}

LoginPage.propTypes = {
  onHandleLogin: PropTypes.func,
  login: PropTypes.bool,
  selectedEmployee: PropTypes.object
};

//need to import a function that sends feedback to email address, and to kyle's admin view component
