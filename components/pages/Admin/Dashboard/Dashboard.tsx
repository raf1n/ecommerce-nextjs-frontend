import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/Table/Table";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <Table />
    </div>
  );
};

export default Dashboard;
