import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./Layout";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
        <Body>
          <Header></Header>
        </Body>
        
      </>
    </Router>
  )
};

export default App;
