import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default () => {
    const [coordinates, setCoordinates] = useState({
        latitude: null,
        longitude: null
    })

    const [address, setAddress] = useState('')

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(coordinateFunction, handleErrorCoordinates);
        } else {
          alert("Geolocation is not supported by this browser.")
        }
    }

    const coordinateFunction = (position) => {
        console.log('ini posisi', position)
        setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    const reverseGeolocation = () => {
        // console.log(coordinates.latitude, coordinates.longitude)
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&sensor=false&key=${NEW_G_API_KEY}`)
        .then(response => response.json())
        .then( data => setAddress(data.results[0].formatted_address))
        .catch(error => alert(error))
    }

    const handleErrorCoordinates =(error)=> {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
            default:
              alert("An unknown error occurred.")
        }
    }

    const GOOGLE_API_KEY = 'AIzaSyAFiwkJffBdpO5ZPn3Jvjlye5j6-YWfePo'
    const GOOGLE_API_KEY2 = 'AIzaSyCuK50SSVEw5KOv_UZnOnlRe3OCzB_aLoc'
    const NEW_G_API_KEY = 'AIzaSyCx4pE7NnS3J307JNrMu9ScveiHAHMmQh0'

    return (
        
        <>
            <Container>
                <h1>this the Map</h1><br></br>
                <h1>The Map</h1><hr></hr>
                <h3>The Coordinates (Geolocation)</h3>
                <Button onClick={getLocation}>Get Coordinates</Button>
                <h5>Latitude: {coordinates.latitude}</h5>
                <h5>Longitude: {coordinates.longitude}</h5>
                <h3>The Address (Reverse Geolocation)</h3>
                <Button onClick={reverseGeolocation}>Get Address</Button>
                <h5>Address: {address}</h5><hr></hr>
                { coordinates.latitude && coordinates.longitude 
                    ? <div>
                        <h5>Here the Map...</h5>
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.latitude},${coordinates.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${coordinates.latitude},${coordinates.longitude}&key=${GOOGLE_API_KEY}`} alt=''></img>
                      </div>
                    : <h5>No Map...</h5>
                }
            </Container>
        </>
    )
}