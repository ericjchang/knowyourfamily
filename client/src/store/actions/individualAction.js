import axios from "axios";
const dummyUrl = "http://localhost:3000/individual";

export function fetchRole() {
  return (dispatch) => {
    axios({
      method: "get",
      url: `${dummyUrl}`,
      headers: { access_token: localStorage.access_token },
    })
      .then((response) => {
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

export function fetchData() {
  return (dispatch) => {
    console.log("masukkk1");
    axios
      .get(`${dummyUrl}`)
      .then((response) => {
        console.log("masukkk2");
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

export function addIndividual(data) {
  console.log("masuk action ada1", data);
  return (dispatch) => {
    console.log("masuk action ada2", data);
    axios({
      method: "POST",
      url: `${dummyUrl}`,
      data: data,
      headers: { access_token: localStorage.access_token },
    })
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "ADD_INDIVIDUAL",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteIndividual(id) {
  return (dispatch) => {
    axios
      .delete(`${dummyUrl}/${id}`)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "DELETE_INDIVIDUAL",
          msg: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function editIndividual(id, data) {
  return (dispatch) => {
    axios
      .put(`${dummyUrl}/${id}`, data)
      .then((response) => {
        console.log("sukses");
        dispatch({
          type: "EDIT_INDIVIDUAL",
          msg: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getIndividuaById(id) {
  return (dispatch) => {
    console.log("masuk individual by id");
    axios({
      method: "GET",
      url: `${dummyUrl}/${id}`,
      headers: { access_token: localStorage.access_token },
    })
      .then((response) => {
        console.log("sukses", response);
        dispatch({
          type: "GET_INDIVIDUAL_BY_ID",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function searchIndividual(query) {
  return (dispatch) => {
    console.log("masuk search", query);
    axios({
      method: "GET",
      url: `${dummyUrl}/?search=${query}`,
      headers: { access_token: localStorage.access_token },
    })
      .then((response) => {
        console.log("sukses", response);
        dispatch({
          type: "SEARCH_INDIVIDUAL",
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
