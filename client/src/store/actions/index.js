import axios from "axios";
export function fetchData(url) {
  return (dispatch) => {
    axios
      .get(`${url}/games`)
      .then((response) => {
        // console.log('ALL GAMES FROM ACTION STORE >>>', response.data)
        dispatch({
          type: "FETCH_DATA",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function GameDetail(url, id) {
  return (dispatch) => {
    axios
      .get(`${url}/games/${id}`)
      .then((response) => {
        // console.log('GAME DETAIL FROM STORE >>>', response.data)
        dispatch({
          type: "GAME_DETAIL",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
