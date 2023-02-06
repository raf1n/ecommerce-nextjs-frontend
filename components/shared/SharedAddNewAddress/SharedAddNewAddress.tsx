import React, { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Select from "react-select";

interface Props {
  selectedOption: any;
  setSelectedOption: any;
  setForm: any;
  form: any;
}

const SharedAddNewAddress: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  // const [form, setForm] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  const { selectedOption, setSelectedOption, setForm, form } = props;

  const style = {
    control: (base: any) => ({
      ...base,
      border: "1px solid rgb(239 239 239)",
      height: "50px",
      width: "100%",
      margin: "0",
      paddingLeft: "12px",
      paddingRight: "12px",
      fontSize: "13px",
      borderRadius: 0,
      // This line disable the blue border
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid rgb(239 239 239)",
      },
    }),
  };

  const countryOptions = [
    { value: "bangladesh", label: "Bangladesh" },
    { value: "india", label: "India" },
    { value: "qatar", label: "Qatar" },
  ];
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div data-aos="zoom-in" className="w-full aos-init aos-animate">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
          Add New Address
        </h1>
        <span
          onClick={() => setForm(false)}
          className="text-qyellow cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="form-area">
        <form>
          <div className="mb-6">
            <div className="w-full mb-5 sm:mb-0">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Name*
                </label>
                <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                  <input
                    placeholder="Name"
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 items-center mb-6">
            <div className="sm:w-1/2 w-full">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Email*
                </label>
                <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                  <input
                    placeholder="Email"
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Phone Number*
                </label>
                <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                  <input
                    placeholder="012 3 *******"
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
              Country*
            </h1>
            <div className="w-full h-[50px]  flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
              <div className="my-select-box w-full">
                <div className="my-select-box-section ">
                  <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={countryOptions}
                    styles={style}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 items-center mb-6">
            <div className="w-1/2">
              <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                State*
              </h1>
              <div className="w-full h-[50px] flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
                <div className="my-select-box w-full">
                  <div className="my-select-box-section ">
                    <Select
                      styles={style}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                City*
              </h1>
              <div className="w-full h-[50px] flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
                <div className="my-select-box w-full">
                  <div className="my-select-box-section ">
                    <Select
                      styles={style}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                    ></Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mb-6">
            <div className="w-full">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                  Address
                </label>
                <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                  <input
                    placeholder="Your Address here"
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-5 items-center ">
            <div className="flex space-x-2 items-center mb-10">
              <div>
                <input type="checkbox" name="home" id="home" />
              </div>
              <label
                htmlFor="home"
                className="text-qblack text-[15px] select-none capitalize"
              >
                home
              </label>
            </div>
            <div className="flex space-x-2 items-center mb-10">
              <div>
                <input type="checkbox" name="office" id="office" />
              </div>
              <label
                htmlFor="office"
                className="text-qblack text-[15px] select-none"
              >
                Office
              </label>
            </div>
          </div>
          <button type="button" className="w-full h-[50px]">
            <div className="yellow-btn rounded">
              <span className="text-sm text-qblack">Save Address</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharedAddNewAddress;
