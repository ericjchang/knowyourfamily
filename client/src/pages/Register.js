import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/userAction";
import Swal from "sweetalert2";

export default () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();

  const toLogin = () => {
    history.push("/login");
  };

  const submitRegister = (e) => {
    e.preventDefault();
    if (userEmail === "" || userPassword === "")
      alert("please input name and password");
    else {
      let userData = {
        email: userEmail,
        password: userPassword,
      };
      console.log(userData);
      //alert("Succesfully registered an account"); ===> ganti swal
      setUserEmail("");
      setUserPassword("");
      dispatch(register(userData));
    }
    Swal.fire("Great !", "Success Register", "success");
    history.push("/login");
  };

  return (
    <>
      <div className="registerPicture" style={{ alignItems: "center" }}>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6} style={{ marginTop: "200px" }}>
            <Form>
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
              <Button
                variant="flat"
                size="xl"
                type="submit"
                onClick={submitRegister}
                style={{ color: "black" }}
              >
                SUBMIT
              </Button>
              {/* <Button variant="flat" size="xl" onClick={toLogin}>
                LOG IN
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
            box-shadow: inset 0 0 0 2px rgb(203,0,109);
            transition: 300ms box-shadow cubic-bezier(0.4, 0, 0.6, 1), 300ms background-color cubic-bezier(0.4, 0, 0.6, 1), 300ms color cubic-bezier(0.4, 0, 0.6, 1);;
            color: white;
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
          .registerPicture {
            background-image: url('https://i.imgur.com/dppvwqm.png');
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
