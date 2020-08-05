import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { GameDetail } from "../store/actions"
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default (props) => {
  const url = "http://localhost:4000";
  const { id } = useParams();
  const dispatch = useDispatch();
  const gem = useSelector(state=> state.GameReducer.detailGame)
//   const kondisi = useSelector(state=> state.GameReducer.loadingInDetailGame)

  useEffect(() => {
    dispatch(GameDetail(url, id)) 
  }, []);

  return (
    <>
    {/* {kondisi && <h1 style={{color: "red"}}> Loading.......</h1>} */}
      <h1 style={{textAlign: 'center'}}>{gem.name}</h1>
      <Card style={{ width: "40%", margin: "auto", backgroundColor: "white" }}>
        <Card.Img variant="top" src={gem.img} />
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>Game Info</Card.Title><hr/>
          <Card.Text style={{textAlign: 'justify'}}>{gem.description}</Card.Text>
        </Card.Body>
      </Card>
     
    </>
  );
};
