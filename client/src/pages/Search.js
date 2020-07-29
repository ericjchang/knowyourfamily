import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchIndividual } from "../store/actions/individualAction";

export default function Search() {
  const results = useSelector(
    (state) => state.IndividualReducer.filteredIndividual
  );
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let input = e.target.value;
    setInput(input);
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(searchIndividual(input));
  };
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url('https://i.imgur.com/BNulOgL.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        justifyContent: "center",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <form className="mx-3">
        <div className="form-group container">
          <h1 style={{ fontWeight: "bolder" }}>Search Individual</h1>
          <input
            type="search"
            className="form-control"
            id="search"
            onChange={handleInput}
            placeholder="name.."
            style={{ marginBottom: "3vh" }}
          />
          <button type="submit" className="btn btn-primary" onClick={search}>
            Search
          </button>
        </div>
      </form>
      <div
        className="container d-flex align-content-around flex-wrap my-3"
        style={{
          border: "2px solid black",
          overflowY: "scroll",
          height: "70vh",
        }}
      >
        {results ? (
          results.map((e) => {
            return (
              <div
                key={e.id}
                className="card"
                style={{
                  width: "18rem",
                  margin: "auto",
                  marginTop: "0vh",
                  marginBottom: "3vh",
                }}
              >
                <img
                  className="card-img-top"
                  src="https://flexgroup.nz/wp-content/uploads/2018/05/dummy-image.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.Address}</p>
                  <Link to={`/individuals/${e.id}`} className="btn btn-primary">
                    User Info
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1>user tidak ditemukan</h1>
        )}
      </div>
    </div>
  );
}
