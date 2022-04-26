import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PieChart from "./pages/ApexCharts/PieChart";
import AngleCircleChart from "./pages/ApexCharts/AngleCircleChart";


function App() {
  return (
    <Router>
      <>
        <Body>
          <Header></Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={PieChart} />
          <Route exact path="/" component={AngleCircleChart} />
          <Footer />
        </Body>
        
      </>
    </Router>
  )
};

export default App;
