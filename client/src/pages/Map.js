import React, { Component } from "react";
import MapTools from "../components/MapTools";
class Map extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div style={{ margin: "100px" }}>
        <MapTools
          google={this.props.google}
          center={{ lat: -6.229642, lng: 106.7588609 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}
export default Map;
