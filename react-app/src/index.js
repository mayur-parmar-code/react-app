import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./components/Welcome";
import Eventhandler from "./components/Eventhandler";
import Passarginevent from "./components/PassArginEvent";
import MountingApp from './components/Mountingapp';
import EventHandlername from './components/EventhandlerName';
import Testlifecyle from './components/Testlifecycle'


// ReactDOM.render(<Eventhandler roll="101"/>, document.getElementById('root'));
// ReactDOM.render(<Passarginevent />, document.getElementById("root"));
//  ReactDOM.render(<MountingApp/>, document.getElementById("root"));
//  ReactDOM.render(<EventHandlername/>, document.getElementById("root"));

 ReactDOM.render(<Testlifecyle favcol="yellow"/>, document.getElementById("root"));

//----------------------------------------------------------
// ReactDOM.render(<EventHandlername/>, document.getElementById("root"));
// ReactDOM.render(<Eventhandler/>, document.getElementById("r"));
// ReactDOM.unmountComponentAtNode(document.getElementById('r')); 
//first comment 
//-----------------------------------------------------------
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
