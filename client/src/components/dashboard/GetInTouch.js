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
            flexDirection: "start",
            flexWrap: "wrap",
            height: "100vh",
            marginLeft: "10vh",
            backgroundColor: "red",
          }}
        >
          <div style={{ marginTop: "2vw" }}>
            <h1 style={{ fontSize: "2vw" }}>
              <b>Mailing Address</b>
            </h1>
            <div style={{ textAlign: "justify", width: "55vw" }}>
              <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
                Jl. Sultan Iskandar Muda No.7, Kby. Lama Sel., Kec. Kby. Lama,
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "2vw" }}>
              <b>Email Address</b>
            </h1>
            <div style={{ textAlign: "justify" }}>
              <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
                Famtree@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h1 style={{ fontSize: "2vw", marginTop: "2vw" }}>
              <b>Mobile Number</b>
            </h1>
            <div style={{ textAlign: "justify" }}>
              <p style={{ fontSize: "1.5vw" }} className="my-3 text-muted">
                021-1982-7124
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
