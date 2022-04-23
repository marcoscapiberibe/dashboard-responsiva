import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./Layout";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <>
        <Body>
          <Header></Header>
          <Route exact path="/" component={Home} />
        </Body>
        
      </>
    </Router>
  )
};

export default App;
