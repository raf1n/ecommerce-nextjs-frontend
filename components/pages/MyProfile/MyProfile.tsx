import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import DashboardBreadcrumb from "./DashboardBreadcrumb";
import styles from "./Myprofile.module.css";

interface Props {
  // slug: string;
  // link: string;
  // title: string;
}

const MyProfile: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <div className={`${styles["main-content"]}`}>
        <section className={`${styles["section"]}`}>
          <div className={`${styles["section-header"]}  justify-between`}>
            <h1 className={`${styles["title"]} `}>My Profile</h1>
            <div className={`${styles["section-header-breadcrumb"]} `}>
              <DashboardBreadcrumb
                slug="My Profile"
                link="/myprofile"
              ></DashboardBreadcrumb>
            </div>
          </div>
          <div className="section-body ">
            <div className={`${styles["row"]} mt-4`}>
              <div>
                <div
                  className={`${styles["card"]} ${styles["profile-widget"]}`}
                >
                  <div className={`${styles["profile-widget-header"]} `}>
                    <img
                      className={`rounded-full ml-4   ${styles["profile-widget-picture"]} `}
                      src="https://api.websolutionus.com/shopo/uploads/website-images/ibrahim-khalil-2022-01-30-02-48-50-5743.jpg"
                      alt=""
                    />
                  </div>
                  <div className={`${styles["profile-widget-description"]}`}>
                    <form action="">
                      <div className={`${styles["row"]} `}>
                        <div className="form-group grid text-sm">
                          <label
                            className="text-sm text-qgray font-semibold"
                            htmlFor=""
                          >
                            New Image
                          </label>
                          <input
                            className="mt-4"
                            type="file"
                            name="image"
                            id=""
                          />
                        </div>

                        <div className="mt-4">
                          <div className="my-4 ">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor=""
                            >
                              Name
                            </label>
                            <span className="text-red-500 ml-2">*</span>
                          </div>
                          <input
                            className="w-full p-2 border border-cyan-200 rounded-md text-sm"
                            type="text"
                            value="Admin"
                            name="name"
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor=""
                            >
                              Email
                            </label>
                            <span className="text-red-500 ml-2">*</span>
                          </div>
                          <input
                            className="w-full p-2 border border-cyan-200 rounded-md text-sm"
                            type="email"
                            value="admin@gmail.com"
                            name="name"
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor=""
                            >
                              Password
                            </label>
                            {/* <span className='text-red-500 ml-2'>*</span> */}
                          </div>
                          <input
                            className="w-full p-2 border border-cyan-200 rounded-md text-sm"
                            type="password"
                            name=""
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <div className="my-4">
                            <label
                              className="text-qgray font-semibold mt-4	text-sm"
                              htmlFor=""
                            >
                              Confirm Password
                            </label>
                            {/* <span className='text-red-500 ml-2'>*</span> */}
                          </div>
                          <input
                            className="w-full p-2 border border-cyan-200 rounded-md text-sm"
                            type="password"
                            name=""
                            id=""
                          />
                        </div>
                        <div className="mt-4">
                          <button className="bg-blue-700 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
