import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import ChangePasswordInput from "./ChangePasswordInput";

interface Props {}

const ChangePassword: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="item-body dashboard-wrapper w-full">
      <div className="changePasswordTab w-full">
        <div className="w-full flex lg:flex-row space-x-5 lg:items-center">
          <div className="lg:w-[397px] w-full mb-10">
            <ChangePasswordInput
              label="Old Password"
              id="old_password"
            ></ChangePasswordInput>
            <ChangePasswordInput
              label="Password"
              id="new_password"
            ></ChangePasswordInput>
            <ChangePasswordInput
              label="Re-Enter Password"
              id="re-enter_password"
            ></ChangePasswordInput>
            <div className="w-full mt-[30px] flex justify-start">
              <div className="sm:flex sm:space-x-[30px] items-center">
                <div className="w-[180px] h-[50px] lg:mb-0 mb-5">
                  <button type="button" className="yellow-btn ">
                    <span className="w-full text-sm font-semibold ">
                      Update Password
                    </span>
                  </button>
                </div>
                <button type="button">
                  <span className="w-full text-sm font-semibold text-qblack mb-5 sm:mb-0">
                    Cancel
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 sm:flex hidden justify-end">
            <div className="w-[310px] h-[320px] relative">
              <span>
                <img
                  alt="404"
                  sizes="100vw"
                  src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fwebsite-images%2Fchange_password_image-2022-11-17-11-26-36-3416.png&w=1920&q=75"
                  decoding="async"
                  data-nimg="fill"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
