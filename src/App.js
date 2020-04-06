
import './App.scss';
import testJsonObject from './test_json_object.js'



class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterEmployeeList: [],
      selectedEmployee: {}
    };
  }

//console logs are just for testing purposes.

  componentDidMount = async() => {
    let masterList = testJsonObject;
    // console.log(masterList);
    await  this.setState({masterEmployeeList: masterList})
    await  console.log(this.state);
    }

  render(){

    return (
      <div>
      </div>
        );
      }
    }



    export default App;
