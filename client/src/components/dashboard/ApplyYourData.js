import React from "react";

export default function ApplyYourData() {
  return (
    <div>
      <div
        class="container-fluid text-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/SjVBvty.png')",
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
        id="applyyourdata"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            height: "100vh",
          }}
        >
          <h1 style={{ fontSize: "3vw", marginTop: "1vw" }}>
            <b>APPLY YOUR DATA</b>
          </h1>
          <div
            className="d-flex justify-content-around container-fluid"
            style={{ marginTop: "20vw" }}
          >
            <div style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Personal Name</h5>
                <p class="card-text text-muted">
                  Let us know what you want to be called. It's better using your
                  real name
                </p>
              </div>
            </div>
            <div style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Family Name</h5>
                <p class="card-text text-muted">
                  Here is the most important part, help us determine your
                  classification through your family name
                </p>
              </div>
            </div>
            <div style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Address</h5>
                <p class="card-text text-muted">
                  Address based on your civillian ID ( KTP )
                </p>
              </div>
            </div>
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
