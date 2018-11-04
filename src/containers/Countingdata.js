import React, { Component } from "react";
import Clock from "react-live-clock";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";

const ClockContainer = styled.div`
  font-size: 40px;
  color: white;
  margin-left: 900px;
  margin-top: 70px;
`;

class CountingData extends Component {
  render() {
    return (
      <ClockContainer>
        <span>
          <FaClock />
        </span>
        <span>
          {" "}
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"Europe/Warsaw"}
          />
        </span>
      </ClockContainer>
    );
  }
}

export default CountingData;
