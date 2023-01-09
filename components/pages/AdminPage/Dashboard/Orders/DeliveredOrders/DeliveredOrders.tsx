import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import Table from "../../../../../shared/SharedTable/Table";
import DashboardBreadcrumb from "../../../../MyProfile/DashboardBreadcrumb";

interface Props {}

const DeliveredOrders: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DashboardBreadcrumb
        headline="Pending Orders"
        slug="Pending Orders"
        link="/pending-orders"></DashboardBreadcrumb>

      <Table />
    </div>
  );
};

export default DeliveredOrders;
