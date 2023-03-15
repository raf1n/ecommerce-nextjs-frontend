import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { IBlog, IBlogComment } from "../../../interfaces/models";
import { EcommerceApi } from "../../../src/API/EcommerceApi";
import { controller } from "../../../src/state/StateController";
import BlogCommentCard from "./BlogCommentCard";

interface Props {
  blogData: IBlog | null;
  blogComments: IBlogComment[] | null;
}

const SingleBlogPage: React.FC<Props> = ({ blogData, blogComments }) => {
  const states = useSelector(() => controller.states);
  const { asPath } = useRouter();

  if (!blogData) return <></>;

  const router = useRouter();

  const shareableRoute = process.env.NEXT_PUBLIC_API_ENDPOINT + router.asPath;

  const handlePostComment = async (e: any) => {
    e.preventDefault();

    const formData = {
      userSlug: states.user.slug,
      avatar:  states.user.avatar,
      blogSlug: blogData.slug,
      name: e.target.name.value,
      email: e.target.email.value,
      comment: e.target.comment.value,
    };

    console.log(formData);

    const {res, err} = await EcommerceApi.postBlogComments(formData);

    console.log(res, err)
    if (res) {
      e.target.reset();
    }
  };

  return (
    <div>
      <div className="title-area mb-[60px]">
        <div className="w-full bg-[#FFFAEF] h-[173px] py-10">
          <div className="container-x mx-auto">
            <div className="font-normal text-[13px] text-qblack mb-[23px] print:hidden">
              <span>
                <Link href="/">
                  <span className="mx-1 capitalize">Home</span>
                </Link>
                <span className="separator">/</span>
              </span>
              <span>
                <Link href={`${asPath}/blogs/blog?slug=${blogData.slug}`}>
                  <span className="mx-1 capitalize">
                    blogs / {blogData.slug}
                  </span>
                </Link>
              </span>
            </div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-semibold text-qblack">
                Blog Details
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content-area w-full">
        <div className="container-x mx-auto">
          <div className="blog-article lg:flex lg:space-x-[30px] rtl:space-x-reverse mb-7">
            <div className="flex-1">
              <div className="img w-full  relative">
                <span>
                  <img className="w-full" src={blogData.imageURL} alt="" />
                </span>
              </div>
              <div className="blog pt-[24px]">
                <div className="short-data flex space-x-9 rtl:space-x-reverse items-center mb-3">
                  <div className="flex space-x-1.5 rtl:space-x-reverse items-center">
                    <span></span>
                    <span className="text-base text-qgraytwo capitalize">
                      By Admin
                    </span>
                  </div>
                  <div className="flex space-x-1.5 rtl:space-x-reverse items-center">
                    <span></span>
                    <span className="text-base text-qgraytwo capitalize">
                      {blogComments?.length} Comments
                    </span>
                  </div>
                </div>
                <div className="details">
                  <h1 className="text-[22px] text-qblack font-semibold line-clamp-2 mb-1 capitalize">
                    It’s official! The iPhone 14 Series is on its way! Rumors
                    turned out to be true. The Goods & the Bads.
                  </h1>
                  <div className="mb-10 text-qgraytwo">
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                    <p className="text-[15px] leading-8 text-qgraytwo mb-4 ">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                  </div>
                </div>
              </div>
              <div className="extra-content w-full">
                <div className="ronin bhai">
                  <div className="extra-content w-full">
                    <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
                    <div className="comment-area w-full mt-8">
                      <div className="w-full sm:flex justify-between items-center mb-8">
                        <div className="tags flex space-x-5 rtl:space-x-reverse items-center">
                          <span className="text-2xl text-qblack">Share:</span>
                          <div className="flex space-x-2.5 rtl:space-x-reverse items-center">
                            <div
                              aria-label="facebook"
                              className="bg-transparent border-none p-0 cursor-pointer flex justify-center items-center"
                            >
                              <FacebookShareButton url={shareableRoute}>
                                <FacebookIcon
                                  size={40}
                                  iconFillColor="#3E75B2"
                                  bgStyle={{ display: "none" }}
                                />
                              </FacebookShareButton>
                            </div>
                            <div
                              aria-label="twitter"
                              className="bg-transparent border-none p-0 cursor-pointer flex justify-center items-center"
                            >
                              <TwitterShareButton url={shareableRoute}>
                                <TwitterIcon
                                  size={40}
                                  iconFillColor="#3FD1FF"
                                  bgStyle={{ display: "none" }}
                                />
                              </TwitterShareButton>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="write-review w-full mb-[30px]">
                          <h1 className="text-2xl font-bold text-qblack mb-5">
                            Leave a Comment
                          </h1>
                          <form onSubmit={(e) => handlePostComment(e)} className="w-full review-form ">
                            <div className="sm:flex sm:space-x-[30px] rtl:space-x-reverse items-center mb-5 w-full">
                              <div className="w-full mb-5 sm:mb-0">
                                <div className="input-com w-full h-full">
                                  <label
                                    className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                                    htmlFor="name"
                                  >
                                    Name*
                                  </label>
                                  <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                                    <input
                                      placeholder="Name"
                                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                      type="text"
                                      id="name"
                                      required
                                      // value=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-full">
                                <div className="input-com w-full h-full">
                                  <label
                                    className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                                    htmlFor="email"
                                  >
                                    Email*
                                  </label>
                                  <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
                                    <input
                                      placeholder="Email"
                                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                                      type="email"
                                      id="email"
                                      required
                                      // value=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full mb-[30px]">
                              <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                                Message*
                              </h6>
                              <textarea
                                name="comment"
                                id=""
                                cols={30}
                                rows={3}
                                className="w-full placeholder:text-sm focus:ring-0 focus:outline-none p-6"
                                required
                              ></textarea>
                            </div>
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                className="black-btn w-[300px] h-[50px] flex justify-center"
                              >
                                <span className="flex space-x-1 items-center h-full">
                                  <span className="text-sm font-semibold">
                                    Submit Review
                                  </span>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="w-full comments">
                          <div className="w-full h-[1px] bg-[#DCDCDC]"></div>
                          <h1 className="text-2xl font-medium text-qblack my-5">
                            Comments
                          </h1>
                          {blogComments?.length !== 0 &&
                            blogComments?.map((blogComment) => (
                              <BlogCommentCard blogComment={blogComment} />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[370px] w-full">
              <div className="search-widget w-full p-[30px] bg-white mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Search
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <div className="w-full h-[60px] relative">
                  <input
                    type="text"
                    className="w-full h-full bg-[#F9F3E9] focus:outline-none focus:ring-0 pl-5 pr-16 placeholder:text-qgraytwo"
                  />
                  <span className="absolute right-5 top-[17px]"></span>
                </div>
              </div>
              <div className="latest-post-widget w-full bg-white p-[30px] mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Latest Post
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <ul className="flex flex-col space-y-5">
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="flex space-x-5 rtl:space-x-reverse">
                    <div className="w-[85px] h-[92px] overflow-hidden rounded relative">
                      <span>
                        <img
                          className="h-full"
                          src="https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-09-44-5529.jpg&w=1920&q=75"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex-1 h-full flex flex-col justify-between">
                      <a href="/blogs/blog?slug=businesstoconsumer-that-involves-selling-fight-products-and-services">
                        <p className="text-[18px] text-qblack leading-7 cursor-pointer mb-3">
                          Business-to-consumer that involves selling fight
                          products and services
                        </p>
                      </a>
                      <div className="flex space-x-3 rtl:space-x-reverse items-center">
                        <span></span>
                        <span className="text-sm text-qgraytwo">
                          22 Sep 2022
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="categories-widget w-full bg-white p-[30px] mb-[30px] aos-init aos-animate">
                <h1 className="text-[22px] text-qblack font-bold mb-5">
                  Categories
                </h1>
                <div className="w-full h-[1px] bg-[#DCDCDC] mb-5"></div>
                <ul className="flex flex-col space-y-5">
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Development
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Guide
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Inspiration
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Latest News
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Revenue
                      </span>
                    </a>
                  </li>
                  <li className="flex justify-between items-center group">
                    <a href="/category-by-blogs?category=development">
                      <span className="text-base text-qgraytwo group-hover:text-qyellow cursor-pointer">
                        Development
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full h-[358px] aos-init aos-animate">
                <div className="w-full h-full p-[30px] bg-black bg-opacity-75 flex flex-col justify-between">
                  <div>
                    <h1 className="text-[22px] text-white font-bold mb-5">
                      Our Newsletter
                    </h1>
                    <div className="w-full h-[1px] bg-[#615B9C] mb-5"></div>
                    <p className="text-base text-white leading-[26px] line-clamp-2">
                      Follow our newsletter to stay updated about us.
                    </p>
                  </div>
                  <div>
                    <div className="w-full mb-3.5">
                      <input
                        placeholder="Enter Your Email Address"
                        type="text"
                        className="w-full h-[60px] bg-[#ECEAEC] pl-5 rtl:pr-5 focus:outline-none focus:ring-0 placeholder:text-[#9A9A9A]"
                      />
                    </div>
                    <button className="w-full h-[60px]">
                      <span
                        style={{ fontSize: "18px" }}
                        className="yellow-btn w-full h-full text-[18px]"
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
