import React from 'react';
import './App.css';
import Car from './Car';
import ListOfCar from './Carslist';


class App extends React.Component {
  state = {
    cars: [
        { brand: "Honda", model:"Civic", color:"black"},
        { brand: "Ferrari", model:"Testa Rossa", color:"red"},
        { brand: "Chevrolet", model:"Cicalvaliervic", color:"green"}
      ]
  }
  render() {
    return (
      <div >
        <p>Hello React!</p>
        <ListOfCar list_of_cars = {this.state.cars}/>
      </div>
    );
  }
}

export default App;
