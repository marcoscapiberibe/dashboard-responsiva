import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './index.css';
import PieChart from "./pages/ApexCharts/PieChart";

const Body = (props) => {
    return (
        <>
            <Header />
            <Home />
                <section>
                    <div>
                        <p>Pie Chart (Update Donut)</p>
                        <div>
                            <PieChart className="piechart-item" />
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Body;