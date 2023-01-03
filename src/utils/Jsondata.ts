export class Jsondata {
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
  static bestSeller = [
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-11-58-14-9795.png&w=1920&q=75',
      name: 'Shopno BD'
    },
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-10-12-2682.png&w=1920&q=75',
      name: 'Ecoms Shop'
    },
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-16-13-5847.png&w=1920&q=75',
      name: 'Fusion X'
    },
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-19-19-3916.png&w=1920&q=75',
      name: 'Rikayi Rox'
    },
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-22-55-6660.png&w=1920&q=75',
      name: 'Habbriyi'
    },
    {
      image: 'https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75',
      name: 'Rayhans'
    },
  ];

  static saleTime = [
    {
      name: 'Days',
      duration: '984'
    },
    {
      name: 'Hours',
      duration: '23'
    },
    {
      name: 'Minutes',
      duration: '28'
    },
    {
      name: 'Seconds',
      duration: '56'
    },
  ];
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
}

