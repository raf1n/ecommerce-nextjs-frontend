import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../../../src/state/StateController";
import DashboardBreadcrumb from "../../../../MyProfile/DashboardBreadcrumb";
import styles from "./PopularCategoryAdmin.module.css";

interface Props {}

const PopularCategoryAdmin: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full mt-10">
      <div className="m-10">
        <div className={`${styles["section-header"]}  justify-between`}>
          <h1 className={`${styles["title"]} `}>Popular Category</h1>
          <div className={`${styles["section-header-breadcrumb"]} `}>
            <DashboardBreadcrumb
              slug="Popular Category"
              link="/Popular Category"
            ></DashboardBreadcrumb>
          </div>
        </div>
        <div className={`${styles["card"]}`}>
          <div className={`${styles["card-body"]}`}>
            <div className="p-5">
              <label htmlFor="">Existing Banner</label>
              <div>
                <img
                  className={`${styles["sidebarImg"]}`}
                  src="https://api.websolutionus.com/shopo/uploads/website-images/popular-cat-banner-2022-09-20-01-15-44-7577.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="p-5">
              <label htmlFor="">Popular Category Sidebar Banner</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategoryAdmin;
