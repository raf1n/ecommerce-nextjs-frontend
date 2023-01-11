import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { FaBars } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
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
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  responsiveOpen: boolean;
  setResponsiveOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<Props> = (props) => {
  const { open, setOpen, responsiveOpen, setResponsiveOpen } = props;
  const states = useSelector(() => controller.states);
  const [show, setShow] = useState(false);

  return (
    <div className="flex-1  overflow-y-auto relative">
      <div className="flex flex-row justify-between h-[115px] relative bg-[#6777ef]">
        <div className="relative">
          <FaBars
            className={`absolute cursor-pointer hidden lg:block top-9 w-7 rounded-full duration-300 text-white`}
            onClick={() => {
              setOpen(!open);
              setResponsiveOpen(false);
            }}
          />

          <FaBars
            className={`left-[270px] absolute cursor-pointer block lg:hidden  top-6 w-7 rounded-full duration-300 text-white`}
            onClick={() => {
              setResponsiveOpen(!responsiveOpen);
              setOpen(true);
            }}
          />
        </div>
        <div className="flex items-center px-8 text-white  ">
          <button className="flex">
            <IoIosHome /> <span className="text-sm pl-1">Visit Website</span>
          </button>
          <button
            onClick={() => {
              setShow(!show);
            }}>
            <div className={`flex text-white  pl-6`}>
              <img
                src={`https://api.websolutionus.com/shopo/uploads/website-images/ibrahim-khalil-2022-01-30-02-48-50-5743.jpg`}
                alt="pic"
                className={`${styles["img-style"]}`}
              />
              <span className="text-sm  pt-1 pl-2">Admin</span>
              <span className="text-xl  pt-1">
                <MdArrowDropDown />
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className={` ${show ? "block" : "hidden"} `}>
        <div className={styles["dropdown-menu"]}>
          <div>
            <a href="/profile" className="flex">
              <span className="pt-1 pr-2">
                <HiOutlineUser />
              </span>
              Profile
            </a>

            <div className="border-t"></div>
            <a href="/logout" className="flex">
              <span className="pt-1 pr-2">
                <MdOutlineLogout />
              </span>
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* <Login /> */}
      <AllOrders></AllOrders>
      {/* <PendingOrders></PendingOrders>
      <ProgressOrders></ProgressOrders>
      <DeliveredOrders></DeliveredOrders>
      <CompletedOrders></CompletedOrders>
      <DeclinedOrders></DeclinedOrders>
      <CashOnDelivery></CashOnDelivery> */}
    </div>
  );
};

export default Dashboard;
