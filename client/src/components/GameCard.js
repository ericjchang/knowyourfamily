import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default (props) => { 
    const dispatch = useDispatch()
    const favGame = useSelector((state)=> state.FavoriteReducer.favGame)
    const keadaan = useSelector((state) => state.GameReducer.keadaan);

    const addFavourite = () => {
        let kondisi = true;
        if(favGame.length !== 0 ){
          for(let i = 0; i < favGame.length; i++){
            if(favGame[i].name === props.game.name) kondisi = false;
          }
        } 
        if(!kondisi){
          Swal.fire("You have already added this selected game");
        }else{
          dispatch({
            type: "ADD_FAVOURITE",
            newFavGame: { id: props.game.id, name: props.game.name, img: props.game.img },
          });
          Swal.fire("You have successfully added a new game to your favourites");
        }
    }
    return (
      <>
        <Card className="kartu" style={{ marginBottom: 30 + 'px'}}>
          <Card.Img variant="top" src={props.game.img} style={{height: 300 + 'px'}}/>
          <Card.Body>
            <Card.Title className="card-title text-center">{props.game.name}</Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group mx-auto">
                <Link to={`/games/${props.game.id}`} className="btn btn-md btn-warning">Game Detail</Link>
                {keadaan && ( <Button variant="dark" onClick={() => addFavourite()}>My Favourite</Button> )}
              </div>
            </div>
          </Card.Body>
        </Card>           
      </>
  );
};