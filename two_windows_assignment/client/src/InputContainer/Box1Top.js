import React, { Component } from 'react';
import SingleInput from '../ComponentContainer/SingleInput';


class Box1Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    corpMailing:'',
    city:'',
    state:'',
    zip:'',
  }
this.handleChange = this.handleChange.bind(this)
}


handleChange(event){
  let value = event.target.value
  let name = event.target.name
  this.setState({ [name]: value})
}


render() {
console.log(this.state.city)
  return(

    <div className="box1">

<div className="stackedFields">



      <SingleInput
      title = "Corperate Mailing Address"
      className="input2"
      name="corpMailing"
      value = {this.state.corpMailing}
      controlFunc={this.handleChange}
        />
      <SingleInput
      className="input2b"
      name="corpMailing2"
      value = {this.state.corpMailing2}
      controlFunc={this.handleChange}

        />
        </div>


        <div className="state-zip">
      <SingleInput
      title="City"
      className="input3"
      name="city"
      value = {this.state.city}
      controlFunc={this.handleChange}
        />
        <SingleInput
        title = "State"
        className="input4"
        name="state"
        value = {this.state.state}
        controlFunc={this.handleChange}
          />
          </div>

        <SingleInput
        title="Zip"
        className="input4b"
        name="zip"
        value = {this.state.zip}
        controlFunc={this.handleChange}
          />

    </div>
  );
}
}

export default Box1Top
