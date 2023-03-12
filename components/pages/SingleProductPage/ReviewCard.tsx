//@ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

import { controller } from "../../../src/state/StateController";

interface Props {}

const ReviewCard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="comment-item bg-white px-10 py-[32px] mb-2.5">
      <div className="comment-author flex justify-between items-center mb-3">
        <div className="flex space-x-3 items-center">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
            <span>
              <img
                alt=""
                src="https://shopo-ecom.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcomment-user-1.png&w=1920&q=75"
                className="w-full h-full object-cover"
              />
            </span>
          </div>
          <div>
            <p className="text-[18px] font-medium text-qblack">
              Autumn Decker Dean
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <ReactStars
            count={5}
            value={3.5}
            edit={false}
            size={24}
            isHalf={true}
            emptyIcon={<FaRegStar />}
            halfIcon={<FaStarHalfAlt />}
            fullIcon={<FaStar />}
            activeColor="rgb(255, 168, 0)"
            color="#d3d3d3"
          />
          <span className="text-[13px] font-normal text-qblack mt-1 inline-block">
            (4.0)
          </span>
        </div>
      </div>
      <div className="comment mb-[30px]">
        <p className="text-[15px] text-qgray leading-7 text-normal">
          Enim et ducimus fug
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
