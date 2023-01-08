import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
<<<<<<< HEAD:components/pages/CategoryPage/FilterHeader.tsx
=======

>>>>>>> 84b52ee5dcc9f9357102f1616bd8c707387d3f86:components/pages/CategoryProductPage/FilterHeader.tsx

interface Props {
  title: string;
}

const FilterHeader: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="mb-[30px]">
      <h1 className="text-black text-base font-medium">{props.title}</h1>
    </div>
  );
};

export default FilterHeader;
