import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "free cocktail",
          info:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque?"
        },
        {
          icon: <FaHiking />,
          title: "endless hiking",
          info:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque?"
        },
        {
          icon: <FaShuttleVan />,
          title: "free shuttlevan",
          info:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque?"
        },
        {
          icon: <FaBeer />,
          title: "strogest beer",
          info:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque?"
        }
      ]
    };
  }

  render() {
    return (
      <div className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
