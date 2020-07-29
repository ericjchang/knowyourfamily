import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRole } from "../store/actions/individualAction";
import { useHistory } from "react-router-dom";

export default function SelectUser() {
  const individual = useSelector(
    (state) => state.IndividualReducer.individuals
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const access_token = localStorage.access_token;

  useEffect(() => {
    dispatch(fetchRole());
  }, []);

  const submit = (id) => {
    localStorage.setItem("id", id);
    history.push("/dashboard");
  };

  const createProfile = () => {
    history.push("/individual/form");
  };

  return (
    <div>
      {individual.length == 0 ? (
        <div class="container text-center mt-5">
          <h1>Select User</h1>
          <div className="container d-flex justify-content-center mt-5">
            <div style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">You haven't create a profile</h5>
                <button onClick={() => createProfile()} class="btn btn-primary">
                  Create a new profile
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="container text-center mt-5">
          <h1>Select User</h1>
          <div className="container d-flex justify-content-center mt-5">
            {individual.map((e) => {
              return (
                <div key={e.id} style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{e.name}</h5>
                    <button
                      onClick={() => submit(e.id)}
                      class="btn btn-primary"
                    >
                      Select
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
