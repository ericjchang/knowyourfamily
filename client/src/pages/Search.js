import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Search() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    let input = e.target.value;
    setInput(input);
  };

  const search = (e) => {
    e.preventDefault();
    //dispatch action endpoint search
  };
  return (
    <div className="container my-3">
      <form className="mx-3">
        <div className="form-group">
          <label for="exampleInputEmail1">Search</label>
          <input
            type="search"
            className="form-control"
            id="search"
            onChange={handleInput}
            placeholder="name, family name, etc."
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={search}>
          Search
        </button>
      </form>
      <div
        className="container d-flex align-content-around flex-wrap my-3"
        style={{
          border: "2px solid black",
          overflowX: "scroll",
          height: "35vh",
        }}
      >
        <div className="container d-flex align-content-around flex-wrap my-3">
          <div
            class="card"
            style={{
              width: "18rem",
              margin: "auto",
              marginTop: "3vh",
              marginBottom: "3vh",
            }}
          >
            <img className="card-img-top" src="..." alt="Card cap" />
            <div className="card-body">
              <Link to="/individual/:id">
                <h5 className="card-title">--Nama Individu--</h5>
              </Link>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link href="/individual/:id" className="btn btn-primary">
                check them
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container d-flex align-content-around flex-wrap my-3"
        style={{
          border: "2px solid black",
          overflowX: "scroll",
          height: "35vh",
        }}
      >
        <div className="container d-flex align-content-around flex-wrap my-3">
          <div
            class="card"
            style={{
              width: "18rem",
              margin: "auto",
              marginTop: "3vh",
              marginBottom: "3vh",
            }}
          >
            <img className="card-img-top" src="..." alt="Card cap" />
            <div className="card-body">
              <Link to="/individual/:id">
                <h5 className="card-title">--Nama Individu--</h5>
              </Link>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link href="/individual/:id" className="btn btn-primary">
                check them
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
