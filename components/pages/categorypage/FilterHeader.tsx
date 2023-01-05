import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../src/utils/StateController";

interface Props {
  title: string
}

const FilterHeader: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="mb-[30px]">
      <h1 className="text-black text-base font-medium">{props.title}</h1>
    </div>
  );
};

export default FilterHeader;
