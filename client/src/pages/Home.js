import React, { useState } from "react";
import GameCard from "../components/GameCard";
// import { fetchData } from '../store/actions'
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import { Player, ControlBar } from 'video-react';

export default () => {
    const url = 'http://localhost:4000'

    const [title ] = useState('Famtree 2020')
    const word = 'Lorem ipsum donor si amet ama si asep, consectetur adi picing elit. Kane an sek urat ulur, portopolio sapien ceunah. Nullam sing ngulur ngisi, premium id.'
    const [ menus ] = useState(word)
    const games = useSelector(state => state.GameReducer.games)

    useFetch(url)

    return (
        <>
          <div className="first text-center">
            <Button variant="flat" size="xl">GET STARTED</Button>
          </div>
          <div>
            <Player playsInline autoplay loop poster={require("../assets/4.png")} src={require("../assets/MP-vid1.mp4")} >
              <ControlBar disabled></ControlBar>
            </Player>
          </div>
          <img src={require("../assets/5.png")} class="img-fluid" alt="Responsive image" width="100%"></img>
          <img src={require("../assets/6.png")} class="img-fluid" alt="Responsive image" width="100%"></img>
          <div className="seventh text-center">
            <Button variant="flat" size="xl">GET STARTED</Button>
          </div>
          <img src={require("../assets/8.png")} class="img-fluid" alt="Responsive image" width="100%"></img>

    
        <style type="text/css">
          {`
            .btn-flat {
              padding: 18px 36px;
              border-radius: 61px;
              box-shadow: inset 0 0 0 2px rgb(203,0,109);
              transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1), 300ms color cubic-bezier(0.4, 0, 0.6, 1);;
              color: #cb006d;
              font-size: 20px;
            }
            .btn-xl:hover {
              box-shadow: inset 0 0 0 4px rgb(203,0,109);
              color: white;
              background-color: #db8b1e;
            }
            .first {
              background-image: url('https://i.imgur.com/eEvi5wA.png');
              background-size: contain;
              background-repeat: no-repeat;
              width: auto;
              height: 100vh;
            }
            .seventh {
              background-image: url('https://i.imgur.com/avweIRN.png');
              background-size: contain;
              background-repeat: no-repeat;
              height:100vh;
            }
          `}
        </style>

        </>
      );
};



