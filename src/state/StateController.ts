import { state, action, createStore } from "usm-redux";
import { compose } from "redux";
import { IProduct } from "../../interfaces/models";

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Speciffy extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

export interface IStates {
  counter: number;
  wishlistCounter: number;
  cartlistCounter: number; //By Ironman
  wishlistData: Array<IProduct>;
  cartlistData: Array<IProduct>; //By Ironman
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
    cartlistCounter: 0, //By Ironman
    wishlistData: [],
    cartlistData: [], //By ironman
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

  @action
  setIncreaseWishlistCounter() {
    this.states.wishlistCounter += 1;
  }
  @action //By Ironman
  setIncreaseCartlistCounter() {
    this.states.cartlistCounter += 1;
  }

  @action
  setAddtoWishlist(product: IProduct) {
    if (!this.states.wishlistData.some((item) => item.slug === product.slug)) {
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
  @action //By Ironman
  setAddToCartlist(product: IProduct) {
    if (!this.states.cartlistData.some((item) => item.slug === product.slug)) {
      this.states.cartlistCounter += 1;
      this.states.cartlistData = [...this.states.cartlistData, product];
    } else {
      this.states.cartlistData = this.states.cartlistData.filter(
        (item) => item.slug !== product.slug
      );
      this.states.cartlistCounter -= 1;
    }
  }

  @action
  setClearWishlist() {
    this.states.wishlistData = [];
    this.states.wishlistCounter = 0;
  }
  @action //by ironman
  setClearCartlist() {
    this.states.cartlistData = [];
    this.states.cartlistCounter = 0;
  }

  @action
  setRemoveWishlistSingleProduct(product: IProduct) {
    this.states.wishlistData = this.states.wishlistData.filter(
      (item) => item.slug !== product.slug
    );
    this.states.wishlistCounter -= 1;
  }
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
