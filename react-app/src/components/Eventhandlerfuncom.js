import React from "react";

// event handling using function components

function Eventfun(props) {
  function clickEvent(e) {
    //for prevent or disable the href link redirection
    // e.preventDefault();
    console.log("button clicked");
  }
  return (
    <div>
      <a href="http://www.google.com" onClick={clickEvent}>
        Click here
      </a>
    </div>
  );
}

export default Eventfun;
