import React, { useState, useContext } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Swal from 'sweetalert2'

export default function Navigation() {

  const history = useHistory();
  // const { theme, changeTheme } = useContext(MyContext);
  const toIndividualPage = () => {
    history.push("/individual/form");
  };
  const toSearchPage = () => {
    history.push("/search");
  };
  const toLogin = () => {
    history.push("/login");
  };
  const toLogout = () => {
    localStorage.clear()
    history.push("/login");
  };
  const toMap = () => {
    history.push("/map");
  };
  const findData = (e) => {
    // LOGIC SEARCH
  };

  return (
    <div style={{ zIndex: 100, width: "100vw" }}>
      <Navbar
        expand="lg"
        style={{
          width: "100%",
          zIndex: "100",
          backgroundColor: `#D58A00`,
        }}
      >
        <Navbar.Brand>
          <Link
            to="/dashboard" /* style={{ color: `${themes[theme].background}` }} */
          >
            Famtree
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* // <div> */}
            {localStorage.username && (
              <NavDropdown title="Create" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={toIndividualPage}>
                  Create a Profile
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/inputIndividual">Create a Family</Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {localStorage.username && (
              <Nav.Link href="#testimonies" style={{ color: "white" }}>
                Testimony
              </Nav.Link>
            )}
            {localStorage.username && (
              <Nav.Link href="#whatdoweoffer" style={{ color: "white" }}>
                Offers
              </Nav.Link>
            )}
            {localStorage.username && (
              <Nav.Link href="#applyyourdata" style={{ color: "white" }}>
                Apply Your Data
              </Nav.Link>
            )}
            {localStorage.username && (
              <Nav.Link href="#getintouch" style={{ color: "white" }}>
                About Us
              </Nav.Link>
            )}
            {/* // </div> */}
          </Nav>
          <Form inline onSubmit={findData}>
            <Navbar.Brand>
              <i className="fa fa-search fa-2x" onClick={toSearchPage}></i>
            </Navbar.Brand>
            <Button className="btn btn-danger" onClick={toMap}>
              See Nearby
            </Button>
            <button
              className="btn btn-outline-light ml-2"
              /* onClick={changeTheme} */
            >
              Theme
            </button>
            {!localStorage.username &&
            <Navbar.Brand>
              <i className="fa fa-user-circle fa-2x ml-2" onClick={toLogin}></i>
            </Navbar.Brand>}
            {localStorage.username &&
            <Navbar.Brand>
              <Button variant="dark" className="btn ml-2">
              {localStorage.username}
            </Button>
            </Navbar.Brand>}
            {localStorage.username &&
            <Navbar.Brand>
              <i className="fa fa-sign-out fa-2x " onClick={toLogout}></i>
            </Navbar.Brand>}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          <b>Famtree</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#testimonies">
                Testimonies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whatdoweoffer">
                What do we offer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#applyyourdata">
                Apply your data
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#getintouch">
                Get in touch
              </a>
            </li>
          </ul>
          <ul
            className="navbar-nav"
            style={{ marginLeft: "2vh", marginRight: "2vh" }}
          >
            <li className="nav-item">
              <Link to="/register">
                <button className="btn btn-outline-warning">
                  Register Now
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <button className="btn btn-outline-success">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/map">
                <button className="btn btn-outline-success">Nearby</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}
