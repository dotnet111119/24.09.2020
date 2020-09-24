import React, { Component } from 'react';

class Carslist extends Component {
  render() {
      console.log(`this.props of list of cars:`)
      console.log(this.props)
      const { list_of_cars } = this.props
      const cars = list_of_cars.map(car =>  (
        <div >
            <div>Brand: {car.brand}</div>
            <div>Model: {car.model}</div>
            <div>Color: {car.color}</div>
            <hr/>
      </div>
      ))
      
    return (
      <div >
         <h1>List of cars:</h1>
         <p>{cars}</p>
      </div>
    );
  }
}
export default Carslist;