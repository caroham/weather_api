import React, { Component } from "react";
import LocationInput from './LocationInput/LocationInput.js';
import WeatherInfo from './WeatherInfo/WeatherInfo.js';

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      weatherInfo: {},
      isLoaded: false,
      url: ""
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }

  componentDidMount(){

  }

  updateUrl(location){
    //handle if location isn't valid type
    let newUrl = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=663c13f6594403a2bbf4207bd41420fd";
    this.setState({url: newUrl});
  }

  getWeatherInfo(){
    if(this.state.url){
      axios.get(this.state.url)
      .then((res)=> {
        //handle success
      },
      (error) => {
        // handle error
      }).then(
        //do something regardless 
      ); 
    } else {
      console.log("no url in state yet!");
    }

  }

  render() {
    return (<div>
      <LocationInput updateUrl={this.updateUrl}/>
      <WeatherInfo />
    </div>);
  }
}

export default WeatherSearch;
