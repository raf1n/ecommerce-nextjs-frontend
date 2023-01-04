import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import { Jsondata } from "../../../../src/utils/Jsondata";
import styles from "./ProductCategory.module.css";
interface Props {}

const ProductCategory: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="category-section-wrapper w-full">
      <div className="container-x mx-auto pb-[60px]">
        <div>
          <div className="w-full grid xl:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-[30px]">
            {Jsondata.productCategories.map((item, index) => {
              return (
                <div className="item w-full cursor-pointer group">
                  <a href="/" rel="noopener noreferrer">
                    <div className="w-full h-[120px] relative rounded bg-white flex justify-center items-center">
                      <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                        <span className={styles["h"]}>
                          <img src={item.image} alt={item.name} />
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                      {item.name}
                    </p>
                  </a>
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
