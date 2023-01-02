import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import SectionHeader from "../SectionHeader";
import BestProductCard from "./BestProductCard";

const bestProductsData = [
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
  {
    name: "Mi Laptop Pro",
    formerPrice: 50000,
    currentPrice: 45000,
    slug: "mi-laptop-pro",
    imgUrl:
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
  },
];

interface Props {}

const BestProducts: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <section className="md:mb-[60px] mb-[30px]">
      <div className="container-x mx-auto">
        <SectionHeader
          title="Best Products"
          link="products?highlight=best_product"
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-x-[30px] lg:gap-x-5">
          {bestProductsData.map((product) => (
            <BestProductCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
