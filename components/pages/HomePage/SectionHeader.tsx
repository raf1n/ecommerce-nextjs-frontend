import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  title: string;
  link: string;
}

const SectionHeader: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const { title, link } = props;

  return (
    <div className="mb-5 w-full">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-3xl text-xl font-semibold leading-none">
          {title}
        </h1>
        <a href={link} className="flex items-center gap-2" title="view more">
          <span className="text-base font-semibold ">View More</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default SectionHeader;
