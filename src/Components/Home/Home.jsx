import React, { Component } from 'react';
import "./Home.css";


const Home = () => {
    return (
        <div className = "home">
            <div className = "text-button">
                <div className = "text">
                <span>
                    <span className = "welcometo">Welcome to</span>
                    <span className = "myjob">
                        <span className = "my">My</span>
                        <span className = "jobs">Jobs</span>
                    </span>
                </span>
                </div>
                <div className = "gettingstarted">
                    <div className = "btn-text">
                        <span>Getting Started</span>
                    </div>
                </div>
            </div>
            <div className = "image">
                <img src = "homeshot.png"></img>
            </div>
        </div>
    );
}
 
export default Home;