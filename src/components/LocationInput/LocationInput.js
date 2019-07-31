import React, { Component } from "react";

class LocationInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputLocation: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({inputLocation: e.target.value});
  }

  handleSubmit(){
    if(this.state.inputLocation){
      this.props.updateUrl(this.state.inputLocation);
    } else {
      console.log("no location in state yet!");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}

export default LocationInput;
