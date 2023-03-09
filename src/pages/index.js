import React from "react";
import pet from './yangyang_bg2.png'
import './home.css'

const Home = () => {
    return (
        <div
            style={{
                justifyContent: "center",
                alignSelf: 'center'
            }}>
            <PetScreen />
        </div>
    )
};

const InfoBox = () => {
    return (
        <div id="infobox">
            <h2>
                Khine's Pet
            </h2>
            <h3>
                Level 1
            </h3>
        </div>
    )
};

const PetScreen = () => {
    return (
        <div id="petscreen"
            >
            <InfoBox />
            <img src={pet} alt="Pet"
             style={{
                width: "100%", 
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignSelf: 'center'
            }} />;

        </div>
    )
};

export default Home;