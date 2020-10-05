import React from "react";

export default function Testimonies() {
  return (
    <div>
      <div
        className="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/TG2D35O.png')",
          /* backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "0",
          paddingTop: "44.15%", */
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "flex-start",
          backgroundPosition: "center",
          width: "100%",
          paddingTop: "48,15%",
        }}
        id="testimonies"
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
            marginLeft: "10vh",
          }}
        >
          <h1 style={{ fontSize: "4vw", marginTop: "15vw" }}>
            <b>T E S T I M O N I E S</b>
          </h1>
          <div style={{ textAlign: "justify", width: "55vw" }}>
            <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
              Zahra is a graphic artist who helps brands stand out throught
              compelling visual stories. She found out her relation to a cousin
              from an art gallery. Seems like it runs in the family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
