import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../MyProfile/DashboardBreadcrumb";

interface Props {}

const AllOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="All Orders"
        slug="All Orders"
        link="/all-orders"></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default AllOrders;
