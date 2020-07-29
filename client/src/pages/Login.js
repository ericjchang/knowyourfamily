import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/userAction";
import Swal from "sweetalert2";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const toRegister = () => {
    history.push("/register");
  };

  const submitLogin = (e) => {
    e.preventDefault();
    //console.log("isi innput SUBMIT", userEmail, userPassword);
    /* localStorage.username = userEmail;
    localStorage.password = userPassword; */
    let userData = {
      email: userEmail,
      password: userPassword,
    };
    if (userData.email == "" || userData.password == "") {
      Swal.fire("Failed", "please input name and password", "error");
    } else {
      dispatch(login(userData));
      Swal.fire("Great !", "Login Success", "success");
      history.push("/user/select");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      window.location.reload();
    }
  }, []);
  return (
    <>
      <div className="loginPicture" style={{ alignItems: "center" }}>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6} style={{ marginTop: "200px" }}>
            <Form onSubmit={submitLogin}>
              <Form.Group controlId="formBasicEmail" className="input">
                <Form.Control
                  type="email"
                  placeholder="Username"
                  className="inputHeight"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="input">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="inputHeight"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <span style={{ color: "#d3d3d3" }}>
                don't have account ? register{" "}
                <Link to="/register">
                  <b style={{ color: "#d3d3d3" }}>here</b>
                </Link>
              </span>
              <br />
              <br />
              <Button
                variant="flat"
                size="xl"
                type="submit"
                style={{ color: "black" }}
                onClick={submitLogin}
              >
                SUBMIT
              </Button>
              {/* 
              <Button
                style={{ backgroundColor: "#76d690" }}
                variant="flat"
                size="xl"
                onClick={toRegister}
              >
                REGISTER
              </Button> */}
            </Form>
          </Col>
        </Row>
      </div>
      <div className="eight" id="aboutUsSec"></div>
      <style type="text/css">
        {`
          .btn-flat {
            padding: 18px 36px;
            border-radius: 61px;
            box-shadow: inset 0 0 0 2px black;
            transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1), 300ms color cubic-bezier(0.4, 0, 0.6, 1);;
            color: #DB8B1E;
            font-size: 20px;
          }
          .btn-xl:hover {
            box-shadow: inset 0 0 0 4px rgb(203,0,109);
            color: white;
            background-color: #DB8B1E;
            z-index: 100;
          }
          .input {
            padding: 5px 5px;
            border-radius: 10px;
            box-shadow: inset 0 0 0 5px #DB8B1E;
            width: 315px;
          }
          .inputHeight {
            height:3rem;
          }
          .loginPicture {
            background-image: url('https://i.imgur.com/bvIWfZr.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height: 0;
            padding-bottom: 48.15%;
            align-items: center;
          }
          .eight {
            background-image: url('https://i.imgur.com/jBEJQ0r.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height:0;
            padding-bottom: 48.15%;
          }
          `}
      </style>
    </>
  );
};
