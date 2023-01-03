import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import FaqHeader from "./FaqHeader";
import FaqRight from "./FaqRight";

interface Props {}

const FAQ: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <FaqHeader />
      <div className="w-full mb-10">
        <div className="container-x mx-auto w-full lg:flex lg:gap-x-[30px]">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            {/* <ItemDetailsLeft></ItemDetailsLeft> */}
          </div>
          <div className="flex-1">
            <FaqRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
