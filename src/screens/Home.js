import React from 'react';
import Header from "../containers/Header/Header";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Hi</h1>
            </div>
        </div>
    );
}

export default Home;