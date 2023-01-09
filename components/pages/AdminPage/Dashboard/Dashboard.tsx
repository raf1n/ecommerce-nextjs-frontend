import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Login from "../AdminLogin/AdminLogin";
import AllOrders from "./Orders/AllOrders/AllOrders";
import CompletedOrders from "./Orders/CompletedOrders/CompletedOrders";
import DeliveredOrders from "./Orders/DeliveredOrders/DeliveredOrders";
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
      <DeliveredOrders></DeliveredOrders>
      <CompletedOrders></CompletedOrders>
    </div>
  );
};

export default Dashboard;
