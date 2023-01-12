import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";

interface Props {}
const ToggleButton: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [active, setActive] = useState(true);
  return (
    <div className="w-[80px] overflow-hidden border h-10 relative ">
      <div
        onClick={() => setActive(!active)}
        className={`grid grid-cols-[60px,20px,60px] relative transition-all delay-100 duration-300 ease-in  ${
          active ? "left-[0px]" : "left-[-60px] "
        }`}
      >
        <span className="bg-green-500  text-white flex items-center justify-center ">
          Active
        </span>
        <span className="border border-3 border-blue-500 inline-block w-[20px] h-10 bg-white "></span>
        <span className="bg-red-500  text-white flex items-center justify-center">
          Inactive
        </span>
      </div>
    </div>
  );
};
export default ToggleButton;
