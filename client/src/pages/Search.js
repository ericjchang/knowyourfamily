import React from "react";
import GameCard from "../components/GameCard";
import { useSelector } from "react-redux";


import { Container, Row, Col} from "react-bootstrap";

export default () => {
  const games = useSelector((state) => state.GameReducer.searchGame);
  return (
    <div>
      {/* <Container> */}
        {/* <h1 className="text-center">Search Results</h1><hr></hr> */}
        <img src={require("../assets/10.png")} class="img-fluid" alt="Responsive image" width="100%"></img>
        <img src={require("../assets/11.png")} class="img-fluid" alt="Responsive image" width="100%"></img>
        <Row>
          {games.length === 0 ? <h5 className="mx-auto" style={{color: 'grey'}}>Sorry, no game found.</h5> : games.map((game, idx) => {
            return (
              <Col sm={3} key={idx}>
                <GameCard game={game}></GameCard>
              </Col>
            );
          })}
        </Row>
      {/* </Container> */}
    </div>
  );
};
