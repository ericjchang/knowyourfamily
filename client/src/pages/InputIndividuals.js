import React from "react";
import AddForm from "../components/AddForm";

export default function InputIndividuals() {
  return (
    <div>
      <AddForm
        center={{ lat: 18.5204, lng: 73.8567 }}
        height="300px"
        zoom={15}
      />
    </div>
  );
}
