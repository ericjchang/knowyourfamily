import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch, useParams } from "react-redux";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Individuals() {
  //const userInfo = useSelector((state) => state.userReducer.user);
  const [center, setCenter] = useState({ lat: null, lng: null });
  const [zoom, setZoom] = useState(15);
  const [address, setAddress] = useState("");
  const apiKey = "AIzaSyAFiwkJffBdpO5ZPn3Jvjlye5j6-YWfePo";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      if (center.lat) {
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat},${center.lng}&sensor=false&key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => setAddress(data.results[0].formatted_address))
          .catch((error) => alert(error));
      } else {
        console.log("alamat tidak ada");
      }
    });
  }, [center]);
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: center.lat, lng: center.lng },
      map,
      title: "Hello World!",
    });
    return marker;
  };
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center align-items-center mt-3">
        <div className="container">
          <div className="text-center">
            <h1>Individual Info</h1>
          </div>
          {/* form sesuai kebutuhan copas dari sini aja */}
          <form className="mx-3" autoComplete="on">
            <div className="form-group">
              <label>Name</label>
              <input
                type="search"
                className="form-control"
                id="search"
                //value={userInfo.name?}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="search"
                className="form-control"
                id="search"
                value={address}
              />
            </div>
            {/* //sampe sini */}
          </form>
        </div>
        <div
          style={{
            height: "50vh",
            width: "50vh",
          }}
        >
          {center.lat && (
            <GoogleMapReact
              distanceToMouse={() => {}}
              bootstrapURLKeys={{
                key: "AIzaSyAFiwkJffBdpO5ZPn3Jvjlye5j6-YWfePo",
              }} //========> api key google map
              defaultCenter={center}
              yesIWantToUseGoogleMapApiInternals
              defaultZoom={zoom}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
              <AnyReactComponent
                lat={center.lat}
                lng={center.lng}
                text="📍 SEKARANG"
              />
            </GoogleMapReact>
          )}
        </div>
      </div>
      <div className="text-center">
        {/* <button onClick={""}>set location</button> */}
      </div>
    </div>
  );
}
