import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Login from "../AdminLogin/AdminLogin";
import AllOrders from "./Orders/AllOrders/AllOrders";
import PendingOrders from "./Orders/PendingOrders/PendingOrders";
import ProgressOrders from "./Orders/ProgressOrders/ProgressOrders";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <Login />
      <AllOrders></AllOrders>
      <PendingOrders></PendingOrders>
      <ProgressOrders></ProgressOrders>
    </div>
  );
};

export default Dashboard;
