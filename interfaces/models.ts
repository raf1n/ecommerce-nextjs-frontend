//here we will declare our data models interfaces or in easy way type of our all datas in our website

export interface MyFetchInterface {
  res: any;
  err: any;
}
export interface IUser {
  _id: string;
  email?: string;
  avatar: string;
  token: string;
  tokenType: string;
  displayName: string;
  password: string;
  role: string;
  fullName: string;
  slug: string;
  createdAt?: string;
  updatedAt: string;
}
export interface featuredProductLPObj {
  pageNumber: number | string;
}

export interface IProduct {
  productName?: string;
  slug?: string;
  catSlug?: string;
  subCatSlug?: string;
  brandSlug?: string;
  price?: number;
  description?: string;
  status?: string;
  imageURL: Array<string | undefined>;
  offerPrice?: number;
  weight?: number;
  stock?: number;
  seoTitle?: string;
  seoDescription?: string;
  isTopProduct?: boolean;
  isNewArrival?: boolean;
  isBestProduct?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  addedBy?: string;
  approvalStatus?: string;
}

export interface IReportedItem {
  slug?: string;
  product_slug?: string;
  user_slug?: string;
  title?: string;
  note?: string;
}
