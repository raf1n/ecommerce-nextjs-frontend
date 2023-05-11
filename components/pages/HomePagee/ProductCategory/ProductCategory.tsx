import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import styles from "./ProductCategory.module.css";
interface Props {}

const ProductCategory: React.FC<Props> = (props) => {
  const categoriesData = useSelector(() => controller.states.categories);

  return (
    <div className="category-section-wrapper w-full hidden md:block">
      <div className="container-x mx-auto pb-[50px]">
        <div>
          <div className="w-full grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-[30px]">
            {categoriesData.map((item, index) => {
              return (
                <div
                  key={item.cat_slug}
                  className="item w-full cursor-pointer group"
                >
                  <Link
                    href={`products?category=%2B${item?.cat_slug}`}
                    rel="noopener noreferrer"
                  >
                    <div className="w-full h-[120px] relative rounded bg-white flex justify-center items-center">
                      <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                        <span className={styles["h"]}>
                          <img src={item.cat_image} alt={item.cat_name} />
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                      {item.cat_name}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
