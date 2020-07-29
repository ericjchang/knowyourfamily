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
const dummyUrl = "http://localhost:3000/family";

export function loginUser() {
  console.log("MASUK ACTION loginUser");
}

export function fetchData() {
  return (dispatch) => {
    axios
      .get(`${dummyUrl}`)
      .then((response) => {
        dispatch({
          type: "FETCH_FAMILY",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addFamily(data) {
  return (dispatch) => {
    axios
      .post(`${dummyUrl}`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "ADD_FAMILY",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteFamily(id) {
  return (dispatch) => {
    axios
      .delete(`${dummyUrl}/${id}`)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "DELETE_FAMILY",
          msg: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function editFamily(id, data) {
  return (dispatch) => {
    axios
      .put(`${dummyUrl}/${id}`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "EDIT_FAMILY",
          msg: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getFamilyById(id) {
  return (dispatch) => {
    axios
      .get(`${dummyUrl}/${id}`)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "EDIT_FAMILY",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function searchFamily(query) {
  return (dispatch) => {
    axios
      .get(`${dummyUrl}?search=${query}`)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "SEARCH_FAMILY",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
