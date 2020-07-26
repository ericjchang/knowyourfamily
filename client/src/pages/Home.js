import React, { useState } from "react";
import GameCard from "../components/GameCard";
// import { fetchData } from '../store/actions'
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Image, Button, InputGroup, FormControl } from "react-bootstrap";
import { Document, Page } from 'react-pdf';
import { Player, ControlBar } from 'video-react';

export default () => {
    const url = 'http://localhost:4000'
    const history = useHistory()

    const [title ] = useState('Famtree 2020')
    const word = 'Lorem ipsum donor si amet ama si asep, consectetur adi picing elit. Kane an sek urat ulur, portopolio sapien ceunah. Nullam sing ngulur ngisi, premium id.'
    const [ menus ] = useState(word)
    const games = useSelector(state => state.GameReducer.games)

    useFetch(url)

    const getStarted =()=>{
      console.log('HEY')
      history.push('/inputIndividual')
    }
    return (
        <>
          <div className="first text-center">
            <Button variant="flat" size="xl" onClick={getStarted} style={{marginTop: '100px'}}>GET STARTED</Button>
          </div>
          <div>
            <Player playsInline autoplay loop poster={require("../assets/4.png")} src={require("../assets/MP-vid1.mp4")} >
              <ControlBar disabled></ControlBar>
            </Player>
          </div>
          <img id="testimoniSec" src={require("../assets/5.png")} className="img-fluid" alt="Responsive image" width="100%"></img>
          <img id="offersSec" src={require("../assets/6.png")} className="img-fluid" alt="Responsive image" width="100%"></img>
          <div className="seventh text-center" id="applyYourDataSec">
            <Button variant="flat" size="xl" onClick={getStarted} style={{marginTop: '200px'}}>GET STARTED</Button>
          </div>
          <div className="eight" id="aboutUsSec"></div>

    
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
              z-index: 100;
            }
            .tombol {
              // position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              text-align: center;
            }
            .tombol:before {
              content: ' ';
              display: block;
              height: 50%;
            }
            .first {
              background-image: url('https://i.imgur.com/eEvi5wA.png');
              background-size: contain;
              background-repeat: no-repeat;
              width: 100%;
              height: 0;
              padding-bottom: 48.15%;
            }
            .seventh {
              background-image: url('https://i.imgur.com/avweIRN.png');
              background-size: contain;
              background-repeat: no-repeat;
              width: 100%;
              height:0;
              padding-bottom: 48.15%;
            }
            .eight {
              background-image: url('https://i.imgur.com/jBEJQ0r.png');
              background-size: contain;
              background-repeat: no-repeat;
              width: 100%;
              height:0;
              padding-bottom: 48.15%;
            }
          `}
        </style>

        </>
      );
};



