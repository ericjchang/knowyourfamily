import React, { useEffect } from "react";

import LandingPage from "../components/dashboard/LandingPage";
import Testimonies from "../components/dashboard/Testimonies";
import WhatDoWeOffer from "../components/dashboard/WhatDoWeOffer";
import ApplyYourData from "../components/dashboard/ApplyYourData";
import GetInTouch from "../components/dashboard/GetInTouch";

export default () => {
  /* useEffect(()=> {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1")
      window.location.reload();
    }
  }, []) */
  return (
    <div>
      <LandingPage />
      <Testimonies />
      <WhatDoWeOffer />
      <ApplyYourData />
      <GetInTouch />
    </div>
  );
};
