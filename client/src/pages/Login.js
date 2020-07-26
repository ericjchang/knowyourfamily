import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const changeData = (e) => {
    let { id, value } = e.target;
    let userLogin = {
      ...user,
      [id]: value,
    };
    setUser(userLogin);
  };

  const submit = (e) => {
    e.preventDefault();
    //dispatch action post login
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
            value={user.email}
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
            value={user.password}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={submit} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
