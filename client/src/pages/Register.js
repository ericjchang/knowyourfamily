import React, { useState } from "react";

export default function Register() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const changeData = (e) => {
    let { id, value } = e.target;
    let newUser = {
      ...userData,
      [id]: value,
    };
    setUserData(newUser);
  };

  const submit = (e) => {
    e.preventDefault();
    //dispatch action post register
  };
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={changeData}
            value={userData.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={changeData}
            value={userData.password}
          />
        </div>
        <button onClick={submit} type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
