import {
  IAddress,
  ICartProduct,
  IOrder,
  IReview,
} from "./../../interfaces/models";
import {
  ICartResponse,
  IOrderResponse,
  ISingleAddressResponse,
} from "./../../interfaces/response";
import {
  ICart,
  ICategories,
  IProduct,
  IReportedItem,
  IUser,
  IWishlistProduct,
  MyFetchInterface,
} from "../../interfaces/models";
import {
  IAllWishlistResponse,
  IBrandsResponse,
  ICategoriesResponse,
  IInitialCartResponse,
  ISingleProductResponse,
  ISubCategoriesResponse,
  IWishlistResponse,
  IAddressResponse,
  ILoginResponse,
  IProductResponse,
} from "../../interfaces/response";
import { callFetch } from "../utils/CallFetch";

export const API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];

export interface LoginInterface {
  status: number;
  data: {
    access_token: string | null;
  };
}

export class EcommerceApi {
  static async login(data: Partial<IUser>): Promise<ILoginResponse> {
    console.log(data.token);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions);
  }

  // static async getAllProducts(): Promise<IProductResponse> {
  //   const myHeaders = new Headers();
  //   // myHeaders.append("Authorization", `Bearer ${CookiesHandler.getAccessToken()}`);
  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   return await callFetch(`${API_ENDPOINT}/products`, requestOptions);
  // }
  //Get all wishlist product
  static async getAllWishlistProducts(
    user_slug: string
  ): Promise<IAllWishlistResponse> {
    const myHeaders = new Headers();
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return await callFetch(
      `${API_ENDPOINT}/wishlist?user_slug=${user_slug}`,
      requestOptions
    );
  }

  // Post single wishlist product
  static async postWishlistProduct(
    product: IWishlistProduct
  ): Promise<IWishlistResponse> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(product),
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/wishlist`, requestOptions);
  }
  //delete single wishlist product
  static async deleteWishlistSingleProduct(
    product_slug: string | undefined,
    user_slug: string
  ): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/wishlist?user_slug=${user_slug}&product_slug=${product_slug}`,
      requestOptions
    );
  }
  //delete all wishlist product
  static async deleteAllWishlistProduct(
    user_slug: string
  ): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(user_slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/wishlist/delete_all/${user_slug}`,
      requestOptions
    );
  }
  // order
  static async postOrder(order: IOrder): Promise<IOrderResponse> {
    console.log("from api", order);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(order),
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/orders`, requestOptions);
  }

  // order

  //from denji
  // static async login(data: Partial<IUser>): Promise<ILoginResponse> {
  //   console.log(data.token);
  //   console.log(API_ENDPOINT);
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   const requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: JSON.stringify(data),
  //     redirect: "follow",
  //   };

  //   return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions);
  // }

  static async getAllProducts(): Promise<IProductResponse> {
    const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${CookiesHandler.getAccessToken()}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/products`, requestOptions);
  }

  // get single product

  static async getSingleProduct(slug: string): Promise<ISingleProductResponse> {
    const myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${CookiesHandler.getAccessToken()}`);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/products/${slug}`, requestOptions);
  }
  // ------------------------------------------------
  static async addReportedItem(
    data: Partial<IReportedItem>
  ): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/reporteditems`, requestOptions);
  }
  // ---------------------------------------------------
  static async addReview(data: IReview): Promise<MyFetchInterface> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/reviews`, requestOptions);
  }

  static async getAllCartData(query: string): Promise<IInitialCartResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/cart?user_slug=${query}`,
      requestOptions
    );
  }

  static async addToCart(data: ICart): Promise<ICartResponse> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/cart`, requestOptions);
  }
  static async deleteFromCart(
    slug: string | undefined
  ): Promise<MyFetchInterface> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "Delete",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/cart/${slug}`, requestOptions);
  }

  static async updateSingleCartProduct(
    slug: string,
    quantity: number
  ): Promise<ICartResponse> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      body: JSON.stringify({ quantity: quantity }),
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/cart?cart_slug=${slug}`,
      requestOptions
    );
  }

  //get all categories
  static async getCategories(): Promise<ICategoriesResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/categories`, requestOptions);
  }

  //get sub categories
  static async getSubCategories(): Promise<ISubCategoriesResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/sub-categories`, requestOptions);
  }
  static async getBrands(): Promise<IBrandsResponse> {
    const myHeaders = new Headers();

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/brands/allbrands`, requestOptions);
  }
  // ---------Mkike
  static async createAddress(
    data: Partial<IAddress>
  ): Promise<IAddressResponse> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/addresses`, requestOptions);
  }
  //Update Address

  static async updateAddress(
    data: Partial<IAddress>,
    slug: string
  ): Promise<ISingleAddressResponse> {
    console.log(data);
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: slug ? "PUT" : "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    if (slug) {
      return await callFetch(
        `${API_ENDPOINT}/addresses/${slug}`,
        requestOptions
      );
    } else {
      return await callFetch(`${API_ENDPOINT}/addresses`, requestOptions);
    }
  }

  //Get all address Data
  static async allAddress(): Promise<IAddressResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();

    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/addresses`, requestOptions);
  }

  //Delete Address Data

  static async deleteAddress(slug: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/addresses/${slug}`, requestOptions);
  }

  //delete all cartlist product
  static async deleteAllCartlistProduct(
    user_slug: string
  ): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    console.log(user_slug);
    const myHeaders = new Headers();

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/cart/delete_all/${user_slug}`,
      requestOptions
    );
  }

  static async updateUserInfo(
    email: string,
    address: object
  ): Promise<MyFetchInterface> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(address),
    };

    return await callFetch(
      `${API_ENDPOINT}/users/update-profile-info?email=${email}`,
      requestOptions
    );
  }

  static async allOrders(
    user_slug: string,
    delivery_status?: string
  ): Promise<IOrderResponse> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    console.log(user_slug);
    console.log(delivery_status);
    const requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/orders?user_slug=${user_slug}&delivery_status=${
        delivery_status ? delivery_status : ""
      }`,
      requestOptions
    );
  }

  static async getLoggedInUser(email: string): Promise<MyFetchInterface> {
    console.log(API_ENDPOINT);
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");
    console.log(email);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/users/${email}`, requestOptions);
  }
}
