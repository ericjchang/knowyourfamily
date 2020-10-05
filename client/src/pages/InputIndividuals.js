import React, { useEffect, useState } from "react";
import AddForm from "../components/AddForm";

export default function InputIndividuals() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url('https://i.imgur.com/BNulOgL.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        justifyContent: "center",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {location.lat && (
        <AddForm
          center={{ lat: location.lat, lng: location.lng }}
          height="100vh"
          zoom={15}
        />
      )}
    </div>
  );
}
