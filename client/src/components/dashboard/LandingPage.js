import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
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
        class="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/2ZUjKT2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "0",
          paddingTop: "44.15%",
          /* backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "center",
          backgroundPosition: "center",
          width: "100%", */
        }}
        id="landing"
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
          }}
        >
          <h1
            style={{
              fontSize: "10vw",
              marginTop: "15vw",
              marginLeft: "0vw",
            }}
          >
            <b style={{ textShadow: "5px 5px black", color: "#D58A00" }}>
              Famtree
            </b>
          </h1>
          <p style={{ marginLeft: "0vw", fontSize: "2vw" }}>
            Discover your anchestry
          </p>
          <Link to="/login">
            <button
              class="btn"
              style={{
                alignSelf: "center",
                borderColor: "#C2006D",
                borderWidth: "3px",
                borderRadius: "20px",
              }}
              onMouseEnter={changeColor}
              onMouseLeave={changeColor1}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
