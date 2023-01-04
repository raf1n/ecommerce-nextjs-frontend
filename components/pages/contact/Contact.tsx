import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import ContactInformation from "../contact/ContactInformation";
import GetInTouch from "./getintouch/GetInTouch";

interface Props { }

const Contact: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen  pt-0 pb-0">
      <div className="container-x mx-auto">
        <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
          <div><ContactInformation></ContactInformation></div>
          <GetInTouch></GetInTouch>
        </div>
      </div>
    </div>
  );
};

export default Contact;
