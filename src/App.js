//App Fundamentals
import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
    await  this.setState({selectedEmployee: masterList[0]})
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
      }
    }
  }


  render(){

    return (
      <div>
        <Header onLogout={this.handleLogout}/>

        <Switch>
          <Route exact path="/feedback" render={()=><FeedbackSubmit onFeedbackSubmission={this.handleAddingNewFeedback}/>}/>

          <Route exact path="/adminview" render={()=><AdminView masterEmployeeFeedbackList={this.state.employeeFeedback}/>}/>

          <Route exact path="/employeehome" render={()=><EmployeeHome selectedEmployee={this.state.selectedEmployee}/>}/>

          <Route exact path="/login" render={()=><LoginPage
          selectedEmployee={this.state.selectedEmployee}login={this.state.login} onHandleLogin={this.handleLogin}/>}/>

        </Switch>
      </div>
        );
      }
    }



    export default App;
