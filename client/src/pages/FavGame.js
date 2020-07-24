import  React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col} from "react-bootstrap";
import GameCard from '../components/GameCard'

export default () => {
  const dispatch = useDispatch() 
  const data = useSelector((state) => state.FavoriteReducer.favGame );

  useEffect(()=>{
    dispatch({
      type: 'MATIKAN_KEADAAN'
    })
  })

  return (
    <>
      <Container>
        <h1 className="text-center">Favorite Games</h1><hr/>
        <Row>
          {data.length === 0 ? <h5 className="mx-auto" style={{color: 'grey'}}>You have no favourite yet.</h5> : data.map((game, idx) => {
            return (
              <Col sm={3} key={game.id}>
                <GameCard game={game}></GameCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
