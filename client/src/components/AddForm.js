import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Container, Row, Col} from "react-bootstrap";
import ListIndividual from "../components/ListIndividuals";
// import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  CardColumns,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default () => {
  const history = useHistory();
  const toRegister = () => {
    history.push("/register");
  };
  return (
    <>
      {/* Input Form */}
      <div className="loginPicture" style={{ alignItems: "center" }}>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6} style={{ marginTop: "200px" }}>
            <Col sm={8}>
              <Form>
                <Form.Group controlId="formBasicEmail" className="input">
                  <Form.Control
                    type="email"
                    placeholder="First Name"
                    className="inputHeight"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="input">
                  <Form.Control
                    type="text"
                    placeholder="Last Name / Family Name"
                    className="inputHeight"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="input">
                  <Form.Control
                    type="text"
                    placeholder="Date Of Birth"
                    className="inputHeight"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="input">
                  <Form.Control
                    type="text"
                    placeholder="Gender"
                    className="inputHeight"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="input">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="inputHeight"
                  />
                </Form.Group>
                <Button variant="flat" size="xl" type="submit">
                  SUBMIT
                </Button>
              </Form>
            </Col>
            {/* <Col sm={3}></Col> */}
          </Col>
        </Row>
      </div>
      {/* Cards */}
      <Container>
        <ListIndividual />
      </Container>
      {/* Footer */}
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
            // width: 315px;
          }
          .inputHeight {
            height:3rem;
          }
          .loginPicture {
            background-image: url('https://i.imgur.com/SPckCLY.png');
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
