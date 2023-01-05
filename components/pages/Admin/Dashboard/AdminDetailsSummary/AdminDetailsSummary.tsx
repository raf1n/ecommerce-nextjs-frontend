import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../src/state/StateController";

interface Props {}

const AdminDetailsSummary: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div className="section">AdminDetailsSummary</div>;
};

export default AdminDetailsSummary;
