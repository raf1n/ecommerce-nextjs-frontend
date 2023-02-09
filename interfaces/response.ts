import {
  IProduct,
  IUser,
  IReportedItem,
  ICartProduct,
  ICategories,
  ISubCategories,
  IBrands,
} from "./models";
import { MyFetchInterface } from "./MyFetchInterface";
//here we will declare our response interfaces or in easy way type of our all response in our website

export interface IResponseUser extends IUser {
  //with User model this particular extra data will come as response
  totalPictures: number;
}
export interface ILoginResponse extends MyFetchInterface {
  res: {
    slug: string;
    access_token: string;
    userId: string;
    role: string;
  };
}

export interface IProductResponse extends MyFetchInterface {
  res: {
    featuredProducts: Array<IProduct>;
    topProducts: Array<IProduct>;
    popularProducts: Array<IProduct>;
    bestProducts: Array<IProduct>;
    newProducts: Array<IProduct>;
    allProductData: Array<IProduct>;
  };
}
export interface IWishlistResponse extends MyFetchInterface {
  res: {
    data: IProduct;
    message: string;
  };
}
export interface IAllWishlistResponse extends MyFetchInterface {
  res: IProduct[];
}
export interface ICartResponse extends MyFetchInterface {
  res: {
    slug: string;
    cart_slug: string;
    user_slug: string;
    quantity: number;
  };
}

export interface IInitialCartResponse extends MyFetchInterface {
  res: ICartProduct[];
}
export interface ISingleProductResponse extends MyFetchInterface {
  res: IProduct;
}
export interface ICategoriesResponse extends MyFetchInterface {
  res: ICategories[];
}
export interface ISubCategoriesResponse extends MyFetchInterface {
  res: ISubCategories[];
}
export interface IBrandsResponse extends MyFetchInterface {
  res: IBrands[];
}
