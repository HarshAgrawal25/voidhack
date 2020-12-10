import React , {Component} from 'react';
// import './App.css';
import JsonData from './data/data.json';
import Main from './components/Main';
import Question from './components/Question';
import Timmer from './components/Timmer';
import Test from './components/Test';
import InFaculty from './components/InFaculty';
import FaDetails from './components/FaDetails';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Main data={this.state.landingPageData.Header} />
        {/* <Question />
        <Test /> */}
        <InFaculty />
        <FaDetails />
      </div>
    )
  }
}

export default App;