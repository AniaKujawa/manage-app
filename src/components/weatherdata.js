import React, { Component } from "react";
import WeatherView from "../containers/weatherview";

const axios = require("axios");

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Warsaw",
      country: "Poland",
      temp: "",
      icon: "",
      humidity: "",
      wind: "",
      pressure: "",
      description: "",
      main: "",
      isLoaded: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount = () => {
    this.fetchData("Warsaw", "Poland");
  };

  fetchData = (city, country) => {
    const APIKEY = "607b8fe43221a5926675804956acc2ce";
    const CITYNAME = city;
    const COUNTRYNAME = country;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITYNAME},${COUNTRYNAME}&units=metric&appid=${APIKEY}`;
    axios
      .get(URL)
      .then(response => {
        this.setState({
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          pressure: response.data.main.pressure,
          description: response.data.weather[0].description,
          main: response.data.weather[0].main,
          isLoaded: true
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newCity = this.cityName.value;
    const newCountry = this.countryName.value;
    this.setState({
      city: newCity,
      country: newCountry
    });
    console.log(this.state.city, this.state.country);
    this.fetchData(newCity, newCountry);
  };

  render() {
    const {
      city,
      country,
      isLoaded,
      temp,
      humidity,
      wind,
      pressure,
      main,
      description
    } = this.state;
    var iconurl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <WeatherView
            onChange={this.handleSubmit}
            city={city}
            country={country}
            countryName={input => (this.countryName = input)}
            cityName={input => (this.cityName = input)}
            icon={iconurl}
            temp={temp}
            humidity={humidity}
            description={description}
            wind={wind}
            pressure={pressure}
            main={main}
            title="Check today's weather!"
          />
        </div>
      );
    }
  }
}

export default WeatherData;
