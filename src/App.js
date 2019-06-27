import React, { Component } from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import whiskey from "./images/goldenRetriever.jpg";
import snow from "./images/huskySiberian.jpg";
import hazel from "./images/borderCollie.jpg";
import "./App.css";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Snow",
        age: 4,
        src: snow,
        facts: [
          "Snow is smart and highly trainable",
          "Snow is energetic, playful, sociable and can be quite laid back..",
          "Snow loves eating food."
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
