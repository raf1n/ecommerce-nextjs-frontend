import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Link from "next/link";

interface Props {
  slug: string;
  link: string;
}

const Breadcrumb: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="font-normal text-[13px] text-qblack mb-[23px] print:hidden">
      <span>
        <a href="/">
          <span className="mx-1 capitalize">home</span>
        </a>
        <span className="separator">/</span>
      </span>
      <span>
        <Link href={props.link}>
          <span className="mx-1 capitalize">{props.slug}</span>
        </Link>
        {/* <span className="separator">/</span> */}
      </span>
    </div>
  );
};

export default Breadcrumb;
