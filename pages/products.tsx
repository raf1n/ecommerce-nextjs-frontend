import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CategoryPage from "../components/pages/CategoryProductPage/CategoryPage";

import { controller } from "../src/state/StateController";

interface Props {}

const products: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  const router = useRouter();

  const { search, category, highlight, sub_category } = router.query;

  if (search) {
    controller.setSearchString(search as string);
  }

  const highlightArr = [
    {
      highlight: "popular_category",
      query: "isPopular"
    },
    {
      highlight: "top_product",
      query: "isTopProduct"
    },
    {
      highlight: "best_product",
      query: "isBestProduct"
    },
    {
      highlight: "new_arrival",
      query: "isNewArrival"
    },
    {
      highlight: "featured_product",
      query: "isFeatured"
    },
  ];

  if (highlight) {
    const highQuery = highlightArr.find((high) => high.highlight === highlight);
    console.log(highlight, highQuery);
    controller.setSearchHighlight(highQuery?.query as string);
  }

  if (sub_category && states.subCategories) {
    const querySubCat = states.subCategories.find((subCat) => subCat.subcat_name === sub_category);
    controller.setSearchSubCategory(querySubCat?.slug as string);
  }



  return <CategoryPage />;
};

export default products;
