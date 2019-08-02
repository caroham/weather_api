import React, { Component } from "react";
import LocationInput from '../LocationInput/LocationInput.js';
import WeatherInfo from '../WeatherInfo/WeatherInfo.js';

const axios = require('axios');

class WeatherSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      weatherInfo: {},
      isLoaded: false,
      url: "",
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }

  componentDidMount(){

  }

  updateUrl(location){
    //handle if location isn't valid type
    let newUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=663c13f6594403a2bbf4207bd41420fd";
    console.log("newUrl: ", newUrl);
    this.setState({url: newUrl}, function(){
      this.getWeatherInfo();
    });
  }

  getWeatherInfo(){
    if(this.state.url){
      axios.get(this.state.url)
      .then((res)=> {
        //handle success
        console.log("res: ", res.data);
        let results = res.data;
        let weatherObj = {
          'desc': results.weather[0].description,
          'temp': results.main.temp,
          'humidity': results.main.humidity
        };
        this.setState({weatherInfo: weatherObj}, function(){
          console.log("this.state.weatherInfo: ", this.state.weatherInfo);
        });
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
