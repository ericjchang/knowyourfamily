import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import GameCard from "../components/GameCard";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import SearchCard from '../components/SearchCard'

export default () => {
  const games = useSelector((state) => state.GameReducer.searchGame);
  const data = useSelector(state=> state.GameReducer.games) // arr games
  const [inputNameBody, setInputNameBody] = useState('') // yg dinput

  const history = useHistory();
  const dispatch = useDispatch()

  const findGame = (e) => { //SEARCH
    e.preventDefault()
    console.log('masuk >>>', inputNameBody)
    let arr = []
    if (data.length > 0) {
      for(let i = 0; i < data.length; i++){
        let counter = 0
        let storeName = data[i].name.toUpperCase()
        let inputName = inputNameBody.toUpperCase()
        for(let j = 0; j < storeName.length; j++){
          for(let k = 0; k < inputName.length; k++){
            if(j === k && storeName[j] === inputName[k]) counter++
          }
        }
        if(counter === storeName.length || counter === inputName.length) arr.push(data[i])
      }
      dispatch({
        type: 'SEARCH_GAME',
        game: arr
      })
    }
  }


  return (
      <>
          <div className="searchPicture" style={{alignItems: 'center'}}>
            <Container>
              <Row>
                <Col sm={10} className="mt-5 pt-5">
                  <Form onSubmit={findGame}>
                    <Form.Group controlId="formBasicEmail" className="input">
                      <Form.Control type="text" placeholder="Type a name" className="inputHeight" onChange={(e)=>{ setInputNameBody(e.target.value)}}/>
                    </Form.Group>
                  </Form>
                </Col>
                <Col sm={2} className="mt-5 pt-5">
                    <Button variant="flat" size="xl" type="submit" onClick={findGame}>SEARCH</Button>
                </Col>
              </Row><hr></hr>
            </Container>
            <Container>
                <Row>
                  {games.length === 0 
                  ? <h5 className="mx-auto" style={{color: 'grey'}}>Sorry, your search {inputNameBody} do not match any name.</h5> 
                  : games.map((game, idx) => {
                    return (
                      <Col sm={3} key={idx}>
                        {/* <GameCard game={game}></GameCard> */}
                      </Col>
                    );
                  })}
                </Row>
                  <SearchCard></SearchCard>
            </Container>
          </div>
          {/* Cards */}
          {/* <div className="searchPicture2" id="aboutUsSec"></div> */}
          <div className="eight" id="aboutUsSec"></div>


          <style type="text/css">
          {`
          .btn-flat {
            padding: 12px 36px;
            border-radius: 61px;
            box-shadow: inset 0 0 0 2px black;
            transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1), 300ms color cubic-bezier(0.4, 0, 0.6, 1);;
            color: #db8b1e;
            font-size: 20px;
          }
          .btn-xl:hover {
            box-shadow: inset 0 0 0 4px rgb(203,0,109);
            color: white;
            background-color: #db8b1e;
            z-index: 100;
          }
          .input {
            padding: 5px 5px;
            border-radius: 10px;
            box-shadow: inset 0 0 0 5px #db8b1e;
            // width: 315px;
          }
          .inputHeight {
            height:3rem;
          }
          .searchPicture {
            background-image: url('https://i.imgur.com/zwecVKr.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height: 0;
            padding-bottom: 48.15%;
            align-items: center;
          }
          .searchPicture2 {
            background-image: url('https://i.imgur.com/MOV4pez.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height: 0;
            padding-bottom: 48.15%;
            align-items: center;
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

