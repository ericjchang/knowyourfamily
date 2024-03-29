import React from "react";
import { Card, Button, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/* import Swal from "sweetalert2"; */
export default (props) => {
  const dispatch = useDispatch();
  const favGame = useSelector((state) => state.FavoriteReducer.favGame);
  const keadaan = useSelector((state) => state.GameReducer.keadaan);
  const addFavourite = () => {
    // let kondisi = true;
    // if(favGame.length !== 0 ){
    //   for(let i = 0; i < favGame.length; i++){
    //     if(favGame[i].name === props.game.name) kondisi = false;
    //   }
    // }
    // if(!kondisi){
    //   Swal.fire("You have already added this selected game");
    // }else{
    //   dispatch({
    //     type: "ADD_FAVOURITE",
    //     newFavGame: { id: props.game.id, name: props.game.name, img: props.game.img },
    //   });
    //   Swal.fire("You have successfully added a new game to your favourites");
    // }
  };
  return (
    <>
      {/* <Card className="kartu" style={{ marginBottom: 30 + 'px'}}> */}
        <Card>
          <Card.Img
            variant="top"
            src={props.individuals.profile_pic}
          />
          <Card.Body>
            <Card.Title>{props.individuals.name}</Card.Title>
            <Card.Text>DoB: {props.individuals.name}</Card.Text>
            <Card.Text>Gender: {props.individuals.gender}</Card.Text>
            <Card.Text>DoB, City: {props.individuals.date_of_birth}, {props.individuals.place_of_birth}</Card.Text>
            <Card.Text>Location: {JSON.stringify(props.individuals.Location)}</Card.Text>
            <Card.Text>Instagram: @{props.individuals.instagram}</Card.Text>
            <Card.Text>Facebook: {props.individuals.facebook}</Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card>
        {/* <Card>
          <Card.Img
            variant="top"
            src="https://mybeautybrides.net/images/84-1566726567078.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Kevin_De_Bruyne_201807091.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://banjarbaruweb.com/wp-content/uploads/2019/08/profil-Hamish-Daud.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.idntimes.com/content-images/post/old/c16a5-laura_basuki_.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src="https://pbs.twimg.com/profile_images/934683164672385025/NRuNmp-L.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <i className="fa fa-map-marker fa-2x"></i>
            <i className="fa fa-instagram fa-2x ml-2"></i>
          </Card.Body>
        </Card> */}
    </>
  );
};
