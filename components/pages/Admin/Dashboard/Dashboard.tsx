import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Styles from "./Dashboard.module.css";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div className={`${Styles["main-content"]}`}></div>;
};

export default Dashboard;
