import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import Table from "../../../shared/SharedTable/Table";
import MyProfile from "../../MyProfile/MyProfile";
import Login from "../Login/Login";
import AdminDetailsSummary from "./AdminDetailsSummary/AdminDetailsSummary";
import ToggleButton from "./ToggleButton";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const tableHeadersOne = [
    "SL",
    "CUSTOMER",
    "ORDER ID",
    "DATE",
    "QUANTITY",
    "AMOUNT",
    "ORDER STATUS",
    "PAYMENT",
    "ACTION",
  ];

  const actionsOne = {
    isDeletable: true,
    isShipping: true,
    isViewable: true,
  };

  const tableHeadersTwo = ["SL", "Name", "Image", "Icon", "Status", "Action"];

  const actionsTwo = {
    isEditable: true,
    isDeletable: true,
  };

  const { testDynamicTableDataOne, testDynamicTableDataTwo } = Jsondata;

  return (
    <div className="flex-1 overflow-y-scroll">
      <div className="flex w-full justify-center">
        <ToggleButton />
      </div>
      <MyProfile />
      <Table
        tableHeaders={tableHeadersOne}
        actions={actionsOne}
        testDynamicTableData={testDynamicTableDataOne}
      />
      <Table
        tableHeaders={tableHeadersTwo}
        actions={actionsTwo}
        testDynamicTableData={testDynamicTableDataTwo}
      />
      <Login />
      <AdminDetailsSummary />
    </div>
  );
};

export default Dashboard;
