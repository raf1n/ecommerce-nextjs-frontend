import {
  IProduct,
  IUser,
  IReportedItem,
  ICartProduct,
  ICategories,
  ISubCategories,
  IBrands,
  IOrder,
  IReview,
  ISlider,
  IAd,
  IMegaCategory,
  IFeaturedCategories,
} from "./models";
import { MyFetchInterface } from "./MyFetchInterface";
import { IAddress } from "./models";
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

export interface IFilteredProductResponse extends MyFetchInterface {
  res: IProduct[];
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

export interface IOrderResponse extends MyFetchInterface {
  res: {
    data: string;
    message: string;
  };
}
export interface ISingleOrderResponse extends MyFetchInterface {
  res: IOrder;
}

export interface IAllWishlistResponse extends MyFetchInterface {
  res: IProduct[];
}
export interface IReviewsResponse extends MyFetchInterface {
  res: {
    data: IReview;
    message: string;
  };
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
export interface IAddressResponse extends MyFetchInterface {
  res: Array<IAddress>;
}

export interface ISingleAddressResponse extends MyFetchInterface {
  res: IAddress;
}
export interface ISliderResponse extends MyFetchInterface {
  res: Array<ISlider>;
}

export interface ISingleSliderResponse extends MyFetchInterface {
  res: ISlider;
}

export interface IAdResponse extends MyFetchInterface {
  res: IAd[];
}

export interface ISingleAdResponse extends MyFetchInterface {
  res: IAd;
}

export interface IMegaCategoriesResponse extends MyFetchInterface {
  res: IMegaCategory[];
}

export interface ISingleMegaCategoryResponse extends MyFetchInterface {
  res: IMegaCategory;
}

export interface IFeaturedCategoriesResponse extends MyFetchInterface {
  res: IFeaturedCategories[];
}
