//App Fundamentals
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './App.scss';

//Dummy employee data object
import testJsonObject from './test_json_object.js';

//Components
import FeedbackSubmit from './components/FeedbackSubmit';
import Header from './components/Header';
import EmployeeHome from './components/EmployeeHome';
import AdminView from './components/AdminView';
import LoginPage from './components/LoginPage';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterEmployeeList: [],
      selectedEmployee: {},
      employeeFeedback: [],
      login: false
    };
  }

//console logs are just for testing purposes.

  componentDidMount = async() => {
    let masterList = testJsonObject;
    // console.log(masterList);
    await  this.setState({masterEmployeeList: masterList})

    // test selected employee for testing
    await  this.setState({})
    await  console.log('state: ', this.state);

  }

//seperate function to send an email once feedback is submitted. Adjust to address to Theorem leadership when in production. I'll need to set up an EmailJS account to get the send email feature working.



//function to add employee feedback to the employeeFeedback state variable. In the future all of this will likely live inside of an api.

  handleAddingNewFeedback = (newFeedback) => {
    //make copy of current state
    var masterEmployeeFeedbackList = this.state.employeeFeedback;
    //push new feedback into state clone variable
    masterEmployeeFeedbackList.push({content: newFeedback.content, date: newFeedback.date, subject: newFeedback.subject, feedbackid: newFeedback.feedbackid, completed: newFeedback.completed});
    //set new state
    this.setState({employeeFeedback: masterEmployeeFeedbackList});

    //send notification email (will need to adjust to leadership team email) now sends to and from theorem.feedback@gmail.com
    emailjs.send("theorem_feedback", "theoremfeedbacktemplate", {"feedback": newFeedback.content,"subject": newFeedback.subject},"user_68NBqR4xN55i2XxXh3srI")

    console.log(this.state.employeeFeedback);
    //email myself after this
  }


//need to add logout function

  handleLogout = async () => {
    var resetSelectedEmployee = {};
    var resetLoginStatus = false;
    await this.setState({selectedEmployee: resetSelectedEmployee});
    await this.setState({login: resetLoginStatus});
    await console.log(this.state.login);
    await console.log(this.state.selectedEmployee);
    await console.log('employee sucessfully logged out');
  }

//Login Function (untested):

  handleLogin = async (loginCredentials) => {
    var copyMasterEmployeeList = this.state.masterEmployeeList;
    var copySelectedEmployee = this.state.selectedEmployee;
    var copyLogin = true;

    for(var i=0;i<copyMasterEmployeeList.length;i++){
      if(loginCredentials.email === copyMasterEmployeeList[i].email && loginCredentials.password === copyMasterEmployeeList[i].password){
        copySelectedEmployee = copyMasterEmployeeList[i];
        // copyLogin = true;
      await this.setState({selectedEmployee: copySelectedEmployee});
      await this.setState({login: copyLogin});
      await console.log(this.state.login);
      await console.log(this.state.selectedEmployee);
      await console.log('employee has logged in');
      }
    }
  }

  // function to delete employee feedback from masterEmployeeFeedbackList. Called in AdminView.jsx


  // onHandleDelete will need to be totally re-written once there is a backend for this. Will be a DELETE on API.

  onHandleDelete = async (feedbackid) => {
    let copyEmployeeFeedback = this.state.employeeFeedback;
    let remainingFeedback = await copyEmployeeFeedback.filter(function(feedback){
      return feedback.feedbackid !== feedbackid });

    await this.setState({employeeFeedback: remainingFeedback});
    console.log(feedbackid);
    console.log(remainingFeedback)
  }



  render(){

    return (
      <div>
        <Header onLogout={this.handleLogout} login={this.state.login} selectedEmployee={this.state.selectedEmployee}/>

        <Switch>
          <Route exact path="/feedback" render={()=><FeedbackSubmit onFeedbackSubmission={this.handleAddingNewFeedback}/>}/>
          <Route exact path="/employeehome" render={()=><EmployeeHome selectedEmployee={this.state.selectedEmployee}/>}/>
          <Route exact path="/login" render={()=><LoginPage
          selectedEmployee={this.state.selectedEmployee}login={this.state.login} onHandleLogin={this.handleLogin}/>}/>
          <Route exact path="/adminview" render={() => <AdminView masterEmployeeFeedbackList={this.state.employeeFeedback} onHandleDelete={this.onHandleDelete} />} />

        </Switch>
      </div>
        );
      }
    }



    export default App;
