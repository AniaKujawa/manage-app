import { SectionsContainer, Section, Header } from "react-fullpage";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";

import ToDolist from "../components/todolist.js";
import CountingData from "./Countingdata";
import WeatherData from "../components/weatherdata.js";

export default props => {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"]
  };

  return (
    <React.Fragment>
      <Header>
        <ul>
          <li className="dropdown">
            <div className="dropbtn">My account</div>
            <div className="dropdown-content">
              <a href="/login">Log in</a>
              <a href="/register">Sign up</a>
              <hr className="navbar-divider" />
              <a href="/account/:id"> My account</a>
            </div>
          </li>
          <li>
            <a href="#sectionFour">Calendar</a>
          </li>
          <li>
            <a href="#sectionThree">Weather</a>
          </li>
          <li>
            <a href="#sectionTwo">To Do list</a>
          </li>
          <li>
            <a href="#sectionOne">Home</a>
          </li>
        </ul>
      </Header>
      <SectionsContainer {...options}>
        <Section data-anchor="sectionOne" className="background">
          <div className="welcomeText">
            <h1>
              <p>Manage your life better</p>
            </h1>
            <div className="describeText">
              <p>
                This simple application is helpful in everyday tasks.
                <p>
                  {" "}
                  At first glance you know what to do and what you've done.
                </p>
              </p>
              <p>
                {" "}
                You can even check the weather and decide if you want to go
                outside.
              </p>{" "}
              <p> Maybe you want to go abroad to a sunny place! </p> Make your
              life more organized and more pleasant with this useful tool.
            </div>
          </div>
        </Section>
        <Section data-anchor="sectionTwo" className="fp-auto-height">
          <ToDolist title="To Do List" />
        </Section>
        <Section data-anchor="sectionThree">
          <WeatherData />
        </Section>
        <Section data-anchor="sectionFour">
          <CountingData />
          <Calendar className="calendar" />
        </Section>
      </SectionsContainer>
    </React.Fragment>
  );
};
