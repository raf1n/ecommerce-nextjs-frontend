import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";

interface Props {}

const Itemdetails: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full bg-qgrayBorder">
      <div className="container-x mx-auto pb-[60px]">
        <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
          <div>
            <ul className="flex space-x-12 ">
              <li>
                <span className="py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer border-qyellow text-qblack ">
                  Description
                </span>
              </li>
              {/* <li>
                                <span className='py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer border-transparent text-qgray'>Reviews</span>
                            </li> */}
            </ul>
          </div>
          <div className="w-full h-[1px] bg-[#c1cccc] relative left-0 sm:top-[00px] top-[36px] -z-1"></div>
        </div>
        <div className="tab-contents w-full ">
          <div>
            <h6 className="text-[20px] font-bold text-qblack mb-5">
              Introduction
            </h6>

            <div className="product-detail-des mb-10 text-qgray">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-[20px] font-bold text-qblack mb-5 ">Reviews</h6>
            <div className="text-qgray">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                aut labore deleniti accusamus laboriosam? Eum non, ipsum sit
                debitis consectetur sunt ut autem dolore, molestiae est vel
                explicabo dignissimos voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemdetails;
