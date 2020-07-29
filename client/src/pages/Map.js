import MapTools from "../components/MapTools";
import React, { useEffect, useState } from "react";

export default function Map() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url('https://i.imgur.com/BNulOgL.png')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
        justifyContent: "center",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container">
        {location.lat && (
          <MapTools
            center={{ lat: location.lat, lng: location.lng }}
            height="500px"
            zoom={15}
          />
        )}
      </div>
    </div>
  );
}

/* class Map extends Component {
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
        <br />
      </div>
    );
  }
}
export default Map;
 */
