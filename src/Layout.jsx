import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './index.css';
import PieChart from "./pages/ApexCharts/PieChart";
import AngleCircleChart from "./pages/ApexCharts/AngleCircleChart";

const Body = (props) => {
    return (
        <>
            <Header />
            <Home />
            <section className="charts">

                <div className="piechart">
                    <div className="grafico-titulo">
                        <p>Pie Chart (Update Donut)</p>
                    </div>
                    <PieChart className="piechart-item" />
                </div>

                <div className="anglecircle">
                    <div className="grafico-titulo">
                    <p>Angle Circle</p>
                    </div>
                    <AngleCircleChart className="anglecirclechart-item" />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Body;