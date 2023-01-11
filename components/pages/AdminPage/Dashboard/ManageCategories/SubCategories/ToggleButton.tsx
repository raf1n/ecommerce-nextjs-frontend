import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

interface Props {
  label: string;
  status: string;
}

const ToggleButton: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [toggle, setToggle] = useState(true);

  return (
    <label
      htmlFor={props.label}
      className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800 rounded"
    >
      <input
        id={props.label}
        type="checkbox"
        checked={props.status === "active" ? !toggle : toggle}
        onChange={() => {
          if (props.status === "active") {
            setToggle(!toggle);
          } else {
            setToggle(!toggle);
          }
        }}
        className="hidden peer"
      />
      <span className="px-2 py-2 bg-green-600 peer-checked:bg-gray-300 rounded">
        Active
      </span>
      <span className="px-2 py-2 bg-gray-300 peer-checked:bg-red-500 rounded">
        Inactive
      </span>
    </label>
  );
};

export default ToggleButton;
