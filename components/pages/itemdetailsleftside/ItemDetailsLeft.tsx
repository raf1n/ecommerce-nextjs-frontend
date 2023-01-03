import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const ItemDetailsLeft: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <div className="w-full md:h-[600px] h-[350px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3 relative"></div>
    </div>
  );
};

export default ItemDetailsLeft;
