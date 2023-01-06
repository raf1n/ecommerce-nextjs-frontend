import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Table from "../../../shared/Table/Table";
import MyProfile from "../../MyProfile/MyProfile";
import Login from "../Login/Login";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1 overflow-y-scroll">
      <MyProfile />
      <Table />
      <Login></Login>
    </div>
  );
};

export default Dashboard;
