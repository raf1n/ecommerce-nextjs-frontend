import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";

interface Props {
    slug: string;
    link: string;
}

const DashboardBreadcrumb: React.FC<Props> = (props) => {
    const states = useSelector(() => controller.states);

    return (
        <div className="font-normal text-[13px] text-qblack mb-[23px] print:hidden">
            <span>
                <a href="/">
                    <span className="mx-1 capitalize">Dashboard</span>
                </a>
                <span className="separator">/</span>
            </span>
            <span>
                <a href={props.link}>
                    <span className="mx-1 capitalize">{props.slug}</span>
                </a>
                {/* <span className="separator">/</span> */}
            </span>
        </div>
    );
};

export default DashboardBreadcrumb;
