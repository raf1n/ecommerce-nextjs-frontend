import {
  IBrands,
  ICartProduct,
  ICategories,
  ISubCategories,
  IUser,
  IWishlistProduct,
} from "./../../interfaces/models";
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
  searchString: string;
  searchCategory: string;
  searchBrand: string;
  filteredProducts: Array<IProduct>;
  allProducts: Array<IProduct>;
  featuredProducts: Array<IProduct>;
  topProducts: Array<IProduct>;
  popularProducts: Array<IProduct>;
  bestProducts: Array<IProduct>;
  newProducts: Array<IProduct>;
  categories: Array<ICategories>;
  subCategories: Array<ISubCategories>;
  brands: Array<IBrands>;
  initialDataLoading: boolean;
  user: IUser | null;
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
    searchString: "",
    searchCategory: "",
    searchBrand: "",
    filteredProducts: [],
    allProducts: [],
    featuredProducts: [],
    topProducts: [],
    popularProducts: [],
    bestProducts: [],
    newProducts: [],
    categories: [],
    subCategories: [],
    brands: [],
    initialDataLoading: true,
    user: null,
  };

  @action
  setState(states: Partial<IStates>) {
    this.states = {
      ...this.states,
      ...states,
    };
  }
  // @action
  // setBrandName(name: string) {
  //   this.states.brandName = name;
  // }

  @action
  setInitialDataLoading() {
    this.states.initialDataLoading = !this.states.initialDataLoading;
  }

  @action
  setSearchString(search: string) {
    this.states.searchString = search;
  }

  @action
  setSearchCategory(cat: string, fromHeader: boolean) {
    if (fromHeader) {
      this.states.searchCategory = "+" + cat;
    } else {
      if (this.states.searchCategory.includes(cat)) {
        this.states.searchCategory = this.states.searchCategory.replace(
          "+" + cat,
          ""
        );
      } else {
        this.states.searchCategory = this.states.searchCategory + "+" + cat;
      }
    }

    // if (states.searchCategory.includes(category)) {
    //   setFilterCategory((prevCategory) =>
    //     prevCategory.replace("+" + category, "")
    //   );
    // } else {
    //   setFilterCategory((prevCategory) => prevCategory + "+" + category);
    // }
    // this.states.searchCategory = cat;
  }

  @action
  setSearchBrand(brand: string) {
    if (this.states.searchBrand.includes(brand)) {
      this.states.searchBrand = this.states.searchBrand.replace(
        "+" + brand,
        ""
      );
    } else {
      this.states.searchBrand = this.states.searchBrand + "+" + brand;
    }
  }

  @action
  setFilteredProducts(products: Array<IProduct>) {
    this.states.filteredProducts = [...products];
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
  setCategories(categories: Array<ICategories>) {
    this.states.categories = categories;
  }

  @action
  setSubCategories(subCategories: Array<ISubCategories>) {
    this.states.subCategories = subCategories;
  }

  @action
  setBrands(brands: Array<IBrands>) {
    this.states.brands = brands;
  }

  //wishlist
  @action
  setIncreaseWishlistCounter() {
    this.states.wishlistCounter += 1;
  }
  @action
  setAddtoWishlist(product: IWishlistProduct) {
    if (!this.states.wishlistData?.some((item) => item.slug === product.slug)) {
      this.states.wishlistCounter += 1;
      this.states.wishlistData = [...this.states.wishlistData, product];
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
    this.states.wishlistData = products;
  }

  @action
  setRemoveWishlistSingleProduct(product: IWishlistProduct) {
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

  @action
  setUser(user: any) {
    this.states.user = user;
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
