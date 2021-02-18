import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Msg from './components/Msg'
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Welcome />  //call another Welcome component
      </div>  
    );
  }
}
export default App
