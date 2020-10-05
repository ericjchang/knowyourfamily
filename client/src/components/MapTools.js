import React, { Component, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import { Link } from "react-router-dom";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { GoogleMapsAPI } from "../client-config";
Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

/* export default function MapTools() {
  const [userData, setUserData] = useState({
    name: "",
    date_of_birth: "",
    place_of_birth: "",
    gender: "",
    instagram: "",
    facebook: "",
    address: "",
    Location: {
      lat: null,
      lng: null,
    },
    relationship: [],
  });
  const [mapPosition, setMapPosition] = useState({ lat: null, lng: null });
  const [markerPosition, setMarkerPosition] = useState({
    lat: null,
    lng: null,
  });
  useEffect(() => {
    Geocode.fromLatLng(
      setMapPosition({ lat: mapPosition.lat, lng: mapPosition.lng })
    ).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = getCity(addressArray),

        setUserData({
          address: address ? address : "",
          city: city ? city : "",
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  const getCity = (addressArray) => {
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
  const shouldComponentUpdate = (nextProps, nextState) => {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }
  return <div></div>;
} */

class MapTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      area: "",
      state: "",
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng,
      },
      test: [
        //-6.1753924,106.8249641
        {
          id: 2,
          name: "Janet Doe",
          address: "Warung Tante Damai, Jakarta",
          lat: -6.2607187,
          lng: 106.7794275,
        },
        {
          id: 3,
          name: "James Doe",
          address: "Monumen Nasional, Indonesia",
          lat: -6.1753924,
          lng: 106.8249641,
        },
        {
          id: 4,
          name: "James Morgan",
          address: "Jalan Merdeka, Bandung",
          lat: -6.9170552,
          lng: 107.6099095,
        },
        {
          id: 5,
          name: "Amara Morgan",
          address: "Jalan Merdeka, Bandung",
          lat: -6.9170552,
          lng: 107.6099095,
        },
        {
          id: 1,
          name: "Alex Doe",
          address: "Sesame St.",
          lat: this.props.center.lat,
          lng: this.props.center.lng,
        },
      ],
    };
  }
  /**
   * Get the current address from the default map position and set those values in the state
   */
  componentDidMount() {
    console.log(this.state.mapPosition, this.state.mapPosition);
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
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
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
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
  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };
  /**
   * Get the address and set the address input value to the one selected
   *
   * @param addressArray
   * @return {string}
   */
  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };
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
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
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
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
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
          {this.state.test.map((e) => {
            return (
              <div key={e.id} style={{ width: "90%" }}>
                <InfoWindow
                  onClose={this.onInfoWindowClose}
                  position={{
                    lat: e.lat + 0.0018,
                    lng: e.lng,
                  }}
                >
                  <div>
                    <span style={{ padding: 0, margin: 0 }}>
                      <Link to={`/individuals/${e.id}`}>{e.name}</Link>
                    </span>
                    <br />
                    <span style={{ padding: 0, margin: 0 }}>{e.address}</span>
                    <br />
                  </div>
                </InfoWindow>
                <Marker
                  google={this.props.google}
                  name={"Dolores park"}
                  draggable={false}
                  onDragEnd={this.onMarkerDragEnd}
                  position={{
                    lat: e.lat,
                    lng: e.lng,
                  }}
                />
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
              </div>
            );
          })}
        </GoogleMap>
      ))
    );
    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div>
          <div>
            <div className="form-group">
              <h1 style={{ fontWeight: "bolder" }}>Address</h1>
              <input
                type="text"
                name="address"
                className="form-control"
                onChange={this.onChange}
                readOnly="readOnly"
                value={this.state.address}
              />
            </div>
          </div>

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

export default MapTools;
