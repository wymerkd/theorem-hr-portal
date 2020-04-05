import React from 'react';
import logo from './logo.svg';
import './App.css';
import testJsonObject from './test_json_object.js'



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterEmployeeList: [],
      selectedEmployee: {}
    };
  }

  // logData = () => {
  //   console.log(testJsonObject);
  // }


  componentDidMount(){
    console.log(testJsonObject);
  }

  render(){

    return (
      <div>
      </div>
        );
      }
    }



    export default App;
