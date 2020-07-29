import React, { Component, useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import { Row, Col, Button, Form } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";
import { GoogleMapsAPI } from "../client-config";
import { addIndividual } from "../store/actions/individualAction";
import { connect } from "react-redux";
import axios from "axios";
const dummyUrl = "http://localhost:3000/users";

Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      date_of_birth: "",
      place_of_birth: "",
      gender: "",
      instagram: "",
      facebook: "",
      relationship: [],
      city: "",
      location: {},
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleAddress(e) {
    this.setState({ address: e.target.value });
  }
  handleDOB(e) {
    this.setState({ date_of_birth: e.target.value });
  }
  handlePOB(e) {
    this.setState({ place_of_birth: e.target.value });
  }
  handleGender(e) {
    this.setState({ gender: e.target.value });
  }
  handleInstagram(e) {
    this.setState({ instagram: e.target.value });
  }
  handleFacebook(e) {
    this.setState({ facebook: e.target.value });
  }

  //   handleClick(cb) {
  //     console.log("Clicked, new value = ", cb.checked);
  //   }

  addIndividual(data) {
    console.log("MASUK NIH", dummyUrl);
    return (dispatch) => {
      //   axios({
      //       url: dummyUrl,
      //       method: 'GET',
      //       data: ()=> {
      //           name: obj.name
      //       }
      //   })
      //     .then((response) => {
      //       console.log("suksessss masuk axiosnya");
      //               dispatch({
      //         type: "FETCH_DATA",
      //         data: response.data,
      //       });
      //     .catch((err) => {
      //       console.log(err, 'ERRORR AXIOS');
      //     });
      console.log("TESTTTTTT N+MASUK1");

      axios
        .get(`${dummyUrl}`)
        .then((response) => {
          console.log("TESTTTTTT N+MASUK2");
          // dispatch({
          //   type: "FETCH_DATA",
          //   data: response.data,
          // });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    let obj = {
      name: this.state.name,
      address: this.state.address,
      date_of_birth: this.state.date_of_birth,
      place_of_birth: this.state.place_of_birth,
      gender: this.state.gender,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      location: this.state.markerPosition,
      relationship: this.state.relationship,
    };
    if (
      obj.name == "" ||
      obj.address == "" ||
      obj.date_of_birth == "" ||
      obj.place_of_birth == "" ||
      obj.gender == "" ||
      obj.instagram == "" ||
      obj.facebook == "" ||
      obj.location == ""
    ) {
      alert("ada yang kosong");
    } else {
      //   const { dispatch } = this.props;
      this.addIndividual(obj);
    }
    console.log(obj);
  }

  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount() {
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray);
        this.setState({ location: this.state.mapLocation });
        localStorage.setItem("alamat", address);
        this.setState({
          address: address ? address : "",
          city: city ? city : "",
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  /**
   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
   *
   * @param nextProps
   * @param nextState
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }
  /**
   * Get the city and set the city input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };
  /**
   * Get the area and set the area input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  /**
   * And function for city,state and address input
   * @param event
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /**
   * This Event triggers when the marker window is closed
   *
   * @param event
   */
  onInfoWindowClose = (event) => {};

  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray);

        this.setState({
          address: address ? address : "",
          city: city ? city : "",
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  /**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = (place) => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      /*       area = this.getArea(addressArray),
      state = this.getState(addressArray), */
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      city: city ? city : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          {/* InfoWindow on top of marker */}
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          />
          <Marker />
          {/* For Auto complete Search Box */}
          <Autocomplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "500px",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
        </GoogleMap>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div style={{ marginTop: "10vh" }}>
          <Row>
            <Col sm={6}></Col>
            <Col sm={6} style={{ paddingRight: "5vw" }}>
              <form>
                <div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => this.handleName(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="date"
                      onChange={(e) => this.handleDOB(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Place of Birth</label>
                    <input
                      type="text"
                      name="city"
                      onChange={(e) => this.handlePOB(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Example select</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => this.handleGender(e)}
                      >
                        <option>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="form-group">
                    <label>Instagram</label>
                    <input
                      type="text"
                      name="instagram"
                      onChange={(e) => this.handleInstagram(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Facebook</label>
                    <input
                      type="text"
                      name="facebook"
                      onChange={(e) => this.handleFacebook(e)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      onChange={this.onChange}
                      value={this.state.address}
                    />
                  </div>
                </div>
                <Button
                  onClick={(e) => this.onSubmit(e)}
                  variant="flat"
                  size="xl"
                >
                  SUBMIT
                </Button>
              </form>
            </Col>
          </Row>

          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}
export default Map;
