import React from "react";
import pet from './yangyang.png'

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: 'center'
            }}>
            <h1>
                Home Page
            </h1>
            <h3>
                Level 1
            </h3>
            <img src={pet} alt="Pet"
             style={{ 
                display: "flex",
                justifyContent: "center",
                alignSelf: 'center'
            }} />;
        </div>
    )
};

export default Home;