import React, { useEffect } from "react";
import pet from '../components/ui/yangyang_y1.gif'
import pet2 from '../components/ui/yangyang_y2.gif'
import pettouch from '../components/ui/yangyang_y1_clicked.png'
import pet2touch from '../components/ui/yangyang_y2_clicked.png'
import pet2blue from '../components/ui/yangyang_b2.gif'
import pet2bluetouch from '../components/ui/yangyang_b2_clicked.png.png'
import './home.css'
import Tasks from './tasks'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          level: 1,
          clicked: false,
          color: 'yellow'
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

    getImageName() {
      const { level } = this.state;
      const { clicked } = this.state;
      const { color } = this.state;
      if (level >= 3) {
        if (clicked) {
          if (color === 'blue') {
            return 'pet2bluetouch';
          }
          return 'pet2touch';
        }
        if (color === 'blue') {
          return 'pet2blue';
        }
        return 'pet2'
      } else {
        if (clicked) {

          return 'pettouch';
        }
        return 'pet';
      }
    }

    clickImage() {
      this.setState(state=> ({ clicked: !state.clicked}))
    }

    handleBlueClick() {
      this.setState(state=> ({color: 'blue'}));
    }

    handleYellowClick() {
      this.setState(state=> ({color: 'yellow'}));
    }

    render() {
        const { level } = this.state;
        const imagepath = {
          pet, pet2, pettouch, pet2touch, pet2blue, pet2bluetouch
        };
        const image = this.getImageName();

        function handleFunction() {
          fetch(`https://virtual-pet-c74k.onrender.com/reset/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id": 78912 })
            })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            function sleep(delay) {
              var start = new Date().getTime();
              while (new Date().getTime() < start + delay);
            }
            sleep(1000);
            window.location.reload();
        }
        
        return <div class="homebg">
            <div class="infobox">
                <h2  style={{fontFamily:"'Concert One', cursive"}}>
                  Khine's Pet
                </h2>
                <h3 style={{fontFamily:"'Concert One', cursive"}}>
                  Level {level}
                </h3>
                <button onClick={() => handleFunction()}>Reset</button>
                <Tasks/>
            </div>
            <div class="petscreen">
              <img src={imagepath[image]} alt="Pet"
                  onClick={() => this.clickImage()}/>
            </div>
            <div class="customizebar">
              <div>
                <h2
                    style={{fontFamily:"'Concert One', cursive"}}>
                    Customize
                </h2>
              </div>
              <div style={{
                }}>
                <button 
                  class='customizebutton blue'
                  backgroundColor='#4d95db' onClick={() => this.handleBlueClick()}/>
                <button 
                  class='customizebutton yellow'
                  backgroundColor='#ffde59' onClick={() => this.handleYellowClick()}/>
              </div>
            </div>
        </div> 
    };
};


export default Home;