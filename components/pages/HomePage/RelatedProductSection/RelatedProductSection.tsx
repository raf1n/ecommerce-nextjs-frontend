import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";

interface Props { }

const RelatedProductSection: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return <div></div>;
};

export default RelatedProductSection;
