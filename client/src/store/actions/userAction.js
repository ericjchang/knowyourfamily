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
const dummyUrl = "http://localhost:3000/";

export function login(data) {
  console.log("masuk login", data);
  return (dispatch) => {
    axios
      .post(`${dummyUrl}/login`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "USER_LOGIN",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function register(data) {
  console.log("masuk register", data);
  return (dispatch) => {
    axios
      .post(`${dummyUrl}/register`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "USER_REGISTER",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function editUser(id, data) {
  return (dispatch) => {
    axios
      .put(`${dummyUrl}/user/${id}`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "USER_EDIT",
          msg: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getUserById(id) {
  return (dispatch) => {
    axios
      .get(`${dummyUrl}/user/${id}`)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "GET_USER_BY_ID",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
