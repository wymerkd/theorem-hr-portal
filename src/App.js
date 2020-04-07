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
    await  console.log(this.state);
  }



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

//we will need a 'delete feedback' method to be passed into the admin view (probably a find  + delete)

  render(){

    return (
      <div>
        <Header/>

        <Switch>
          <Route exact path="/feedback" render={()=><FeedbackSubmit onFeedbackSubmission={this.handleAddingNewFeedback}/>}/>

          <Route exact path="/adminview" render={()=><AdminView masterEmployeeFeedbackList={this.state.employeeFeedback}/>}/>

          <Route exact path="/employeehome" render={()=><EmployeeHome EmployeeHome selectedEmployee={this.state.selectedEmployee}/>}/>

        </Switch>
      </div>
        );
      }
    }



    export default App;
