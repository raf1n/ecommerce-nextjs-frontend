import {
  FaFire,
  FaTrash,
  FaCog,
  FaEnvelope,
  FaColumns,
  FaGlobe,
  FaUserAlt,
  FaNewspaper,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaHome,
  FaAdversal,
  FaCircle,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export class Jsondata {
  //Product Categories
  static productCategories = [
    {
      name: "Electronics",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Felectronics-2022-11-19-02-48-28-5548.png&w=1920&q=75",
    },
    {
      name: "Game",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fgame-2022-11-19-02-48-48-6382.png&w=1920&q=75",
    },
    {
      name: "Mobile",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmobile-2022-11-19-02-49-20-2538.png&w=1920&q=75",
    },
    {
      name: "Lifestyle",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Flifestyle-2022-11-19-02-49-38-3139.png&w=1920&q=75",
    },
    {
      name: "Babies & Toys",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbabies-toys-2022-11-19-02-50-00-3811.png&w=1920&q=75",
    },
    {
      name: "Bike",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbike-2022-11-19-02-50-18-4648.png&w=1920&q=75",
    },
    {
      name: "Men's Fashion",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmens-fasion-2022-11-19-02-50-39-5203.png&w=1920&q=75",
    },
    {
      name: "Woman Fashion",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fwomans-fasion-2022-11-19-02-52-58-2850.png&w=1920&q=75",
    },
  ];
  //Best Seller
  static bestSeller = [
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-11-58-14-9795.png&w=1920&q=75",
      name: "Shopno BD",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-10-12-2682.png&w=1920&q=75",
      name: "Ecoms Shop",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-16-13-5847.png&w=1920&q=75",
      name: "Fusion X",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-19-19-3916.png&w=1920&q=75",
      name: "Rikayi Rox",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-22-55-6660.png&w=1920&q=75",
      name: "Habbriyi",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
      name: "Rayhans",
    },
  ];
  //Sale Time
  static saleTime = [
    {
      name: "Days",
      duration: "984",
    },
    {
      name: "Hours",
      duration: "23",
    },
    {
      name: "Minutes",
      duration: "28",
    },
    {
      name: "Seconds",
      duration: "56",
    },
  ];
  //Footer Data
  static footerData = [
    {
      header: "Feature",
      links: [
        {
          title: "About Us",
          url: "about",
        },
        {
          title: "Terms Condition",
          url: "terms-condition",
        },
        {
          title: "Best Products",
          url: "/products?highlight=best_product",
        },
      ],
    },
    {
      header: "General Links",
      links: [
        {
          title: "Blog",
          url: "blogs",
        },
        {
          title: "Shop",
          url: "sellers",
        },
        {
          title: "Support",
          url: "faq",
        },
      ],
    },
    {
      header: "Helpful",
      links: [
        {
          title: "Helpful",
          url: "about",
        },
        {
          title: "Popular Category",
          url: "products?highlight=popular_category",
        },
        {
          title: "Contact Us",
          url: "contact",
        },
      ],
    },
  ];
  //Best Products
  static bestProductsData = [
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
  //Blogs Data
  static blogsData = [
    {
      id: 1,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 2,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 3,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 4,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 5,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 6,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
  ];
  //Top Rated Products Data
  static topRatedProducts = [
    {
      name: "Sony joystick SJ pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-joystick-sj-pro-2022-09-27-03-39-20-9931.png&w=2048&q=75",
      rating: 5,
      mainPrice: "$7000",
      offerPrice: " $5000.00",
    },
    {
      name: "JBL headphone Max",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-headphon-max-2022-09-26-01-55-56-9123.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$700",
      offerPrice: " $650.000",
    },
    {
      name: "Sony Play Station 5",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-play-staton-5-2022-09-26-12-20-52-2324.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$88.88",
      offerPrice: " $61.10",
    },
    {
      name: "FANTECH OCTANE Headset",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffantech-octane-headset-2022-09-26-12-53-57-7709.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$88",
      offerPrice: "$59.40",
    },
  ];
  //Featured Products Data
  static featuredProducts = [
    {
      name: "Asus zenbook desktop",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=1920&q=75",
      previousPrice: 3500,
      currentPrice: 3300,
    },
    {
      name: "VISION ELITE CEILING FAN",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-rice-cooker-2022-09-26-12-48-28-5516.png&w=1920&q=75",
      previousPrice: 11.11,
      currentPrice: 9.9,
    },
    {
      name: "VISION Rice Cooker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-elite-ceiling-fan-2022-09-26-12-29-33-2795.png&w=1920&q=75",
      previousPrice: 99.88,
      currentPrice: 35.43,
    },
  ];
  //New Release Products
  static newReleasedProducts = [
    {
      name: "Apple watch pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75",
      previousPrice: 4500,
      currentPrice: 4000,
    },
    {
      name: "Sony joystick SJ pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-joystick-sj-pro-2022-09-27-03-39-20-9931.png&w=1920&q=75",
      previousPrice: 7000,
      currentPrice: 5000,
    },
    {
      name: "Asus zenbook desktop",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=1920&q=75",
      previousPrice: 35000,
      currentPrice: 33000,
    },
    {
      name: "Realme mini music",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Frealme-mini-music-2022-09-26-01-34-10-1954.png&w=1920&q=75",
      previousPrice: 800,
      currentPrice: 569,
    },
    {
      name: "Mi Laptop pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
      previousPrice: 50000,
      currentPrice: 45000,
    },
    {
      name: "JBL Clip 4 Orange Portable Bluetooth Speaker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-bluetooth-speaker-jblclip40rg-2022-09-26-12-42-09-8912.png&w=1920&q=75",
      previousPrice: 332,
      currentPrice: 299,
    },
    {
      name: "PlayStation 4",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fplaystation-4-2022-09-26-12-43-50-4261.png&w=1920&q=75",
      previousPrice: 123,
      currentPrice: 99,
    },
    {
      name: "Samsung Galaxy A52 (8/128 GB)",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsamsung-galaxy-a52-8128-gb-2022-09-26-12-12-12-9319.png&w=1920&q=75",
      previousPrice: 11.11,
      currentPrice: 9.9,
    },
    {
      name: "VISION Rice Cooker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-elite-ceiling-fan-2022-09-26-12-29-33-2795.png&w=1920&q=75",
      previousPrice: 99.88,
      currentPrice: 35.43,
    },
    {
      name: "Sony Play Staton 5",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-play-staton-5-2022-09-26-12-20-52-2324.png&w=1920&q=75",
      previousPrice: 88.88,
      currentPrice: 69.99,
    },
    {
      name: "FANTECH OCTANE Headset",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffantech-octane-headset-2022-09-26-12-53-57-7709.png&w=1920&q=75",
      previousPrice: 88.88,
      currentPrice: 69.99,
    },
  ];
  //Single Item Detail
  static itemDetail = {
    name: "Asus zenbook desktop",
    slug: "jbl-clip-4-orange-portable-speake",
    brand: "HUAWEI",
    rating: 3,
    reviews: [],
    formerPrice: 35000,
    currentPrice: 33000.0,
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    availability: 3,
    category: "Accessories",
    sku: "kjhyy78",
    images: [
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=2048&q=75",
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    ],
  };

  static dashboardSummaryData = [
    {
      id: 1,
      title: "Today Order",
      icons: FaShoppingCart,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 2,
      title: "Today Pending Order",
      icons: FaShoppingCart,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 3,
      title: "Total Order",
      icons: FaShoppingCart,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 4,
      title: "Total Pending Order",
      icons: FaShoppingCart,
      bgColor: "bg-blue-600",
      value: "40",
    },
    {
      id: 5,
      title: "Total Declined Order",
      icons: FaShoppingCart,
      bgColor: "bg-orange-700",
      value: "0",
    },
    {
      id: 6,
      title: "Total Complete Order",
      icons: FaShoppingCart,
      bgColor: "bg-orange-700",
      value: "6",
    },
    {
      id: 7,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "bg-orange-700",
      value: "$0",
    },
    {
      id: 8,
      title: "Today Pending Earning",
      icons: FaNewspaper,
      bgColor: "bg-orange-700",
      value: "$0",
    },
    {
      id: 9,
      title: "This Month Earning",
      icons: FaNewspaper,
      bgColor: "bg-green-600",
      value: "$0",
    },
    {
      id: 10,
      title: "This Year Earning",
      icons: FaNewspaper,
      bgColor: "bg-green-600",
      value: "$0",
    },
    {
      id: 11,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "bg-green-600",
      value: "$0",
    },
    {
      id: 12,
      title: "Today Product Sale",
      icons: FaCircle,
      bgColor: "bg-green-600",
      value: "0",
    },
    {
      id: 13,
      title: "This Month Product Sale",
      icons: FaCircle,
      bgColor: "bg-red-600",
      value: "0",
    },
    {
      id: 14,
      title: "This Year Product Sale",
      icons: FaCircle,
      bgColor: "bg-red-600",
      value: "0",
    },
    {
      id: 15,
      title: "Total Product Sale",
      icons: FaCircle,
      bgColor: "bg-red-600",
      value: "0",
    },
    {
      id: 16,
      title: "Total Product",
      icons: FaCheckCircle,
      bgColor: "bg-red-600",
      value: "0",
    },
    {
      id: 17,
      title: "Total Product Report",
      icons: FaCheckCircle,
      bgColor: "bg-green-600",
      value: "0",
    },
    {
      id: 18,
      title: "Total Product Review",
      icons: FaCheckCircle,
      bgColor: "bg-green-600",
      value: "0",
    },
    {
      id: 19,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "bg-green-600",
      value: "0",
    },
    {
      id: 20,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "bg-green-600",
      value: "0",
    },
    {
      id: 21,
      title: "Total Subscriber",
      icons: FaUser,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 22,
      title: "Total Blog",
      icons: FaCheckCircle,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 23,
      title: "Product Category",
      icons: FaCheckCircle,
      bgColor: "bg-blue-600",
      value: "0",
    },
    {
      id: 24,
      title: "Total Brand",
      icons: FaCheckCircle,
      bgColor: "bg-blue-600",
      value: "40",
    },
  ];
  static checkCategoryFilterData = [
    {
      id: "electronics",
      name: 1,
      label: "Electronics",
    },
    {
      id: "game",
      name: 2,
      label: "game",
    },
    {
      id: "mobile",
      name: 3,
      label: "mobile",
    },
    {
      id: "lifestyle",
      name: 4,
      label: "lifestyle",
    },
    {
      id: "babiesAndToys",
      name: 5,
      label: "Babies & Toys",
    },
    {
      id: "bike",
      name: 6,
      label: "bike",
    },
    {
      id: "mensFashion",
      name: 7,
      label: "Men's Fashion",
    },
    {
      id: "womensFashion",
      name: 8,
      label: "Women's Fashion",
    },
    {
      id: "television",
      name: 9,
      label: "television",
    },
    {
      id: "accessories",
      name: 10,
      label: "accessories",
    },
    {
      id: "johnDoe",
      name: 11,
      label: "John Doe",
    },
  ];

  static checkBrandFilterData = [
    {
      id: "onePlus",
      name: 1,
      label: "OnePlus",
    },
    {
      id: "tencent",
      name: 2,
      label: "tencent",
    },
    {
      id: "apple",
      name: 3,
      label: "apple",
    },
    {
      id: "microsoft",
      name: 4,
      label: "Microsoft",
    },
    {
      id: "lenovo",
      name: 5,
      label: "Lenovo",
    },
    {
      id: "huawei",
      name: 6,
      label: "Huawei",
    },
    {
      id: "nexus",
      name: 7,
      label: "Nexus",
    },
    {
      id: "google",
      name: 8,
      label: "Google",
    },
    {
      id: "firefox",
      name: 9,
      label: "Firefox",
    },
    {
      id: "tesla",
      name: 10,
      label: "Tesla",
    },
    {
      id: "brave",
      name: 11,
      label: "Brave",
    },
    {
      id: "facebook",
      name: 12,
      label: "Facebook",
    },
  ];

  static menus = [
    { title: "Dashboard", icon: FaHome, gap: false },
    {
      title: "Orders",
      icon: FaShoppingCart,
      height: "253px",
      nestedRoutes: [
        {
          title: "All Orders",
          link: "/all-orders",
        },
        {
          title: "Pending Orders",
          link: "/pending-orders",
        },
        {
          title: "Progress Orders",
          link: "/progress-orders",
        },
        {
          title: "Delivered Orders",
          link: "/delivered-orders",
        },
        {
          title: "Completed Orders",
          link: "/completed-orders",
        },
        {
          title: "Declined Orders",
          link: "/declined-orders",
        },
        {
          title: "Cash On Delivery",
          link: "/cash-on-delivery",
        },
      ],
    },
    {
      title: "Manage Categories",
      icon: AiFillAppstore,
      height: "218px",
      nestedRoutes: [
        {
          title: "Categories",
          link: "/categories",
        },
        {
          title: "Sub Categories",
          link: "/sub-categories",
        },
        {
          title: "Child Categories",
          link: "/child-categories",
        },
        {
          title: "Mega Menu Category",
          link: "/mega-menu-category",
        },
        {
          title: "Popular Category",
          link: "/popular-category",
        },
        {
          title: "Featured Category",
          link: "/featured-category",
        },
      ],
    },
    {
      title: "Manage Products ",
      icon: AiFillAppstore,
      height: "323px",
      nestedRoutes: [
        {
          title: "Brands",
          link: "/brands",
        },
        {
          title: "Create Product",
          link: "/create-product",
        },
        {
          title: "Products",
          link: "/products",
        },
        {
          title: "Stock Out",
          link: "/stock-out",
        },
        {
          title: "Seller Products",
          link: "/seller-products",
        },
        {
          title: "Seller Pending Products",
          link: "/seller-pending-products",
        },
        {
          title: "Specification Key",
          link: "/specification-key",
        },
        {
          title: "Product Reviews",
          link: "/product-reviews",
        },
        {
          title: "Product Report",
          link: "/product-report",
        },
      ],
    },
    { title: "Ecommerce", icon: FaShoppingCart },
    { title: "Advertisements", icon: FaAdversal },
    { title: "Withdraw Payment", icon: FaNewspaper },
    { title: "Users", icon: FaUserAlt },
    { title: "Manage Website", icon: FaGlobe },
    { title: "Website Footer", icon: AiFillAppstore },
    { title: "Pages", icon: FaColumns },
    { title: "Blogs", icon: AiFillAppstore },
    { title: "Email Configuration", icon: FaEnvelope },
    { title: "Language", icon: AiFillAppstore },
    { title: "Setting", icon: FaCog },
    { title: "Clear Database", icon: FaTrash },
    { title: "Subscribers", icon: FaFire },
    { title: "Contact Message", icon: FaEnvelope },
    { title: "Admin List", icon: FaUserAlt },
  ];

  static wishlistData = [
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
  ];
  static categoriesTableData = [
    {
      id: 1,
      subCat: "Mobiles",
      slug: "mobiles",
      category: "Electronics",
      status: "active",
    },
    {
      id: 2,
      subCat: "Laptop",
      slug: "laptop",
      category: "Electronics",
      status: "active",
    },
    {
      id: 3,
      subCat: "Headphone",
      slug: "headphone",
      category: "Electronics",
      status: "inactive",
    },
    {
      id: 4,
      subCat: "Mouse",
      slug: "mouse",
      category: "Electronics",
      status: "inactive",
    },
  ];
}
