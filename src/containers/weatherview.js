import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #4da6ff;
  color: white;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  font-size: 0.8em;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextInput = styled.input`
padding: 5px;
font-size: .7em;
background: #b3d9ff;
color: #232831;
width: 100%;
margin-right: 7px
border: 0px;
-webkit-apperance: none;
`;

const SearchCity = styled.div`
  display: flex;
  justify-content: space-between;
  color: #00264d;
  border 2px solid #80bfff;
  background: #80bfff;
  border-radius: 10px;
  padding: 5px;
`;

const WeatherText = styled.div`
  padding: 20px;
  color: #00264d;
`;

const WeatherIcon = styled.div`
  margin: auto;
  width: 50%;
`;

const Container = styled.div`
  background: #cce6ff;
  color: #00264d;
  margin-top: 70px;
  margin-left: 30%;
  width: 40%;
  max-width: 600px;
  padding: 14px
  border-radius: 20px;
`;

const WeatherView = props => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <SearchCity>
        <TextInput type="text" placeholder="City" innerRef={props.cityName} />
        <TextInput
          type="text"
          placeholder="Country"
          innerRef={props.countryName}
        />
        <Button onClick={props.onChange}> Change city </Button>
      </SearchCity>
      <WeatherText>
        <WeatherIcon>
          <img id="wicon" src={props.icon} alt="Weather icon" />
        </WeatherIcon>
        Today in {props.city} ({props.country}) is {props.temp} °C
        <p />
        <p>
          {" "}
          {props.main} : {props.description}
        </p>
        <p>Humidity: {props.humidity} % </p>
        <p>Wind speed: {props.wind} m/s </p>
        <p> Pressure: {props.pressure} hPa</p>
      </WeatherText>
    </Container>
  );
};

export default WeatherView;
