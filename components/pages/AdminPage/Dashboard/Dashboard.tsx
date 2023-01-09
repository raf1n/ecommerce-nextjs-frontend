import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../MyProfile/DashboardBreadcrumb";

import Login from "../AdminLogin/AdminLogin";
import AllOrders from "./AllOrders/AllOrders";
import PendingOrders from "./PendingOrders/PendingOrders";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <Login />
      <AllOrders></AllOrders>
      <PendingOrders></PendingOrders>
    </div>
  );
};

export default Dashboard;
