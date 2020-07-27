import React from "react";
import { useSelector } from "react-redux";

import EditForm from "../components/EditForm";
import AddForm from "../components/AddForm";

export default function InputIndInviduals() {
  const individual = useSelector((state) => state.individualReducer.individual);
  return <div>{individual ? <EditForm /> : <AddForm />}</div>;
}
