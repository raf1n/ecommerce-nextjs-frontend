import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const ContactPage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
        <div className="container-x mx-auto">
          <div className="mb-5">
            <div>
              <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden">
                <span>
                  <a href="/">
                    <span className="mx-1 capitalize">home</span>
                  </a>
                  <span className="sperator">/</span>
                </span>
                <span>
                  <a href="/contact">
                    <span className="mx-1 capitalize">contact</span>
                  </a>
                  <span className="sperator">/</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-qblack">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
