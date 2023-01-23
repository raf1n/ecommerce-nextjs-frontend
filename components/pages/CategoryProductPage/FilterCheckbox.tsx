import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {
  filter: {
    id: string;
    name: number;
    label: string;
  };
}

const FilterCheckbox: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { id, name, label } = props.filter;

  return (
    <li className="mb-5 flex gap-x-[14px] items-center">
      <input id={id} type="checkbox" name={`${name}`} />
      <label htmlFor={id} className="text-xs font-normal capitalize">
        {label}
      </label>
    </li>
  );
};

export default FilterCheckbox;
