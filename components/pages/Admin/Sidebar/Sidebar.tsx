import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/utils/StateController";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { Jsondata } from "../../../../src/utils/Jsondata";
import MenuItem from "./MenuItem";
import styles from "./Scrollhost.module.css";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(0);

  return (
    <div
      className={` ${
        open ? "w-[250px]" : "w-[65px] "
      } bg-white relative duration-500`}
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
      <ul
        className={`text-[#78828a]`}
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
};

export default Sidebar;
