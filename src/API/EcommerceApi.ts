import {
  featuredProductLPObj,
  IProduct,
  IUser,
  MyFetchInterface,
} from "../../interfaces/models";
import {
  IAllWishlistResponse,
  ILoginResponse,
  IProductResponse,
  IWishlistResponse,
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
  //By Ironman
  static async getAllWishlistProducts(): Promise<IAllWishlistResponse> {
    const myHeaders = new Headers();
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return await callFetch(`${API_ENDPOINT}/wishlist`, requestOptions);
  }
  //By Ironman
  static async postWishlistProduct(
    product: IProduct
  ): Promise<IWishlistResponse> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // console.log(productSlug);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(product),
      redirect: "follow",
    };

    return await callFetch(`${API_ENDPOINT}/wishlist`, requestOptions);
  }

  //
}
