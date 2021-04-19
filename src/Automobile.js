import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import Axios from "axios";

class Automobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/automobile")
      .then(res => {
        this.setState({
          cars: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="intro4">
          <h1>Choose the car that best suits you</h1>
        </div>
        {this.state.cars.map(item => {
          return (
            <div className="container4">
              <Parallax
                blur={0}
                bgImage={item.backimage}
                bgImageAlt="the cat"
                strength={700}
              >
                <div style={{ height: "330px" }} />
                <div class="inpic4">
                  <h2>{item.model}</h2>
                </div>
              </Parallax>
              <p>
                <img src={item.image} />
                <img src={item.imageSeat} />
                <img src={item.imageStear} />
                <img src={item.imageBack} /> <br />
                Model: {item.model}
                <br />
                Varient: {item.varient}
                <br />
                Fuel Type: {item.FuelType}
                <br />
                Engine Displacement: {item.EngineDisplacement}
                <br />
                Engine Type: {item.EngineType}
                <br />
                Maximum Power: {item.MaximumPower}
                <br />
                Maximum Torque: {item.MaximumTorque}
                <br />
                Number of cylinders: {item.Numberofcylinders}
                <br />
                Fuel Tank Capacity: {item.FuelTankCapacity}
                <br />
                Fuel Efficiency: {item.FuelEfficiency}
                <br />
                Front Brakes: {item.FrontBrakes}
                <br />
                Rear Brakes: {item.RearBrakes}
                <br />
                Front Suspension: {item.FrontSuspension}
                <br />
                Rear Suspension: {item.RearSuspension}
                <br />
                Price: {item.price}
                <br />
              </p>
            </div>
          );
        })}
      </>
    );
  }
}
export default Automobile;
