// Role :
// 1 - Great Grandpa
// 2 - Great Grandma
// 3 - Grandpa
// 4 - Grandma
// 5 - Father
// 6 - Mother
// 7 - Brother
// 8 - Sister
// 9 - Other

// POST: /login
// POST: /register

// GET : /user/:id  --> find user by id
// PUT : /user/:id --> edit user

// GET : /individual --> fetch semua individual dari user
// GET : /individual/?search=
// POST : /individual --> create individual baru
// PUT : /individual/:id --> edit individual
// DELETE : /individual/:id --> delete individual

// GET : /family
// POST : /family/:id  --> untuk add relationship, default status 'false', id yg di pake, id user yg add
// PUT : /family/:id  --> untuk accept relationship, id yg di pake, id relationship
// DELETE : /family/:id --> untuk decline relationship, id yg di pake, id relationship

import axios from "axios";
const dummyUrl = 'http://localhost:3003/users'

export function loginUser(){
  console.log('MASUK ACTION loginUser')

}

export function fetchData(url) {
  console.log('MASUK ACTION FETCH DATA')
  return (dispatch) => {
    axios
      .get(`${dummyUrl}`)
      .then((response) => {
        console.log('ALL USERS FROM ACTION STORE >>>', response.data)
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
      .get(`${dummyUrl}/${id}`)
      .then((response) => {
        console.log('USER DETAIL FROM STORE >>>', response.data)
        // dispatch({
        //   type: "GAME_DETAIL",
        //   data: response.data,
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
