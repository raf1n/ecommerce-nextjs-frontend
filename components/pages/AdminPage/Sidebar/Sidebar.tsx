import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { Jsondata } from "../../../../src/utils/Jsondata";
import MenuItem from "./MenuItem";
import styles from "./Scrollbar.module.css";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(0);
  const [responsiveOpen, setResponsiveOpen] = useState(false);

  return (
    <div
      className={` ${open ? "w-[250px]" : "w-[65px] "} ${
        responsiveOpen ? "left-0" : "left-[-250px]"
      } h-screen fixed z-50 lg:left-0 lg:relative bg-white duration-500`}
    >
      <FaBars
        className={`absolute cursor-pointer hidden lg:block -right-12 top-6 w-7 rounded-full duration-300`}
        onClick={() => {
          setOpen(!open);
          setResponsiveOpen(false);
        }}
      />

      <FaBars
        className={`left-[270px] absolute cursor-pointer block lg:hidden top-6 w-7 rounded-full duration-300`}
        onClick={() => {
          setResponsiveOpen(!responsiveOpen);
          setOpen(true);
        }}
      />

      <div className="text-center h-[60px] leading-[60px]">
        <a href="/" className="font-bold text-sm tracking-widest">
          {open ? "SHOPO" : "SP"}
        </a>
      </div>
      <ul
        className={`${styles["scrollbar"]} h-[calc(100vh-60px)] text-[#78828a] overflow-y-scroll overflow-x-hidden`}
      >
        {Jsondata.menus.map((menu, index) => (
          <MenuItem
            key={index}
            menu={menu}
            open={open}
            idx={index}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </ul>
    </div>
  );

  return <div>Sidebar</div>;
};

export default Sidebar;
