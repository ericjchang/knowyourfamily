import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Row, Col } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFamily } from "../store/actions/familyAction";
import { getIndividuaById } from "../store/actions/individualAction";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Individuals() {
  const userInfo = useSelector((state) => state.IndividualReducer.individual);
  const [center, setCenter] = useState({ lat: null, lng: null });
  const [zoom, setZoom] = useState(15);
  const [address, setAddress] = useState("");
  const apiKey = "AIzaSyAFiwkJffBdpO5ZPn3Jvjlye5j6-YWfePo";
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getIndividuaById(id));
    setCenter({
      lat: -6.8621965,
      lng: 106.981274,
    });
    if (center.lat) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat},${center.lng}&sensor=false&key=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => setAddress(data.results[0].formatted_address))
        .catch((error) => alert(error));
    } else {
      console.log("map kosong");
    }
  }, []);
  console.log(userInfo, "user info");

  const btnAdd = (e) => {
    e.preventDefault();
    //dispatch(addFamily(userInfo))
    history.push("/dashboard");
  };

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
          <div
            style={{
              height: "25vh",
              width: "100%",
              backgroundColor: "red",
              marginBottom: "2%",
              marginTop: "2%",
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
                {/* <AnyReactComponent
                  lat={center.lat}
                  lng={center.lng}
                  text="📍 SEKARANG"
                /> */}
              </GoogleMapReact>
            )}
          </div>
          <Row style={{ display: "flex" }}>
            <Col sm={6}>
              <picture>
                <source
                  srcset="https://flexgroup.nz/wp-content/uploads/2018/05/dummy-image.jpg"
                  media={{ maxWidth: "400px" }}
                />
                <source srcset="https://flexgroup.nz/wp-content/uploads/2018/05/dummy-image.jpg" />
                <img
                  src="img_flowers.jpg"
                  alt="Flowers"
                  style={{ width: "auto" }}
                />
              </picture>
            </Col>
            <Col sm={6}>
              <button onClick={btnAdd}> Add to Family</button>
              <form>
                <div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userInfo.name}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userInfo.date_of_birth}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Place of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userInfo.place_of_birth}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userInfo.gender}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Instagram</label>
                    <input
                      className="form-control"
                      value={userInfo.instagram}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userInfo.facebook}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={userInfo.Address}
                      disabled
                    />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      <div className="text-center">
        {/* <button onClick={""}>set location</button> */}
      </div>
    </div>
  );
}
