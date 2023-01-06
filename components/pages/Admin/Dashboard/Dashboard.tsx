import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import MyProfile from "../../MyProfile/MyProfile";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div className="flex-1 overflow-y-scroll">
    {/* <div className="h-[2500px]">
      dashboard
    </div> */}
    <MyProfile />
  </div>;
};

export default Dashboard;
