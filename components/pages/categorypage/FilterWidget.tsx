import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputRange from "react-input-range";
import { controller } from "../../../src/state/StateController";

const checkCategoryFilterData = [
  {
    id: "electronics",
    name: 1,
    label: "Electronics",
  },
  {
    id: "game",
    name: 2,
    label: "game",
  },
  {
    id: "mobile",
    name: 3,
    label: "mobile",
  },
  {
    id: "lifestyle",
    name: 4,
    label: "lifestyle",
  },
  {
    id: "babiesAndToys",
    name: 5,
    label: "Babies & Toys",
  },
  {
    id: "bike",
    name: 6,
    label: "bike",
  },
  {
    id: "mensFashion",
    name: 7,
    label: "Men's Fashion",
  },
  {
    id: "womensFashion",
    name: 8,
    label: "Women's Fashion",
  },
  {
    id: "television",
    name: 9,
    label: "television",
  },
  {
    id: "accessories",
    name: 10,
    label: "accessories",
  },
  {
    id: "johnDoe",
    name: 11,
    label: "John Doe",
  },
];

interface Props {}

const FilterWidget: React.FC<Props> = (props) => {
  const [value, setValue] = useState({
    min: 10,
    max: 250000,
  });
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full bg-white px-[30px] pt-[40px] mb-[30px] hidden lg:block">
      <div className="pb-10 border-b border-gray-200">
        <div className="mb-[30px]">
          <h1 className="text-black text-base font-medium">
            Product categories
          </h1>
        </div>

        <div>
          <ul>
            {checkCategoryFilterData.map((filter) => (
              <li className="mb-5 flex gap-x-[14px] items-center">
                <input id={filter.id} type="checkbox" name={`${filter.name}`} />
                <label
                  htmlFor={filter.id}
                  className="text-xs font-normal capitalize"
                >
                  {filter.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <InputRange
          maxValue={250000}
          minValue={10}
          value={value}
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};

export default FilterWidget;
