import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../MyProfile/DashboardBreadcrumb";

import Login from "../AdminLogin/AdminLogin";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <DashboardBreadcrumb
        headline="All Orders"
        slug="My Profile"
        link="/myprofile"></DashboardBreadcrumb>

      <Table />
      <Login />
    </div>
  );
};

export default Dashboard;
