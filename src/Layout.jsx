import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './index.css';

const Body = (props) => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default Body;