import React from "react";

export default function WhatDoWeOffer() {
  return (
    <div>
      <div
        class="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/vEXdo4I.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "0",
          paddingTop: "44.15%",
          /* backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "flex-end",
          backgroundPosition: "center",
          width: "100%", */
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
          <div style={{ textAlign: "justify", width: "50vw" }}>
            <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
              Excepteur magna velit aute deserunt id sit ipsum occaecat magna ex
              laborum nostrud. Occaecat occaecat dolore sit consectetur non quis
              dolor irure ea ea et nisi. Amet dolor eiusmod sit fugiat elit
              cillum amet enim.
            </p>
          </div>
          <a href="#landing">
            <button
              style={{ width: "13vh", height: "5vh", alignSelf: "center" }}
            >
              Button
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
