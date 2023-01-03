import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {}

const Breadcumb: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="breadcrumb-wrapper w-full ">
      <div className="container-x mx-auto">
        <div>
          <div className="breadcrumb-wrapper font-400 text-[13px] text-qblack mb-[23px] print:hidden">
            <span>
              <a href="/">
                <span className="mx-1 capitalize">home</span>
              </a>
              <span className="sperator">/</span>
            </span>
            <span>
              <a href="/single-product?slug=xbox-wireless-game-controller-">
                <span className="mx-1 capitalize">
                  xbox-wireless-game-controller-
                </span>
              </a>
              <span className="sperator">/</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
