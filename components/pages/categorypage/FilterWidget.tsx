//@ts-nocheck

import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputRange from "react-input-range";
import { controller } from "../../../src/state/StateController";
import "react-input-range/lib/css/index.css";
import FilterHeader from "./FilterHeader";
import FilterCheckbox from "./FilterCheckbox";
import { Jsondata } from './../../../src/utils/Jsondata';

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
        <FilterHeader title="Product categories" />

        <ul>
          {Jsondata.checkCategoryFilterData.map((filter, i) => (
            <FilterCheckbox key={i} filter={filter} />
          ))}
        </ul>
      </div>

      <div className="pb-10 border-b border-gray-200 mt-10">
        <FilterHeader title="Price Range" />
        <div className="mb-5">
          <InputRange
            maxValue={250000}
            minValue={10}
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
          />
        </div>
        <p className="text-xs text-qblack font-normal">
          Price: ${value.min} - ${value.max}
        </p>
      </div>

      <div className="pb-10 border-b border-gray-200 mt-10">
        <FilterHeader title="Brands" />

        <ul>
          {Jsondata.checkBrandFilterData.map((filter, i) => (
            <FilterCheckbox key={i}  filter={filter} />
          ))}
        </ul>
      </div>

      <div className="pb-10 mt-10">
        <FilterHeader title="Red" />

      </div>
    </div>
  );
};

export default FilterWidget;
