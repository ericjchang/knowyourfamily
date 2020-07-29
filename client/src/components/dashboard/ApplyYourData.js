import React from "react";
import { Link } from "react-router-dom";

export default function ApplyYourData() {
  const changeColor = (e) => {
    e.target.style.backgroundColor = "#D58A00";
    return;
  };
  const changeColor1 = (e) => {
    e.target.style.backgroundColor = "transparent";
    return;
  };
  return (
    <div>
      <div
        className="container-fluid justify-content-center text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/SjVBvty.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "start",
          backgroundPosition: "center",
          width: "100%",
        }}
        id="applyyourdata"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "3vw", marginTop: "0vw" }}>
            <b>APPLY YOUR DATA</b>
          </h1>
          <div className="d-flex container-fluid" style={{ marginTop: "20vw" }}>
            <div style={{ width: "20vw" }}>
              <div className="card-body">
                <h5 className="card-title">Personal Name</h5>
                <p className="card-text text-muted">
                  Let us know what you want to be called. It's better using your
                  real name
                </p>
              </div>
            </div>
            <div style={{ width: "20vw" }}>
              <div className="card-body">
                <h5 className="card-title">Family Name</h5>
                <p className="card-text text-muted">
                  Here is the most important part, help us determine your
                  classification through your family name
                </p>
              </div>
            </div>
            <div style={{ width: "20vw" }}>
              <div className="card-body">
                <h5 className="card-title">Address</h5>
                <p className="card-text text-muted">
                  Address based on your civillian ID ( KTP )
                </p>
              </div>
            </div>
          </div>
          <Link to="/individual/form">
            <button
              className="btn"
              style={{
                borderColor: "#C2006D",
                borderWidth: "3px",
                borderRadius: "20px",
              }}
              onMouseEnter={changeColor}
              onMouseLeave={changeColor1}
            >
              Input Data
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
