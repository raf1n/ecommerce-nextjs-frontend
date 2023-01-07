import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

interface Props {}

const AdminPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

    return <div className="flex h-screen overflow-y-hidden">
      <Sidebar />
      <Dashboard />
    </div>
};

export default AdminPage;
