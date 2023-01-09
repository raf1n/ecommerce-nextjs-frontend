import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const ProfilePage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
