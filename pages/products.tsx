import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CategoryPage from "../components/pages/CategoryProductPage/CategoryPage";

import { controller } from "../src/state/StateController";

interface Props {}

const products: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const router = useRouter();

  const { search, category } = router.query;

  if(search) {
    controller.setSearchString(search as string);
  } 

  // if (category && states.categories) {
  //   const queryCat = states.categories.find(cat => cat.cat_name === category);
  //   controller.setSearchCategory(queryCat?.cat_slug as string, true);
  // }

  return <CategoryPage />;
};

export default products;
