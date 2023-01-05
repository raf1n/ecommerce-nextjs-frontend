import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/utils/StateController";
import { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { Jsondata } from "../../../../src/utils/Jsondata";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={` ${
        open ? "w-[250px]" : "w-[65px] "
      } bg-white min-h-screen relative duration-500`}
    >
      <FaBars
        className={`absolute cursor-pointer -right-12 top-6 w-7 rounded-full duration-300`}
        onClick={() => setOpen(!open)}
      />

      <div className="text-center h-[60px] leading-[60px]">
        <a href="/" className="font-bold text-sm tracking-widest">
          {open ? "SHOPO" : "SP"}
        </a>
      </div>

      <ul className="text-[#78828a]">
        {Jsondata.menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${menuOpen ? "h-auto" : "h-[50px]" } px-5 cursor-pointer text-sm`}
          >
            {/* <img src={`./src/assets/${menu.icon}.png`} /> */}
            <div  className="w-full flex items-center gap-x-4">
              <div>
                <menu.icon className="w-4 h-4 mr-2" />
              </div>
              <span
                className={`${
                  open ? null : "hidden"
                } mt-[3px] origin-left duration-300 flex-1 flex items-center justify-between`}
              >
                {menu.title}
                {
                  menu.nestedRoutes ? <FaArrowRight className={`${menuOpen ? "rotate-90" : ""} duration-300` } /> : null
                }
              </span>
            </div>
            <div className={`${menuOpen ? "h-auto" : "h-0"} overflow-hidden duration-300`}>
              <ul>
              {
                menu.nestedRoutes && menu.nestedRoutes.map((menu, idx) => (
                  <li>
                    <span>{menu.title}</span>
                  </li>
                  ))
                }
                </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
