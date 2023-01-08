import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/SharedTable/Table";
import AdminDetailsSummary from "./AdminDetailsSummary/AdminDetailsSummary";

interface Props { }

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <AdminDetailsSummary />
      <Table />
    </div>
  );
};

export default Dashboard;
