import HomePage from "./components/homePage";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <HomePage />
        </div>
      );
    }
  }
  const appDiv = document.getElementById("app");

ReactDOM.render(<App />, appDiv);
