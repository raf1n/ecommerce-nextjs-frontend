import { ICartProduct } from "./../../interfaces/models";
//@ts-nocheck
import { state, action, computed, createStore } from "usm-redux";
import { compose } from "redux";
import { IProduct } from "../../interfaces/models";
import { EcommerceApi } from "../API/EcommerceApi";

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Speciffy extension's options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

export interface IStates {
  counter: number;
  wishlistCounter: number;
  wishlistData: Array<IProduct>;
  cartlistCounter: number;
  cartlistData: Array<ICartProduct>;
  cartSubTotal: number;
  toggle: Boolean;
  allProducts: Array<IProduct>;
  featuredProducts: Array<IProduct>;
  topProducts: Array<IProduct>;
  popularProducts: Array<IProduct>;
  bestProducts: Array<IProduct>;
  newProducts: Array<IProduct>;
}

export class Controller {
  @state
  states: IStates = {
    counter: 0,
    wishlistCounter: 0,
    wishlistData: [],
    cartSubTotal: 0,
    cartlistCounter: 0,
    cartlistData: [],
    toggle: false,
    allProducts: [],
    featuredProducts: [],
    topProducts: [],
    popularProducts: [],
    bestProducts: [],
    newProducts: [],
  };

  @action
  setState(states: Partial<IStates>) {
    this.states = {
      ...this.states,
      ...states,
    };
  }

  @action
  setAllProducts(product: Array<IProduct>) {
    this.states.allProducts = product;
    this.states.popularProducts = product;
    this.states.topProducts = product;
    this.states.bestProducts = product;
    this.states.newProducts = product;
  }

  @action
  setFeaturedProducts(product: Array<IProduct>) {
    this.states.featuredProducts = product;
  }

  @action
  setPopularProducts(product: Array<IProduct>) {
    this.states.popularProducts = product;
  }

  @action
  setTopProducts(product: Array<IProduct>) {
    this.states.topProducts = product;
  }

  @action
  setBestProducts(product: Array<IProduct>) {
    this.states.bestProducts = product;
  }

  @action
  setNewProducts(product: Array<IProduct>) {
    this.states.newProducts = product;
  }

  //wishlist
  @action
  setIncreaseWishlistCounter() {
    this.states.wishlistCounter += 1;
  }
  @action
  setAddtoWishlist(product: IProduct) {
    if (!this.states.wishlistData?.some((item) => item.slug === product.slug)) {
      this.states.wishlistCounter += 1;
      this.states.wishlistData = [...this.states.wishlistData, product];
      // this.states.wishlistData.push(product)
    } else {
      this.states.wishlistData = this.states.wishlistData.filter(
        (item) => item.slug !== product.slug
      );
      this.states.wishlistCounter -= 1;
    }
  }

  @action
  setClearWishlist() {
    this.states.wishlistData = [];
    this.states.wishlistCounter = 0;
  }

  @action
  setAllWishlistData(products: Array<IProduct>) {
    console.log(products);
    this.states.wishlistData = products;
  }

  @action
  setRemoveWishlistSingleProduct(product: IProduct) {
    this.states.wishlistData = this.states.wishlistData?.filter(
      (item) => item.slug !== product.slug
    );
    // }

    this.states.wishlistCounter -= 1;
  }

  @action
  setAddtoCartlist(productToAdd: ICartProduct) {
    // if found, increment quantity
    if (
      this.states?.cartlistData?.some((item) => item.slug === productToAdd.slug)
    ) {
      this.states.cartlistData = this.states.cartlistData.map((cartItem) =>
        cartItem.slug === productToAdd.slug
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      // if not found new array with modified cartItems/ new cart item
      this.states.cartlistData = [
        ...this.states.cartlistData,
        { ...productToAdd, quantity: 1 },
      ];
    }
  }

  @action
  setMinusFromCartlist(productToMinus: IProduct) {
    this.states.cartlistData = this.states.cartlistData.map((cartItem) =>
      cartItem.slug === productToMinus.slug
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  @action
  setRemoveCartItem(productToRemove: IProduct) {
    this.states.cartlistData = this.states.cartlistData.filter(
      (cartItem) => cartItem.slug !== productToRemove.slug
    );
  }

  @action
  setClearCartlist() {
    this.states.cartlistData = [];
  }
  @action
  setAllCartListData(products: ICartProduct[]) {
    this.states.cartlistData = products;
  }

  // @action
  // setAddtoCartlist(product: IProduct) {
  //   var total: number = 0;
  //   const totalFunc = () => {
  //     for (let i = 0; i < this.states.cartlistData?.length; i++) {
  //       if (this.states?.cartlistData[i]?.offerPrice) {
  //         total = total + parseInt(this.states.cartlistData[i]?.offerPrice);
  //       } else {
  //         total = total + parseInt(states?.cartlistData[i]?.price);
  //       }
  //     }
  //     this.states.cartSubTotal = total;
  //   };
  //   if (!this.states.cartlistData.some((item) => item.slug === product.slug)) {
  //     this.states.cartlistCounter += 1;
  //     this.states.cartlistData = [...this.states.cartlistData, product];
  //     totalFunc();
  //   } else {
  //     this.states.cartlistData = this.states.cartlistData.filter(
  //       (item) => item.slug !== product.slug
  //     );
  //     this.states.cartlistCounter -= 1;
  //     totalFunc();
  //   }
  // }

  // @action
  // setRemoveCartlistSingleProduct(product: IProduct) {
  //   this.states.cartlistData = this.states.cartlistData.filter(
  //     (item) => item.slug !== product.slug
  //   );
  //   this.states.cartlistCounter -= 1;
  // }
}

export const controller = new Controller();

export const store = createStore(
  {
    modules: [controller],
  },
  undefined,
  {
    reduxEnhancer: composeEnhancers(),
  }
);
