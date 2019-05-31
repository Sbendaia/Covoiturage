import React, { Component } from "react";
import { Carousel } from "antd";
import "./MyCarousel.css";
import road from "./road.jpg";
import meet from "./meet.jpg";
import ride from "./ride.jpg";

export default class MyCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h1>
              <img src={ride} />
            </h1>
          </div>
          <div>
            <h1>
              {" "}
              <img src={meet} />
            </h1>
          </div>
          <div>
            <img src={road} />
          </div>
        </Carousel>
      </div>
    );
  }
}
