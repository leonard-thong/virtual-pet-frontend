import React, { useEffect } from "react";
import pet from './yangyang_bg2.png'
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          level: 1
        };
    }

    componentDidMount() {
        fetch("https://virtual-pet-c74k.onrender.com/level")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                level: result.level
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render() {
        const { level } = this.state;
        return <div
            style={{
                justifyContent: "center",
                alignSelf: 'center'
            }}>
            <div id="petscreen">
            <div id="infobox">
            <h2>
                Khine's Pet
            </h2>
            <h3>
                Level {level}
            </h3>
            </div>
                <img src={pet} alt="Pet"
                style={{
                    width: "100%", 
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: 'center'
                }} />;
            </div>
        </div>
    };
};

export default Home;