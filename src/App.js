import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <>
        <Header></Header>
      </>
    </Router>
  );
}

export default App;
