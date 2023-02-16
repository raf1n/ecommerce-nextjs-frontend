import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/state/StateController";
import Select, { components, MenuProps } from "react-select";
import { useState } from "react";
import { EcommerceApi } from "../../../../src/API/EcommerceApi";
import { IUser } from "../../../../interfaces/models";

interface Props {
  user: IUser | null;
}

const PersonalInfo: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  // console.log(props.user);
  // const [selectedOption, setSelectedOption] = useState(null);

  // const style = {
  //   control: (base: any) => ({
  //     ...base,
  //     border: "1px solid rgb(239 239 239)",
  //     height: "50px",
  //     width: "100%",
  //     margin: "0",
  //     paddingLeft: "12px",
  //     paddingRight: "12px",
  //     fontSize: "13px",
  //     borderRadius: 0,
  //     // This line disable the blue border
  //     boxShadow: "none",
  //     cursor: "pointer",
  //     "&:hover": {
  //       border: "1px solid rgb(239 239 239)",
  //     },
  //   }),
  // };

  // const countryOptions = [
  //   { value: "bangladesh", label: "Bangladesh" },
  //   { value: "india", label: "India" },
  //   { value: "qatar", label: "Qatar" },
  // ];

  // const handleChange = (selectedOption: any) => {
  //   setSelectedOption(selectedOption);
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = "rafinc10@gmail.com";

    const address = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      country: e.target.country.value,
      state: e.target.state.value,
      city: e.target.city.value,
      address: e.target.address.value,
    };

    const { res, err } = await EcommerceApi.updateUserInfo(email, address);
    if (res) {
      e.target.reset();
      controller.setUser(res);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row space-x-8">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <div className="w-full mb-5 sm:mb-0">
              <div className="w-full h-full">
                <label className="capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Name
                </label>
                <div className="border  w-full h-full overflow-hidden relative border-qgrayBorder">
                  <input
                    defaultValue={props.user?.fullName}
                    name="name"
                    placeholder="Name"
                    type="text"
                    maxLength={50}
                    className="placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-2.5 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <div className="w-full h-full">
                <label className="capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Email
                  <span className="text-yellow-500 text-xs ml-1">
                    (Read Only)
                  </span>
                </label>
                <input
                  readOnly
                  name="email"
                  value={props.user?.email}
                  className="border border-yellow-500 px-6 w-full h-[50px] bg-yellow-50 text-dark-gray flex items-center cursor-not-allowed rounded"
                />
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <div className="w-full h-full">
                <label className="capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Phone Number
                </label>
                <div className="border  w-full h-full overflow-hidden relative border-qgrayBorder">
                  <input
                    name="phone"
                    placeholder="012 3 *******"
                    type="tel"
                    maxLength={50}
                    className="placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="capitalize block mb-2 text-qgray text-[13px] font-normal">
              Country*
            </h1>
            {/* <Select
              value={selectedOption}
              onChange={handleChange}
              options={countryOptions}
              styles={style}
              components={{
                // Menu,
                IndicatorSeparator: () => null,
              }}
            /> */}
            <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
              <input
                name="country"
                placeholder="country"
                type="text"
                maxLength={50}
                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
              />
            </div>
          </div>
          <div className="flex space-x-5 items-center mb-6">
            <div className="w-1/2">
              <h1 className="capitalize block mb-2 text-qgray text-[13px] font-normal">
                State*
              </h1>
              {/* <Select
                styles={style}
                components={{
                  IndicatorSeparator: () => null,
                }}
              /> */}
              <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                <input
                  name="state"
                  placeholder="State"
                  type="text"
                  maxLength={50}
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="capitalize block mb-2 text-qgray text-[13px] font-normal">
                City*
              </h1>
              {/* <Select
                styles={style}
                components={{
                  IndicatorSeparator: () => null,
                }}
              /> */}
              <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                <input
                  name="city"
                  placeholder="City"
                  type="text"
                  maxLength={50}
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="w-full">
              <div className="w-full h-full">
                <label className="capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Address
                </label>
                <div className="border  w-full h-full overflow-hidden relative border-qgrayBorder">
                  <input
                    name="address"
                    placeholder="Your Address here"
                    type="text"
                    maxLength={200}
                    className="placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-4 items-center">
            <button type="button" className="text-sm text-qred font-semibold">
              Cancel
            </button>
            <button
              type="submit"
              className="w-[164px] h-[50px] bg-qyellow rounded text-qblack text-sm"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <div className="w-full mb-9">
          <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
            Update Profile
            <span className="ml-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                  fill="#374557"
                  fill-opacity="0.6"
                ></path>
              </svg>
            </span>
          </h1>
          <p className="text-sm text-qgraytwo mb-5 ">
            Profile of at least Size
            <span className="ml-1 text-qblack">300x300</span>
          </p>
          <div className="flex xl:justify-center justify-start">
            <div className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden relative">
              <img
                src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fwebsite-images%2Fdefault-avatar-2022-11-18-12-03-30-6530.webp&w=1920&q=75"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
