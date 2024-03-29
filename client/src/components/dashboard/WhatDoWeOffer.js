import React from "react";

export default function WhatDoWeOffer() {
  return (
    <div>
      <div
        className="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/vEXdo4I.png')",
          /* 
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "0",
          paddingTop: "44.15%", */
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "flex-end",
          backgroundPosition: "center",
          width: "100%",
        }}
        id="whatdoweoffer"
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
            marginRight: "5vh",
          }}
        >
          <h1 style={{ fontSize: "4vw", marginTop: "15vw" }}>
            <b>WHAT DO WE OFFER</b>
          </h1>
          <div style={{ textAlign: "right", width: "50vw", marginTop: "5vh" }}>
            <h4>Closing the Gap</h4>
            <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
              Potentially reach out your relation in a blink
            </p>
            <h4>Verified Data</h4>
            <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
              Authorized Civillian ID
            </p>
            <h4>Contact Information</h4>
            <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
              Social media marketing, Current location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
