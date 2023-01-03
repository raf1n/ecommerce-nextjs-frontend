import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../src/state/StateController";
import Styles from "./ProductCard.module.css";

interface Props {
  Product: any;
//   newReleasedProduct: any
}

const ProductCard: React.FC<Props> = (props) => {
  const { Product  } = props;

  const states = useSelector(() => controller.states);

  return (
    <div className={`${Styles["productCardStyle"]}`}>
      <div>
        <div className={`${Styles["productImageStyle"]}`}>
          <img src={props.Product.image} alt="" />
        </div>
        <div
          className={`${Styles["productCardDetails  pt-2"]}  px-[30px] pb-[30px] relative`}
        >
          <p>{props.Product.name}</p>

          <div className={`${Styles["priceDiv"]}  flex flex-row  space-x-3 `}>
            <p className={`${Styles["previuosPrice"]} text-qgray `}>
              <del>$ {props.Product.previousPrice}</del>
            </p>
            <p className={`${Styles["currentPrice"]}`}>
              ${props.Product.currentPrice}
            </p>
          </div>

          <button className={`${Styles["addToCardButton"]}`}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
