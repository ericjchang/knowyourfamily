import React from "react";

export default function ApplyYourData() {
  return (
    <div>
      <div
        className="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/iwIGbwh.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          justifyContent: "start",
          backgroundPosition: "center",
          width: "100%",
        }}
        id="getintouch"
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
            marginLeft: "10vh",
          }}
        >
          <div style={{ marginTop: "15vw" }}>
            <h1 style={{ fontSize: "2vw" }}>
              <b style={{ color: "#D58A00" }}>Email Address</b>
            </h1>
            <div style={{ textAlign: "justify", width: "55vw" }}>
              <p
                style={{ fontSize: "1.5vw", color: "#d3d3d3" }}
                className="my-3 text-muted"
              >
                Jl. Sultan Iskandar Muda No.7, Kby. Lama Sel., Kec. Kby. Lama,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "2vw" }}>
              <b style={{ color: "#D58A00" }}>Email Address</b>
            </h1>
            <div style={{ textAlign: "justify" }}>
              <p
                style={{ fontSize: "1.5vw", color: "#d3d3d3" }}
                className="my-3 text-muted"
              >
                Famtree@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "2vw", marginTop: "2vw" }}>
              <b style={{ color: "#D58A00" }}>Mobile Number</b>
            </h1>
            <div style={{ textAlign: "justify" }}>
              <p
                style={{ fontSize: "1.5vw", color: "#d3d3d3" }}
                className="my-3 text-muted"
              >
                021-1982-7124
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
