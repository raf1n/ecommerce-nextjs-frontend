import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { FaBars } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import Login from "../AdminLogin/AdminLogin";
import AllOrders from "./Orders/AllOrders/AllOrders";
import CashOnDelivery from "./Orders/CashOnDelivery/CashOnDelivery";
import CompletedOrders from "./Orders/CompletedOrders/CompletedOrders";
import DeclinedOrders from "./Orders/DeclinedOrders/DeclinedOrders";
import DeliveredOrders from "./Orders/DeliveredOrders/DeliveredOrders";
import PendingOrders from "./Orders/PendingOrders/PendingOrders";
import ProgressOrders from "./Orders/ProgressOrders/ProgressOrders";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  responsiveOpen: boolean;
  setResponsiveOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<Props> = (props) => {
  const { open, setOpen, responsiveOpen, setResponsiveOpen } = props;
  const states = useSelector(() => controller.states);

  return (
    <div className="flex-1  overflow-y-auto relative">
      <div
        className="flex flex-row justify-between h-20 relative"
        style={{ backgroundColor: "#6777ef" }}>
        <div className="relative">
          <FaBars
            className={`absolute cursor-pointer hidden lg:block top-6 w-7 rounded-full duration-300 text-white`}
            onClick={() => {
              setOpen(!open);
              setResponsiveOpen(false);
            }}
          />

          <FaBars
            className={`left-[270px] absolute cursor-pointer block lg:hidden top-6 w-7 rounded-full duration-300 text-white`}
            onClick={() => {
              setResponsiveOpen(!responsiveOpen);
              setOpen(true);
            }}
          />
        </div>
        <div className="flex items-center px-8 text-white ">
          <button>Visit Website</button>
          <button>
            <div className="flex text-white">
              Admin
              <MdArrowDropDown />
            </div>
          </button>
        </div>
      </div>

      <div className={styles["dropdown-menu"]}>
        <div className="">
          <a href="/profile">Profile</a>
          <div className="border-t"></div>
          <a href="/logout">Logout</a>
        </div>
      </div>

      {/*   <Login />
      <AllOrders></AllOrders>
      <PendingOrders></PendingOrders>
     <ProgressOrders></ProgressOrders>
      <DeliveredOrders></DeliveredOrders>
      <CompletedOrders></CompletedOrders>
      <DeclinedOrders></DeclinedOrders>
      <CashOnDelivery></CashOnDelivery> */}
    </div>
  );
};

export default Dashboard;
