//here we will declare our data models interfaces or in easy way type of our all datas in our website

export interface MyFetchInterface {
  res: any;
  err: any;
}
export interface IUser {
  email: string;
  avatar: string;
  token: string;
  tokenType: string;
  displayName?: string;
  password: string;
  role: string;
  fullName: string;
  slug: string;
  createdAt?: string;
  updatedAt: string;
  phone: string;
  address: {
    country?: string;
    state?: string;
    city?: string;
    address?: string;
  };
}
export interface featuredProductLPObj {
  pageNumber: number | string;
}

export interface IProduct {
  productName?: string;
  slug?: string | undefined;
  catSlug?: string;
  subCatSlug?: string;
  brandSlug?: string;
  price?: number;
  description?: string;
  status?: string;
  imageURL: Array<string | undefined>;
  offerPrice: number;
  weight?: number;
  stock?: number;
  seoTitle?: string;
  seoDescription?: string;
  isTopProduct?: boolean;
  isNewArrival?: boolean;
  isBestProduct?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export interface IWishlistProduct extends IProduct {
  user_slug?: string;
}
// export interface IReview {
//   slug: string;
//   name: string;
//   message: string;
// }

export interface IOrder {
  subTotal: number;
  discount: number;
  shippingCost: number;
  total: number;
  slug?: string;
  createdAt?: string;
  product_list: ICartProduct[];
  payment_method: string;
  user_slug: string;
  transaction_id: string;
  payment_status?: string;
  order_status?: string;
  address: {
    country?: string;
    state?: string;
    city?: string;
    address?: string;
  };
}

export interface IReportedItem {
  slug?: string;
  product_slug?: string;
  user_slug?: string;
  title?: string;
  note?: string;
}
export interface IReview {
  // slug?: string;
  user_slug?: string;
  product_slug?: string;
  title?: string;
  note?: string;
}

export interface ICart {
  user_slug: string;
  product_slug: string | undefined;
  quantity: number;
}

export interface ICartProduct extends IProduct {
  cart_slug: string;
  quantity: number;
}

export interface ICategories {
  cat_slug: string;
  cat_name: string;
  cat_image?: string;
  cat_status: string;
  cat_icon: string;
}
export interface ISubCategories {
  slug: string;
  cat_image?: string;
  subcat_name: string;
  subcat_status: string;
  cat_name: string;
  cat_slug: string;
}
export interface IBrands {
  slug?: string;
  logo: string;
  name: string;
  status: string;
}

export interface IAddress {
  name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  address: string;
  slug: string;
  user_slug: string;
}
