import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../store/actions/individualAction";
export default function Search() {
  const results = useSelector((state) => state.IndividualReducer.individuals);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(results, "ini results");
  const handleInput = (e) => {
    let input = e.target.value;
    setInput(input);
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(fetchData);
  };
  return (
    <div className="container my-3">
      <form className="mx-3">
        <div className="form-group">
          <label for="exampleInputEmail1">Family</label>
          <input
            type="search"
            className="form-control"
            id="search"
            onChange={handleInput}
            placeholder="name.."
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
          overflowY: "scroll",
          height: "70vh",
        }}
      >
        {results ? (
          results.map((e) => {
            return (
              <div
                class="card"
                style={{
                  width: "18rem",
                  margin: "auto",
                  marginTop: "3vh",
                  marginBottom: "3vh",
                }}
              >
                <img
                  class="card-img-top"
                  src="https://flexgroup.nz/wp-content/uploads/2018/05/dummy-image.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{e.name}</h5>
                  <p class="card-text">{e.Address}</p>
                  <Link to={`/individuals/${e.id}`} class="btn btn-primary">
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
