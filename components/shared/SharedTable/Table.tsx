import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { FaEye, FaTrash, FaTruck } from "react-icons/fa";
import Style from "./Table.module.css";

import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { Jsondata } from "../../../src/utils/Jsondata";
interface Props {}

const Table: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const tableArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ margin: "25px", backgroundColor: "white" }}>
      <div className="p-4 rounded w-full">
        <div className="flex items-center justify-between pb-6">
          <div>
            <span className="text-xs text-gray-500 px-1">Show </span>
            <select
              name="dataTable_length"
              aria-controls="dataTable"
              className="custom-select custom-select-sm form-control form-control-sm border border-blue-600 text-gray-500">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-xs text-gray-500  px-1">Entries</span>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-xs text-gray-500">
              Search
            </label>
            <div className="flex bg-gray-50 items-center ml-3 p-1 rounded">
              <input
                className="bg-gray-50 outline-none   "
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
            <div className="inline-block min-w-full shadow  overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="h-16">
                    <th
                      className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        SL
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0  opacity-80">
                        Customer
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0  opacity-80">
                        Order Id
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0  opacity-80">
                        Date
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0  opacity-80">
                        Quantity
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-1 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Amount
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Order Status
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={`px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Payment
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                    <th
                      className={` px-3 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase `}>
                      <span className="flex  space-x-0 space-y-0 opacity-80">
                        Action
                        <FaLongArrowAltUp /> <FaLongArrowAltDown />
                      </span>
                    </th>
                  </tr>
                </thead>
                {/* -----------Plz Attention ,Table body/Row start here -------------- */}
                <tbody>
                  {Jsondata.tableDatas.map((tabledata, index) => (
                    <tr className="even:bg-gray-50 odd:bg-white">
                      <td className="px-3 py-3  text-center  text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-3 py-3 text-center text-sm">
                        <p className="text-gray-900 whitespace-no-wrap ">
                          {tabledata.Customer}
                        </p>
                      </td>
                      <td className="px-3 py-3 text-center   text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {tabledata.OrderId}
                        </p>
                      </td>
                      <td className="px-0 py-3 text-center text-sm">
                        <p className="text-gray-900 whitespace-wrap">
                          {tabledata.Date}
                        </p>
                      </td>
                      <td className="px-3 py-3 text-center text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {tabledata.Quantity}
                        </p>
                      </td>
                      <td className="px-3 py-3 text-center  text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${tabledata.Amount}
                        </p>
                      </td>

                      <td className="px-3 py-3  text-center text-sm ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                          <span
                            aria-hidden
                            className={`absolute inset-0 ${
                              tabledata.OrderStatus == "pending"
                                ? "bg-red-500"
                                : "bg-green-500"
                            }  rounded-full`}></span>
                          <span className="relative text-white text-xs capitalize break-words">
                            {tabledata.OrderStatus}
                          </span>
                        </span>
                      </td>

                      <td className="px-3 py-3 text-center text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className={`absolute inset-0  rounded-full
                            ${
                              tabledata.Payment == "success"
                                ? " bg-green-500 "
                                : "bg-red-500 "
                            }`}></span>
                          <span className="relative text-white text-xs capitalize">
                            {tabledata.Payment}
                          </span>
                        </span>
                      </td>

                      <td className="px-2 py-3 text-center text-sm">
                        <button>
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              style={{ boxShadow: "0 2px 6px #acb5f6" }}
                              className="h-8 w-8  inset-0 bg-blue-700   rounded  relative text-white flex justify-center items-center">
                              <FaEye />
                            </span>
                          </span>
                        </button>
                        <button>
                          <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              style={{ boxShadow: "0 2px 6px #fd9b96" }}
                              className="h-8 w-8  inset-0 bg-red-500   rounded  relative text-white flex justify-center items-center">
                              <FaTrash />
                            </span>
                          </span>
                        </button>
                        <span className="relative inline-block px-1 py-1 font-semibold text-green-900 leading-tight">
                          <button>
                            <span
                              style={{ boxShadow: "0 2px 6px #ffc473" }}
                              className="h-8 w-8  inset-0 bg-orange-400   rounded  relative text-white flex justify-center items-center">
                              <FaTruck />
                            </span>
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* -------------- */}
              <div className="px-5 py-5  border-t flex justify-between">
                <span className="text-xs xs:text-sm text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>

              {/* ----------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
